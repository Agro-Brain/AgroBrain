# Agrobrain

Agrobrain is a smart agriculture platform that integrates weather forecasting, soil analysis, crop recommendation, and disease detection to support informed decision-making for farmers. The system is built with a modern React frontend and modular service-based architecture.

---

## 🗂️ Project Structure


### Key Features:
- **Frontend**: React-based UI  
- **Backend**: Central API gateway  
- **Services**:
  - `Crop Recommendation`: Location-specific crops  
  - `CropSphere`: Weather-based recommendations  
  - `Farm-GPT`: AI fertilizer advisor  
  - `Plant Disease Detection`: Image diagnosis system  

---

### How to Use:
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/Agrobrain.git
---

## 🧠 Modules

### 1. **Crop Recommendation**

- **Location-based** crop suggestion engine.
- Users input their **PIN code** to receive:
  - 5-day **weather forecast** (temperature & humidity)
  - Recommended **crops with high yield potential**
  - **Water requirement** data for each suggested crop

---

### 2. **Farm-GPT-AI-Powered-Fertilizer-Recommendation-System**

- Users provide:
  - Soil values: **Nitrogen (N), Phosphorus (P), Potassium (K)**
  - Desired **crop type**
- Output:
  - Quantity of N/P/K to **add or reduce**
  - Smart recommendations for **soil balancing**

---

### 3. **Plant Disease Detection**

- Users upload an **image of a diseased plant**
- The model:
  - Identifies the **disease**
  - Uses **Gemini API** to return **remedial actions** and management tips

---

### 4. **CropSphere**

- A second **crop recommendation** model
- Based purely on **weather patterns**
- Suggests the most suitable crops for upcoming climate conditions

---

## 🌐 Frontend

- **Tech:** React.js
- **Features:**
  - Responsive and modern UI
  - Seamless integration with all services
  - User-friendly interaction for each module

---

## 🚀 Getting Started

> Setup instructions for each module will be available in their respective folders.  
> Ensure you have Python (for backend services) and Node.js (for frontend) installed.

---

## 📄 License

This project is currently intended for research and development use. License to be added.
