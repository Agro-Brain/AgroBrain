# Use the official Python base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Install required dependencies, including CatBoost
RUN pip install --no-cache-dir fastapi uvicorn numpy pandas scikit-learn python-multipart catboost

# Copy the requirements file and install additional dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the model and application files into the container
COPY . .

# Expose the port FastAPI will run on
EXPOSE 7860

# Command to run the FastAPI app using Uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
