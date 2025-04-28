import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const demoData = {
  states: [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
    "Dadra and Nagar Haveli", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ],
    districts: ["NICOBARS", "NORTH AND MIDDLE ANDAMAN", "SOUTH ANDAMANS", "ANANTAPUR", "CHITTOOR", "EAST GODAVARI", "GUNTUR", "KADAPA", "KRISHNA", "KURNOOL", "PRAKASAM", "SPSR NELLORE", "SRIKAKULAM", "VISAKHAPATANAM", "VIZIANAGARAM", "WEST GODAVARI", "ANJAW", "CHANGLANG", "DIBANG VALLEY", "EAST KAMENG", "EAST SIANG", "KURUNG KUMEY", "LOHIT", "LONGDING", "LOWER SUBANSIRI", "PAPUM PARE", "TAWANG", "TIRAP", "UPPER SIANG", "UPPER SUBANSIRI", "WEST KAMENG", "WEST SIANG", "BAKSA", "BARPETA", "BONGAIGAON", "CACHAR", "CHIRANG", "DARRANG", "DHEMAJI", "DHUBRI", "DIBRUGARH", "DIMA HASAO", "GOALPARA", "GOLAGHAT", "HAILAKANDI", "JORHAT", "KAMRUP", "KAMRUP METRO", "KARBI ANGLONG", "KARIMGANJ", "KOKRAJHAR", "LAKHIMPUR", "MARIGAON", "NAGAON", "NALBARI", "SIVASAGAR", "SONITPUR", "TINSUKIA", "UDALGURI", "ARARIA", "ARWAL", "AURANGABAD", "BANKA", "BEGUSARAI", "BHAGALPUR", "BHOJPUR", "BUXAR", "DARBHANGA", "GAYA", "GOPALGANJ", "JAMUI", "JEHANABAD", "KAIMUR (BHABUA)", "KATIHAR", "KHAGARIA", "KISHANGANJ", "LAKHISARAI", "MADHEPURA", "MADHUBANI", "MUNGER", "MUZAFFARPUR", "NALANDA", "NAWADA", "PASHCHIM CHAMPARAN", "PATNA", "PURBI CHAMPARAN", "PURNIA", "ROHTAS", "SAHARSA", "SAMASTIPUR", "SARAN", "SHEIKHPURA", "SHEOHAR", "SITAMARHI", "SIWAN", "SUPAUL", "VAISHALI", "CHANDIGARH", "BALOD", "BALODA BAZAR", "BALRAMPUR", "BASTAR", "BEMETARA", "BIJAPUR", "BILASPUR", "DANTEWADA", "DHAMTARI", "DURG", "GARIYABAND", "JANJGIR-CHAMPA", "JASHPUR", "KABIRDHAM", "KANKER", "KONDAGAON", "KORBA", "KOREA", "MAHASAMUND", "MUNGELI", "NARAYANPUR", "RAIGARH", "RAIPUR", "RAJNANDGAON", "SUKMA", "SURAJPUR", "SURGUJA", "DADRA AND NAGAR HAVELI", "NORTH GOA", "SOUTH GOA", "AHMADABAD", "AMRELI", "ANAND", "BANAS KANTHA", "BHARUCH", "BHAVNAGAR", "DANG", "DOHAD", "GANDHINAGAR", "JAMNAGAR", "JUNAGADH", "KACHCHH", "KHEDA", "MAHESANA", "NARMADA", "NAVSARI", "PANCH MAHALS", "PATAN", "PORBANDAR", "RAJKOT", "SABAR KANTHA", "SURAT", "SURENDRANAGAR", "TAPI", "VADODARA", "VALSAD", "AMBALA", "BHIWANI", "FARIDABAD", "FATEHABAD", "GURGAON", "HISAR", "JHAJJAR", "JIND", "KAITHAL", "KARNAL", "KURUKSHETRA", "MAHENDRAGARH", "MEWAT", "PALWAL", "PANCHKULA", "PANIPAT", "REWARI", "ROHTAK", "SIRSA", "SONIPAT", "YAMUNANAGAR", "CHAMBA", "HAMIRPUR", "KANGRA", "KINNAUR", "KULLU", "LAHUL AND SPITI", "MANDI", "SHIMLA", "SIRMAUR", "SOLAN", "UNA", "ANANTNAG", "BADGAM", "BANDIPORA", "BARAMULLA", "DODA", "GANDERBAL", "JAMMU", "KATHUA", "KISHTWAR", "KULGAM", "POONCH", "PULWAMA", "RAJAURI", "REASI", "SAMBA", "SHOPIAN", "SRINAGAR", "UDHAMPUR", "CHATRA", "DEOGHAR", "DHANBAD", "DUMKA", "EAST SINGHBUM", "GARHWA", "GODDA", "GUMLA", "HAZARIBAGH", "JAMTARA", "LATEHAR", "LOHARDAGA", "PAKUR", "RAMGARH", "RANCHI", "SAHEBGANJ", "SARAIKELA KHARSAWAN", "SIMDEGA", "BAGALKOT", "BANGALORE RURAL", "BELGAUM", "BELLARY", "BENGALURU URBAN", "BIDAR", "CHAMARAJANAGAR", "CHIKBALLAPUR", "CHIKMAGALUR", "CHITRADURGA", "DAKSHIN KANNAD", "DAVANGERE", "DHARWAD", "GADAG", "GULBARGA", "HASSAN", "HAVERI", "KODAGU", "KOLAR", "KOPPAL", "MANDYA", "MYSORE", "RAICHUR", "RAMANAGARA", "SHIMOGA", "TUMKUR", "UDUPI", "UTTAR KANNAD", "YADGIR", "ALAPPUZHA", "ERNAKULAM", "IDUKKI", "KANNUR", "KASARAGOD", "KOLLAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM", "PALAKKAD", "PATHANAMTHITTA", "THIRUVANANTHAPURAM", "THRISSUR", "WAYANAD", "ALIRAJPUR", "ANUPPUR", "ASHOKNAGAR", "BALAGHAT", "BARWANI", "BETUL", "BHIND", "BHOPAL", "BURHANPUR", "CHHATARPUR", "CHHINDWARA", "DAMOH", "DATIA", "DEWAS", "DHAR", "DINDORI", "GUNA", "GWALIOR", "HARDA", "HOSHANGABAD", "INDORE", "JABALPUR", "JHABUA", "KATNI", "KHANDWA", "KHARGONE", "MANDLA", "MANDSAUR", "MORENA", "NARSINGHPUR", "NEEMUCH", "PANNA", "RAISEN", "RAJGARH", "RATLAM", "REWA", "SAGAR", "SATNA", "SEHORE", "SEONI", "SHAHDOL", "SHAJAPUR", "SHEOPUR", "SHIVPURI", "SIDHI", "SINGRAULI", "TIKAMGARH", "UJJAIN", "UMARIA", "VIDISHA", "AHMEDNAGAR", "AKOLA", "AMRAVATI", "BEED", "BHANDARA", "BULDHANA", "CHANDRAPUR", "DHULE", "GADCHIROLI", "GONDIA", "HINGOLI", "JALGAON", "JALNA", "KOLHAPUR", "LATUR", "NAGPUR", "NANDED", "NANDURBAR", "NASHIK", "OSMANABAD", "PALGHAR", "PARBHANI", "PUNE", "RAIGAD", "RATNAGIRI", "SANGLI", "SATARA", "SINDHUDURG", "SOLAPUR", "THANE", "WARDHA", "WASHIM", "YAVATMAL", "BISHNUPUR", "CHANDEL", "CHURACHANDPUR", "IMPHAL EAST", "IMPHAL WEST", "SENAPATI", "TAMENGLONG", "THOUBAL", "UKHRUL", "EAST GARO HILLS", "EAST JAINTIA HILLS", "EAST KHASI HILLS", "NORTH GARO HILLS", "RI BHOI", "SOUTH GARO HILLS", "SOUTH WEST GARO HILLS", "SOUTH WEST KHASI HILLS", "WEST GARO HILLS", "WEST JAINTIA HILLS", "WEST KHASI HILLS", "AIZAWL", "CHAMPHAI", "KOLASIB", "LAWNGTLAI", "LUNGLEI", "MAMIT", "SAIHA", "SERCHHIP", "DIMAPUR", "KIPHIRE", "KOHIMA", "LONGLENG", "MOKOKCHUNG", "MON", "PEREN", "PHEK", "TUENSANG", "WOKHA", "ZUNHEBOTO", "ANUGUL", "BALANGIR", "BALESHWAR", "BARGARH", "BHADRAK", "BOUDH", "CUTTACK", "DEOGARH", "DHENKANAL", "GAJAPATI", "GANJAM", "JAGATSINGHAPUR", "JAJAPUR", "JHARSUGUDA", "KALAHANDI", "KANDHAMAL", "KENDRAPARA", "KENDUJHAR", "KHORDHA", "KORAPUT", "MALKANGIRI", "MAYURBHANJ", "NABARANGPUR", "NAYAGARH", "NUAPADA", "PURI", "RAYAGADA", "SAMBALPUR", "SONEPUR", "SUNDARGARH", "KARAIKAL", "MAHE", "PONDICHERRY", "YANAM", "AMRITSAR", "BARNALA", "BATHINDA", "FARIDKOT", "FATEHGARH SAHIB", "FAZILKA", "FIROZEPUR", "GURDASPUR", "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "MANSA", "MOGA", "MUKTSAR", "NAWANSHAHR", "PATHANKOT", "PATIALA", "RUPNAGAR", "S.A.S NAGAR", "SANGRUR", "TARN TARAN", "AJMER", "ALWAR", "BANSWARA", "BARAN", "BARMER", "BHARATPUR", "BHILWARA", "BIKANER", "BUNDI", "CHITTORGARH", "CHURU", "DAUSA", "DHOLPUR", "DUNGARPUR", "GANGANAGAR", "HANUMANGARH", "JAIPUR", "JAISALMER", "JALORE", "JHALAWAR", "JHUNJHUNU", "JODHPUR", "KARAULI", "KOTA", "NAGAUR", "PALI", "PRATAPGARH", "RAJSAMAND", "SAWAI MADHOPUR", "SIKAR", "SIROHI", "TONK", "UDAIPUR", "EAST DISTRICT", "NORTH DISTRICT", "SOUTH DISTRICT", "WEST DISTRICT", "ARIYALUR", "COIMBATORE", "CUDDALORE", "DHARMAPURI", "DINDIGUL", "ERODE", "KANCHIPURAM", "KANNIYAKUMARI", "KARUR", "KRISHNAGIRI", "MADURAI", "NAGAPATTINAM", "NAMAKKAL", "PERAMBALUR", "PUDUKKOTTAI", "RAMANATHAPURAM", "SALEM", "SIVAGANGA", "THANJAVUR", "THE NILGIRIS", "THENI", "THIRUVALLUR", "THIRUVARUR", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUPPUR", "TIRUVANNAMALAI", "TUTICORIN", "VELLORE", "VILLUPURAM", "VIRUDHUNAGAR", "ADILABAD", "HYDERABAD", "KARIMNAGAR", "KHAMMAM", "MAHBUBNAGAR", "MEDAK", "NALGONDA", "NIZAMABAD", "RANGAREDDI", "WARANGAL", "DHALAI", "GOMATI", "KHOWAI", "NORTH TRIPURA", "SEPAHIJALA", "SOUTH TRIPURA", "UNAKOTI", "WEST TRIPURA", "AGRA", "ALIGARH", "ALLAHABAD", "AMBEDKAR NAGAR", "AMETHI", "AMROHA", "AURAIYA", "AZAMGARH", "BAGHPAT", "BAHRAICH", "BALLIA", "BANDA", "BARABANKI", "BAREILLY", "BASTI", "BIJNOR", "BUDAUN", "BULANDSHAHR", "CHANDAULI", "CHITRAKOOT", "DEORIA", "ETAH", "ETAWAH", "FAIZABAD", "FARRUKHABAD", "FATEHPUR", "FIROZABAD", "GAUTAM BUDDHA NAGAR", "GHAZIABAD", "GHAZIPUR", "GONDA", "GORAKHPUR", "HAPUR", "HARDOI", "HATHRAS", "JALAUN", "JAUNPUR", "JHANSI", "KANNAUJ", "KANPUR DEHAT", "KANPUR NAGAR", "KASGANJ", "KAUSHAMBI", "KHERI", "KUSHI NAGAR", "LALITPUR", "LUCKNOW", "MAHARAJGANJ", "MAHOBA", "MAINPURI", "MATHURA", "MAU", "MEERUT", "MIRZAPUR", "MORADABAD", "MUZAFFARNAGAR", "PILIBHIT", "RAE BARELI", "RAMPUR", "SAHARANPUR", "SAMBHAL", "SANT KABEER NAGAR", "SANT RAVIDAS NAGAR", "SHAHJAHANPUR", "SHAMLI", "SHRAVASTI", "SIDDHARTH NAGAR", "SITAPUR", "SONBHADRA", "SULTANPUR", "UNNAO", "VARANASI", "ALMORA", "BAGESHWAR", "CHAMOLI", "CHAMPAWAT", "DEHRADUN", "HARIDWAR", "NAINITAL", "PAURI GARHWAL", "PITHORAGARH", "RUDRA PRAYAG", "TEHRI GARHWAL", "UDAM SINGH NAGAR", "UTTAR KASHI", "24 PARAGANAS NORTH", "24 PARAGANAS SOUTH", "BANKURA", "BARDHAMAN", "BIRBHUM", "COOCHBEHAR", "DARJEELING", "DINAJPUR DAKSHIN", "DINAJPUR UTTAR", "HOOGHLY", "HOWRAH", "JALPAIGURI", "MALDAH", "MEDINIPUR EAST", "MEDINIPUR WEST", "MURSHIDABAD", "NADIA", "PURULIA"],
  seasons: ["Kharif", "Whole Year", "Autumn", "Rabi", "Summer", "Winter"]
};

const App = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: 'Odisha',
    district: '',
    season: '',
    N: 90,
    P: 40,
    K: 30,
    temperature: 25,
    humidity: 70,
    ph: 6.5,
    rainfall: 200,
  });

  const [recommendations, setRecommendations] = useState([]);
  const [cropImages, setCropImages] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const getImageUrl = async (crop) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${crop}&client_id=NBhSdzBmmJWbOthnO7Yq6raJ69FLp4jSIsVP3JOPlog`
      );
      return res.data.results[0]?.urls?.regular || 'https://via.placeholder.com/400x200';
    } catch (error) {
      console.error('Image fetch failed for', crop, error);
      return 'https://via.placeholder.com/400x200';
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://sujoy0011-crop-recommendation.hf.space/predict', {
        ...formData,
        area: 2.5, // hardcoded
      });
  
      const crops = response.data.recommendations;
      setRecommendations(crops);
  
      // Fetch image URLs for each crop
      const imageMap = {};
      for (let crop of crops) {
        const url = await getImageUrl(crop);
        imageMap[crop] = url;
      }
      setCropImages(imageMap);
    } catch (error) {
      console.error('API error:', error);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-700">🌿 Crop Recommendation</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Home
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {demoData.states.map((state, idx) => (
              <option key={idx} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select District</option>
            {demoData.districts.map((district, idx) => (
              <option key={idx} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Season</option>
            {demoData.seasons.map((season, idx) => (
              <option key={idx} value={season}>{season}</option>
            ))}
          </select>
        </div>

        {[{ name: 'N', label: 'Nitrogen (N)' }, { name: 'P', label: 'Phosphorus (P)' }, { name: 'K', label: 'Potassium (K)' },
          { name: 'temperature', label: 'Temperature (°C)' }, { name: 'humidity', label: 'Humidity (%)' },
          { name: 'ph', label: 'pH' }, { name: 'rainfall', label: 'Rainfall (mm)' }].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type="number"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Get Recommendation
        </button>
      </div>

      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Recommended Crops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommendations.map((crop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
  src={cropImages[crop] || 'https://via.placeholder.com/400x200'}
  alt={crop}
  className="w-full h-40 object-cover"
/>

                <div className="p-4 text-center">
                  <p className="text-lg font-semibold capitalize text-gray-800">{crop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
