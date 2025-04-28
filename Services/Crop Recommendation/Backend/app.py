from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import pickle
import numpy as np
import pandas as pd
import json

app = FastAPI()

# Load models
with open("model_useing_Location_Seasion_Area.pkl", "rb") as f:
    location_model = pickle.load(f)

with open("model_useing_npk.pkl", "rb") as f:
    npk_model = pickle.load(f)

# Load unique values from the JSON file
with open("unique_values.json", "r") as f:
    unique_values = json.load(f)


class CropRequest(BaseModel):
    state: Optional[str] = None
    district: Optional[str] = None
    season: Optional[str] = None
    area: Optional[float] = None
    N: Optional[float] = None
    P: Optional[float] = None
    K: Optional[float] = None
    temperature: Optional[float] = None
    humidity: Optional[float] = None
    ph: Optional[float] = None
    rainfall: Optional[float] = None


def get_top_recommendations(model, input_data, top_n=3):
    if hasattr(model, "predict_proba"):
        proba = model.predict_proba(input_data)
        top_indices = np.argsort(proba[0])[-top_n:][::-1]
        return [model.classes_[i] for i in top_indices]
    return model.predict(input_data).tolist()


@app.post("/predict")
def predict_crop(request: CropRequest):
    location_recommendations = []
    npk_recommendations = []

    if request.state and request.district and request.season and request.area:
        try:
            input_data = pd.DataFrame([[request.state, request.district, request.season, np.log1p(request.area)]],
                                      columns=['State_Name', 'District_Name', 'Season', 'Area'])
            location_recommendations = get_top_recommendations(location_model, input_data, top_n=3)
        except ValueError:
            pass  # Handle invalid input

    if request.N is not None and request.P is not None and request.K is not None and request.temperature is not None \
            and request.humidity is not None and request.ph is not None and request.rainfall is not None:
        try:
            input_data = np.array([[request.N, request.P, request.K, request.temperature,
                                    request.humidity, request.ph, request.rainfall]])
            npk_recommendations = get_top_recommendations(npk_model, input_data, top_n=3)
        except ValueError:
            pass  # Handle invalid input

    location_lower = {crop.lower(): crop for crop in location_recommendations}
    common_crops_lower = set(location_lower.keys()) & set(crop.lower() for crop in npk_recommendations)
    common_crops = [location_lower[crop] for crop in common_crops_lower]

    location_recommendations = [crop for crop in location_recommendations if crop.lower() not in common_crops_lower]
    npk_recommendations = [crop for crop in npk_recommendations if crop.lower() not in common_crops_lower]

    merged_crops = common_crops + npk_recommendations + location_recommendations
    final_recommendations = [crop.lower() for crop in merged_crops[:4]]

    return {"recommendations": final_recommendations if final_recommendations else []}
