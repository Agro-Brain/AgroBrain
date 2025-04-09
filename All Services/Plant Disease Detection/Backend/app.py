import os
from dotenv import load_dotenv
import google.generativeai as genai
from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
import numpy as np
from PIL import Image
import json

# Load environment variables from .env file
load_dotenv()

# Configure Google Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
gemini_model = genai.GenerativeModel("gemini-1.5-flash")

app = FastAPI()

# Load Model & Class Indices
model = tf.keras.models.load_model('plant_disease_model.h5')
class_indices = json.load(open('class_indices.json'))
class_indices = {int(k): v for k, v in class_indices.items()}  # Ensure keys are int

def fetch_gemini_advice(crop, disease):
    """Fetches step-by-step cure instructions for the given crop and disease using Google Gemini API."""
    if disease.lower() == "healthy":
        return "The plant is healthy. No action needed."
    
    base_prompt = (
        f"Provide only step-by-step instructions to cure {disease} in {crop}. "
        "Do not include any introduction or description, just list the steps clearly and concisely."
    )
    response = gemini_model.generate_content(base_prompt)
    return response.text if response else "No cure information found."

def parse_prediction(prediction):
    """Separates the crop name and disease name from the prediction."""
    if "___" in prediction:
        crop, disease = prediction.split("___")
    else:
        crop, disease = prediction, "Unknown"
    return crop, disease

# Image Preprocessing
def load_and_preprocess_image(image_path, target_size=(224, 224)):
    img = Image.open(image_path)
    img = img.resize(target_size)
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array.astype('float32') / 255.  # Normalize
    return img_array

# Prediction Function
def predict_image_class(image_path):
    preprocessed_img = load_and_preprocess_image(image_path)
    predictions = model.predict(preprocessed_img)
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    return class_indices[predicted_class_index]



# Function to Convert Image to JPG
def convert_to_jpg(image_path: str) -> str:
    """
    Converts any image to JPG format and returns the path to the converted image.
    """
    # Open the image
    img = Image.open(image_path)

    # Ensure the image is in RGB mode (important for non-RGB images like PNG)
    img = img.convert("RGB")

    # Define the new file path (adding .jpg extension)
    new_image_path = os.path.splitext(image_path)[0] + ".jpg"

    # Save the image as JPG
    img.save(new_image_path, "JPEG")

    # Return the path of the new image
    return new_image_path


@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    # Save the uploaded file to /tmp directory
    file_path = os.path.join('/tmp', file.filename)
    with open(file_path, 'wb') as buffer:
        buffer.write(await file.read())
    
    # Convert the image to JPG if it's not already in JPG format
    if not file.filename.lower().endswith(".jpg"):
        file_path = convert_to_jpg(file_path)

    # Predict the class
    prediction = predict_image_class(file_path)
    crop, disease = parse_prediction(prediction)
    
    # Get cure steps from Google Gemini
    cure_steps = fetch_gemini_advice(crop, disease)
    
    # Remove the temporary file
    os.remove(file_path)
    
    return {
        "crop": crop,
        "predicted_disease": disease,
        "cure_steps": cure_steps
    }
