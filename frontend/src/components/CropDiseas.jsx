import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DiseasePredictor = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      setShowCamera(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Camera error:', err);
      alert('Unable to access camera');
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        setFile(new File([blob], 'captured_image.jpg', { type: 'image/jpeg' }));
      }, 'image/jpeg');
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    const tracks = stream?.getTracks();
    tracks?.forEach((track) => track.stop());
    setShowCamera(false);
  };

  const predictDisease = async () => {
    if (!file) {
      alert('Please select or capture an image.');
      return;
    }

    setLoading(true);
    setError('');
    setPrediction(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://sujoy0011-plant-disease-api.hf.space/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      console.error(err);
      setError('Error: Unable to get prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Back Button */}
        <button
          onClick={() => {
            stopCamera();
            navigate('/');
          }}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          ← Go Back
        </button>

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          🌿 Plant Disease Predictor
        </h1>

        {/* File Input */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              stopCamera();
              setFile(e.target.files[0]);
            }}
            className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none w-full md:w-auto"
          />

          <button
            onClick={startCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Open Camera
          </button>

          {showCamera && (
            <button
              onClick={captureImage}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Capture Image
            </button>
          )}
        </div>

        {/* Camera View */}
        {showCamera && (
          <div className="mt-6">
            <video
              ref={videoRef}
              autoPlay
              className="w-full max-w-md mx-auto border rounded-md shadow"
            ></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
          </div>
        )}

        {/* Predict Button */}
        <div className="text-center mt-6">
          <button
            onClick={predictDisease}
            disabled={loading}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Predicting...' : 'Predict Disease'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 text-red-600 font-semibold text-center">{error}</div>
        )}

        {/* Prediction Output */}
        {prediction && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              🧪 Predicted Disease:{" "}
              <span className="text-red-600">{prediction.predicted_disease}</span>
            </h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              🌱 Crop: <span className="text-green-700">{prediction.crop}</span>
            </h3>

            <div>
              <h4 className="text-md font-semibold text-gray-800 mb-2">🩺 Treatment Steps:</h4>
              <ol className="list-decimal list-inside space-y-2">
                {prediction.cure_steps
                  .split('\n')
                  .filter((step) => step.trim() !== '')
                  .map((step, index) => (
                    <li
                      key={index}
                      className="bg-green-50 border-l-4 border-green-500 p-3 rounded shadow-sm"
                    >
                      {step}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePredictor;
