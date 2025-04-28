export const cropCareInstructions = {

  // Rice Varieties
  'Rice (Basmati)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Install shade nets and increase irrigation frequency');
      if (avg_temp < 20) advice.push('Use warm water irrigation and cover with plastic tunnels');
      if (avg_humidity < 60) advice.push('Mist plants regularly and maintain flooded conditions');
      if (avg_rainfall < 5) advice.push('Implement supplemental irrigation systems');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Basmati rice cultivation.';
  },
  'Rice (Sona Masoori)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Use sprinkler cooling during peak heat');
      if (avg_temp < 20) advice.push('Apply organic mulch for soil insulation');
      if (avg_humidity < 58) advice.push('Maintain consistent water levels in fields'); 
      if (avg_rainfall > 240) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Sona Masoori rice growing conditions.';
  },
  'Rice (IR64)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Implement mid-day field flooding for cooling');
      if (avg_temp < 20) advice.push('Use black plastic mulch for heat retention');
      if (avg_humidity < 55) advice.push('Increase misting frequency');
      if (avg_rainfall < 5) advice.push('Activate drip irrigation system');
      return advice.length ? advice.join('; ') + '.' : 'IR64 rice growing well in current conditions.';
  },
  'Rice (Ponni)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Use intermittent flooding and shade nets');
      if (avg_temp < 20) advice.push('Consider supplemental warming measures');
      if (avg_humidity < 60) advice.push('Implement regular misting');
      if (avg_rainfall < 5) advice.push('Increase irrigation frequency');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Ponni rice cultivation.';
  },
  'Rice (Ponni Samba)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Apply shade nets and intermittent flooding');
      if (avg_temp < 20) advice.push('Utilize warm water irrigation');
      if (avg_humidity < 60) advice.push('Mist regularly to maintain humidity');
      if (avg_rainfall < 5) advice.push('Supplement with additional irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Ponni Samba rice.';
  },
  'Rice (Red Matta)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 43) advice.push('Use extra shading and controlled flooding');
      if (avg_temp < 18) advice.push('Apply organic mulching for warmth');
      if (avg_humidity < 62) advice.push('Enhance field moisture via targeted irrigation');
      if (avg_rainfall < 6) advice.push('Implement supplemental irrigation systems');
      return advice.length ? advice.join('; ') + '.' : 'Conditions are ideal for Red Matta rice.';
  },
  'Rice (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 43) advice.push('Employ shade nets and intermittent flooding techniques');
      if (avg_temp < 18) advice.push('Use mulching to retain soil warmth');
      if (avg_humidity < 62) advice.push('Maintain higher humidity with misting systems');
      if (avg_rainfall < 6) advice.push('Supplement with controlled irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Optimal growing conditions for Hybrid rice are met.';
  },
  'Rice (Organic)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Utilize organic-approved cooling measures and shade nets');
      if (avg_temp < 20) advice.push('Apply organic mulches to conserve warmth');
      if (avg_humidity < 60) advice.push('Enhance field moisture via organic water retention methods');
      if (avg_rainfall < 5) advice.push('Increase irrigation using organic practices');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for organic rice cultivation.';
  },
  // Wheat Varieties
  'Wheat (North Indian)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Apply anti-transpirant spray');
      if (avg_temp < 7) advice.push('Use frost protection covers');
      if (avg_humidity < 40) advice.push('Schedule light irrigation morning/evening');
      if (avg_rainfall > 100) advice.push('Install surface drainage system');
      return advice.length ? advice.join('; ') + '.' : 'Favorable wheat-growing conditions maintained.';
  },
  'Wheat (Rabi)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Use kaolin clay particle film');
      if (avg_temp < 7) advice.push('Apply straw mulch for insulation');
      if (avg_humidity < 35) advice.push('Implement sprinkler irrigation');
      if (avg_rainfall > 90) advice.push('Create raised seed beds');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Rabi wheat conditions present.';
  },
  'Wheat (Hard Red)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Apply midday irrigation for evaporative cooling');
      if (avg_temp < 7) advice.push('Use row covers with thermal properties');
      if (avg_humidity > 85) advice.push('Increase air circulation with spaced planting');
      if (avg_rainfall < 1) advice.push('Initiate surge flooding irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Hard Red Winter Wheat conditions.';
  },

  'Wheat (Soft)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Use anti-transpirant (e.g., di-1-p-menthene)');
      if (avg_temp < 7) advice.push('Apply nitrogen-rich foliar spray');
      if (avg_rainfall > 100) advice.push('Install subsurface drainage tiles');
      if (avg_humidity < 50) advice.push('Implement low-pressure sprinkler system');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Soft White Wheat environment.';
  },

  'Wheat (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Apply silicon nutrient supplements');
      if (avg_temp < 7) advice.push('Use PGRs (Plant Growth Regulators)');
      if (avg_humidity < 50) advice.push('Optimize irrigation using soil moisture sensors');
      if (avg_rainfall > 100) advice.push('Create cambered beds for drainage');
      return advice.length ? advice.join('; ') + '.' : 'Hybrid Wheat performing optimally.';
  },

  'Wheat (Organic)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Apply compost tea with kelp extract');
      if (avg_temp < 7) advice.push('Use straw-bale windbreaks');
      if (avg_humidity > 85) advice.push('Enhance biodiversity with companion planting');
      if (avg_rainfall < 1) advice.push('Deploy wick irrigation system');
      return advice.length ? advice.join('; ') + '.' : 'Organic Wheat in prime condition.';
  },
  // Maize/Corn Types
  'Maize (Field Corn)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use evaporative cooling systems');
      if (avg_temp < 15) advice.push('Apply black plastic mulch');
      if (avg_humidity < 50) advice.push('Increase irrigation frequency');
      if (avg_rainfall < 10) advice.push('Initiate pivot irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Ideal field corn growth conditions.';
  },
  'Maize (Sweet Corn)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
        let advice = [];
        if (avg_temp > 35) advice.push('Use overhead sprinklers during silking stage');
        if (avg_temp < 15) advice.push('Apply black plastic mulch for soil warming');
        if (avg_rainfall < 10) advice.push('Implement surge irrigation for even moisture');
        if (avg_humidity < 50) advice.push('Maintain 70% field capacity moisture');
        return advice.length ? advice.join('; ') + '.' : 'Perfect Sweet Corn growing parameters.';
    },

  'Maize (Flint Corn)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Apply calcium nitrate foliar spray');
      if (avg_temp < 15) advice.push('Use clear plastic tunnels');
      if (avg_rainfall > 190) advice.push('Install French drain system');
      if (avg_humidity < 50) advice.push('Optimize pivot irrigation schedule');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Flint Corn conditions.';
  },

  'Maize (Dent Corn)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Time irrigation to coincide with dent stage');
      if (avg_temp < 15) advice.push('Apply starter fertilizer with zinc');
      if (avg_rainfall > 190) advice.push('Create contour bunds for erosion control');
      if (avg_humidity < 50) advice.push('Use moisture-conserving tillage');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Dent Corn environment.';
  },

  'Maize (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Apply anti-senescence foliar nutrients');
      if (avg_temp < 15) advice.push('Use infrared-transmitting mulch');
      if (avg_rainfall < 10) advice.push('Implement SDI (Subsurface Drip Irrigation)');
      if (avg_humidity > 85) advice.push('Enhance canopy architecture through pruning');
      return advice.length ? advice.join('; ') + '.' : 'Hybrid Maize in peak condition.';
  },

  'Maize (Organic)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Apply vermicompost tea with mycorrhizae');
      if (avg_temp < 15) advice.push('Use bio-degradable row covers');
      if (avg_rainfall > 190) advice.push('Implement keyline design water management');
      if (avg_humidity < 50) advice.push('Use ollas (porous clay pots) for irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Organic Maize thriving in current conditions.';
  },

  // Barley Types
  'Barley (Malt Barley)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Apply kaolin clay or reflective films to reduce heat stress');
      if (avg_temp < 7) advice.push('Utilize straw mulching for insulation');
      if (avg_humidity < 35) advice.push('Implement sprinkler irrigation to maintain moisture');
      if (avg_rainfall > 90) advice.push('Construct raised beds to improve drainage');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Malt Barley cultivation are present.';
  },

  'Barley (Feed Barley)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 31) advice.push('Use cooling measures such as reflective sprays');
      if (avg_temp < 8) advice.push('Apply organic mulches to preserve soil warmth');
      if (avg_humidity < 35) advice.push('Ensure regular sprinkler irrigation');
      if (avg_rainfall > 90) advice.push('Improve field drainage to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal growing conditions for Feed Barley are achieved.';
  },

  // Sorghum Types
  'Sorghum (Jowar)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Implement early morning irrigation and cooling measures');
      if (avg_temp < 18) advice.push('Use mulching to retain soil warmth');
      if (avg_humidity < 40) advice.push('Misting can help maintain adequate moisture');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Jowar cultivation are met.';
  },

  'Sorghum (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 39) advice.push('Apply shade nets and adjust irrigation timing');
      if (avg_temp < 18) advice.push('Utilize mulching to conserve heat');
      if (avg_humidity < 40) advice.push('Increase moisture with drip or mist irrigation');
      if (avg_rainfall < 10) advice.push('Implement supplemental irrigation strategies');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Hybrid Sorghum cultivation are present.';
  },

  // Millet Varieties
  'Pearl Millet (Bajra)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 45) advice.push('Use intercropping with taller plants for shade');
      if (avg_temp < 20) advice.push('Delay sowing until soil warms');
      if (avg_humidity < 45) advice.push('Implement conservation tillage');
      if (avg_rainfall < 3) advice.push('Apply drought-resistant practices');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Bajra growing conditions.';
  },

  'Finger Millet (Ragi)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 15) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 50) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall < 2) advice.push('Implement supplemental irrigation systems');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Finger Millet (Ragi) cultivation.';
  },

  'Foxtail Millet': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use sprinkler cooling during peak heat');
      if (avg_temp < 18) advice.push('Apply organic mulch for soil insulation');
      if (avg_humidity < 45) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 150) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Foxtail Millet growing conditions.';
  },

  'Proso Millet': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 18) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 45) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 150) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Proso Millet cultivation.';
  },

  'Kodo Millet': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Use sprinkler cooling during peak heat');
      if (avg_temp < 18) advice.push('Apply organic mulch for soil insulation');
      if (avg_humidity < 45) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 150) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Kodo Millet growing conditions.';
  },

  'Little Millet': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 18) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 45) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 150) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Little Millet cultivation.';
  },

  'Samai Millet': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 42) advice.push('Use sprinkler cooling during peak heat');
      if (avg_temp < 18) advice.push('Apply organic mulch for soil insulation');
      if (avg_humidity < 45) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 150) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Samai Millet growing conditions.';
  },

  'Oats (Himalayan Oats)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 28) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 5) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 60) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 80) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Himalayan Oats cultivation.';
  },

  'Rye': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 28) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 5) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 60) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 80) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Rye cultivation.';
  },

  'Quinoa': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Provide shade and increase irrigation frequency');
      if (avg_temp < 8) advice.push('Use mulch to retain soil warmth');
      if (avg_humidity < 50) advice.push('Maintain consistent soil moisture with irrigation');
      if (avg_rainfall > 80) advice.push('Construct drainage channels to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Quinoa cultivation.';
  },

  // Pulses
  'Chickpea (Kabuli Chana)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Use shade nets during flowering');
      if (avg_temp < 10) advice.push('Apply phosphorus-rich fertilizers');
      if (avg_humidity < 40) advice.push('Maintain soil moisture at 50% capacity');
      if (avg_rainfall > 100) advice.push('Improve field drainage');
      return advice.length ? advice.join('; ') + '.' : 'Good Kabuli chickpea conditions.';
  },

  'Pigeon Pea (Toor Dal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Manage high temperatures with shade nets and timely irrigation');
      if (avg_temp < 18) advice.push('Apply mulching or protective covers to boost warmth');
      if (avg_humidity < 50) advice.push('Misting can help maintain adequate moisture');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Pigeon Pea (Toor Dal) cultivation.';
  },

  'Black Gram (Urad Dal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use shade and adjust irrigation to avoid heat stress');
      if (avg_temp < 18) advice.push('Employ mulching to conserve warmth');
      if (avg_humidity < 50) advice.push('Increase ambient moisture with light misting');
      if (avg_rainfall < 10) advice.push('Supplement with controlled irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Black Gram (Urad Dal) cultivation.';
  },

  'Green Gram (Moong Dal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Excess heat requires shade nets and adjusted irrigation timing');
      if (avg_temp < 20) advice.push('Consider mulching to maintain soil warmth');
      if (avg_humidity < 50) advice.push('Use misting to sustain field moisture');
      if (avg_rainfall < 10) advice.push('Apply supplemental irrigation when necessary');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Green Gram (Moong Dal) are achieved.';
  },

  'Lentil (Masoor Dal, Red Lentil / Puy Lentil)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may reduce yield; consider early sowing and shading');
      if (avg_temp < 15) advice.push('Low temperatures delay germination; use protective covers or mulches');
      if (avg_humidity < 45) advice.push('Enhance field moisture via targeted irrigation');
      if (avg_rainfall < 8) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Lentil cultivation are present.';
  },

  'Cowpea (Lobia, Black Eyed Pea)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 36) advice.push('Extreme heat may cause flower drop; use shading and timely irrigation');
      if (avg_temp < 20) advice.push('Cooler conditions can slow growth; apply organic mulching');
      if (avg_humidity < 50) advice.push('Misting can help maintain optimal moisture');
      if (avg_rainfall < 10) advice.push('Ensure supplemental irrigation is available');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cowpea (Lobia) cultivation are met.';
  },

  'Moth Bean': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Maintain sufficient soil moisture through drip irrigation');
      if (avg_temp < 20) advice.push('Cooler temperatures can delay maturity; consider light covers');
      if (avg_humidity < 45) advice.push('Light misting can help if ambient moisture is low');
      if (avg_rainfall < 8) advice.push('Supplement with irrigation during prolonged dry periods');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Moth Bean cultivation are present.';
  },

  'Horse Gram': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Even drought-tolerant crops need water; increase irrigation if required');
      if (avg_temp < 18) advice.push('Use mulching to protect against low temperatures');
      if (avg_humidity < 45) advice.push('Misting may help maintain necessary moisture levels');
      if (avg_rainfall < 8) advice.push('Ensure supplemental irrigation to support growth');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Horse Gram cultivation are met.';
  },

  'Field Pea': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may stress the crop; consider early sowing or shading');
      if (avg_temp < 12) advice.push('Low temperatures can hinder germination; use protective covers');
      if (avg_humidity < 50) advice.push('Increase moisture through periodic misting');
      if (avg_rainfall < 8) advice.push('Supplement with irrigation as required');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Field Pea cultivation are achieved.';
  },

  'Kidney Bean': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Excess heat may lead to poor pod set; employ shade nets');
      if (avg_temp < 18) advice.push('Cool conditions can slow growth; use mulching for insulation');
      if (avg_humidity < 55) advice.push('Misting can help improve pod development');
      if (avg_rainfall < 10) advice.push('Implement supplemental irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Kidney Bean cultivation are present.';
  },

  'Soybean': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Use shading to reduce heat stress during peak temperatures');
      if (avg_temp < 20) advice.push('Apply mulching to maintain soil warmth and aid germination');
      if (avg_humidity < 55) advice.push('Maintain field moisture with regular misting');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation when necessary');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Soybean cultivation are met.';
  },

  'Rice Bean': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures warrant partial shading and adjusted irrigation');
      if (avg_temp < 18) advice.push('Low temperatures may slow growth; use mulching for soil warmth');
      if (avg_humidity < 55) advice.push('Regular irrigation or misting can help maintain moisture levels');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Rice Bean cultivation are achieved.';
  },

  // Oilseeds
  'Mustard (Oilseed)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Advance irrigation schedule');
      if (avg_temp < 7) advice.push('Use row covers for frost protection');
      if (avg_humidity < 40) advice.push('Apply light evening irrigation');
      if (avg_rainfall > 90) advice.push('Ensure proper field drainage');
      return advice.length ? advice.join('; ') + '.' : 'Ideal mustard growing weather.';
  },

  'Sunflower': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Implement cooling measures and timely irrigation');
      if (avg_temp < 18) advice.push('Provide supplemental warmth with mulching');
      if (avg_humidity < 40) advice.push('Increase ambient moisture via targeted irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as required');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Sunflower cultivation are met.';
  },
  'Sesame (Til)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Use efficient irrigation to manage heat');
      if (avg_temp < 20) advice.push('Apply mulching to maintain warmth');
      if (avg_humidity < 40) advice.push('Consider supplemental irrigation');
      if (avg_rainfall > 50) advice.push('Improve drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Sesame (Til) cultivation are present.';
  },
  'Groundnut (Peanut)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use shading nets and adjust irrigation timing');
      if (avg_temp < 20) advice.push('Maintain soil warmth with mulching');
      if (avg_humidity < 50) advice.push('Increase field moisture with controlled irrigation');
      if (avg_rainfall > 100) advice.push('Ensure proper drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Groundnut (Peanut) cultivation are achieved.';
  },
  'Safflower': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Implement cooling measures and precise irrigation');
      if (avg_temp < 20) advice.push('Use mulching to conserve soil heat');
      if (avg_humidity < 40) advice.push('Apply supplemental irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation to maintain moisture');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Safflower cultivation are present.';
  },
  'Castor': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Use cooling methods and proper irrigation');
      if (avg_temp < 18) advice.push('Apply mulching to increase soil warmth');
      if (avg_humidity < 40) advice.push('Maintain moisture via controlled irrigation');
      if (avg_rainfall < 10) advice.push('Increase irrigation frequency');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Castor cultivation are met.';
  },
  'Linseed (Flax)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 28) advice.push('High temperatures may affect fiber quality; use shading');
      if (avg_temp < 12) advice.push('Low temperatures delay growth; apply mulching');
      if (avg_humidity < 50) advice.push('Increase irrigation to maintain moisture');
      if (avg_rainfall < 8) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Linseed (Flax) cultivation are achieved.';
  },
  'Cashew': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Apply shading and proper water management to mitigate heat stress');
      if (avg_temp < 20) advice.push('Use mulching to maintain soil warmth');
      if (avg_humidity < 50) advice.push('Increase ambient moisture through controlled irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as necessary');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cashew cultivation are met.';
  },
  'Almond': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Implement shading measures to protect against heat stress');
      if (avg_temp < 5) advice.push('Use protective covers to guard against low temperatures');
      if (avg_humidity < 50) advice.push('Maintain moisture with regulated irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation to support growth');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Almond cultivation are achieved.';
  },
  'Pistachio': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Ensure efficient irrigation to manage high temperatures');
      if (avg_temp < 15) advice.push('Apply mulching to mitigate cool conditions');
      if (avg_humidity < 45) advice.push('Use misting to maintain adequate moisture');
      if (avg_rainfall < 8) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Pistachio cultivation are met.';
  },

  // Fruits
  'Mango (Alphonso)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 46) advice.push('Whitewash tree trunks');
      if (avg_temp < 10) advice.push('Use smudge pots for frost protection');
      if (avg_humidity < 40) advice.push('Install micro-sprinklers');
      if (avg_rainfall < 5) advice.push('Deep water every 10 days');
      return advice.length ? advice.join('; ') + '.' : 'Perfect Alphonso mango conditions.';
  },

  'Mango (Dasheri)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may stress the tree, provide shading and adequate water');
      if (avg_temp < 20) advice.push('Low temperatures may delay flowering, use protective covers');
      if (avg_humidity < 40) advice.push('Supplement with misting to maintain leaf turgidity');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation during dry spells');
      if (avg_rainfall > 250) advice.push('Ensure proper drainage to prevent fungal diseases');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Mango (Dasheri) cultivation are met.';
  },
  'Mango (Langra)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit quality, provide shading and proper irrigation');
      if (avg_temp < 20) advice.push('Low temperatures may impact flowering, use protective measures');
      if (avg_humidity < 40) advice.push('Supplement with misting to maintain adequate moisture');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation during dry periods');
      if (avg_rainfall > 250) advice.push('Ensure good drainage to avoid fungal issues');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Mango (Langra) cultivation are met.';
  },

  'Banana (Robusta)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may stress the crop, use shading and adequate water management');
      if (avg_temp < 20) advice.push('Low temperatures can hinder growth, use protective covers');
      if (avg_humidity < 50) advice.push('Increase ambient moisture with regular misting');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation during dry spells');
      if (avg_rainfall > 300) advice.push('Ensure proper drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Banana (Robusta) cultivation are met.';
  },
  'Banana (Dwarf Cavendish)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may cause stress, use shading and adjust irrigation');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, apply protective measures');
      if (avg_humidity < 50) advice.push('Maintain high humidity with regular misting');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation as needed');
      if (avg_rainfall > 300) advice.push('Ensure proper drainage to prevent root rot');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Banana (Dwarf Cavendish) cultivation are met.';
  },
  'Apple (Kashmiri)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may affect fruit quality, use shading and cooling');
      if (avg_temp < 5) advice.push('Low temperatures can delay bloom or cause frost damage, use protective covers');
      if (avg_humidity < 60) advice.push('Maintain ambient moisture with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation during dry periods');
      if (avg_rainfall > 200) advice.push('Ensure proper drainage to avoid excess water stress');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Apple (Kashmiri) cultivation are met.';
  },
  'Apple (Himachal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may reduce fruit set, use cooling measures');
      if (avg_temp < 5) advice.push('Low temperatures can cause frost damage, apply protective covers');
      if (avg_humidity < 60) advice.push('Maintain adequate moisture with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      if (avg_rainfall > 200) advice.push('Ensure proper drainage to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Apple (Himachal) cultivation are met.';
  },

  'Guava (Allahabad Safeda)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use white shade nets during afternoon');
      if (avg_temp < 10) advice.push('Cover young plants with frost cloth');
      if (avg_rainfall > 150) advice.push('Install subsurface drainage pipes');
      return advice.length ? advice.join('; ') + '.' : 'Ideal conditions for Allahabad Safeda guava.';
  },

  'Papaya (Solo)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Apply kaolin clay to reduce sunburn');
      if (avg_temp < 15) advice.push('Use black polyethylene mulch for warmth');
      if (avg_rainfall > 140) advice.push('Create raised beds with proper slope');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Solo papaya conditions.';
  },

  'Orange (Nagpur)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Use evaporative cooling with overhead sprinklers');
      if (avg_temp < 7) advice.push('Install windbreaks and trunk heaters');
      if (avg_rainfall > 100) advice.push('Implement French drain system');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Nagpur orange growing climate.';
  },

  'Lemon (Meyer)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Apply reflective mulch between rows');
      if (avg_temp < 10) advice.push('Use thermal blankets during cold nights');
      if (avg_rainfall > 100) advice.push('Install vertical drainage channels');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Meyer lemon conditions.';
  },

  'Pomegranate (Bhagwa)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Install temporary shade structures');
      if (avg_temp < 8) advice.push('Use hot water irrigation during frost');
      if (avg_rainfall > 120) advice.push('Build check dams for runoff control');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Bhagwa pomegranate conditions.';
  },

  'Grapes (Thomson Seedless)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Install overhead shade nets during berry development');
      if (avg_temp < 10) advice.push('Use hot air blowers during frost periods');
      if (avg_humidity < 50) advice.push('Implement drip irrigation with morning misting');
      if (avg_rainfall > 110) advice.push('Install sloping trellis system for drainage');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Thomson Seedless grape conditions.';
  },

  'Sapota (Chikoo)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Apply whitewash to tree trunks');
      if (avg_temp < 15) advice.push('Use thermal blankets for young trees');
      if (avg_rainfall > 130) advice.push('Create circular drainage trenches around trees');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Chikoo growing climate.';
  },

  'Jackfruit': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use intercropping with banana for shade');
      if (avg_humidity < 60) advice.push('Maintain mulch layer and basin irrigation');
      if (avg_rainfall > 150) advice.push('Install aerial root ventilation channels');
      return advice.length ? advice.join('; ') + '.' : 'Ideal jackfruit cultivation conditions.';
  },

  'Custard Apple (Sitaphal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Provide afternoon shade with palm fronds');
      if (avg_humidity < 55) advice.push('Use clay pot irrigation system');
      if (avg_rainfall > 140) advice.push('Build raised mounds for planting');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Sitaphal growing environment.';
  },

  'Lychee': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use evaporative cooling during flowering');
      if (avg_humidity < 60) advice.push('Install micro-sprinklers in orchard');
      if (avg_rainfall > 130) advice.push('Create windbreak-cum-drainage hedges');
      return advice.length ? advice.join('; ') + '.' : 'Ideal lychee cultivation climate.';
  },

  'Amla (Indian Gooseberry)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Apply neem oil spray to reduce heat stress');
      if (avg_humidity < 50) advice.push('Use pitcher irrigation method');
      if (avg_rainfall > 120) advice.push('Implement contour stone bunding');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Amla growing conditions.';
  },

  'Avocado (Local)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use aluminized shade nets during fruiting');
      if (avg_temp < 10) advice.push('Wrap graft union with insulating tape');
      if (avg_rainfall > 100) advice.push('Install vertical mulch pits for drainage');
      return advice.length ? advice.join('; ') + '.' : 'Ideal avocado cultivation climate.';
  },
 
  'Watermelon': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use movable shade screens during fruiting');
      if (avg_temp < 15) advice.push('Apply black plastic mulch for soil warmth');
      if (avg_rainfall > 120) advice.push('Use plastic mulch to prevent fruit rot');
      return advice.length ? advice.join('; ') + '.' : 'Optimal watermelon cultivation climate.';
  },

  'Jamun': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Install misting system during flowering');
      if (avg_humidity < 55) advice.push('Maintain irrigation during dry spells');
      if (avg_rainfall > 130) advice.push('Create drainage furrows between trees');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Jamun growing conditions.';
  },

  'Bael (Wood Apple)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Provide afternoon shade for young saplings');
      if (avg_rainfall > 140) advice.push('Implement terracing on slopes');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Bael cultivation environment.';
  },

  'Carambola (Star Fruit)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Install shade nets during midday heat waves');
      if (avg_temp < 15) advice.push('Wrap trunks with jute for frost protection');
      if (avg_humidity < 55) advice.push('Use micro-sprinklers in early morning');
      if (avg_rainfall > 120) advice.push('Create French drains around root zone');
      if (avg_rainfall < 2) advice.push('Implement pulsed drip irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Star Fruit growing conditions.';
  },

  'Passion Fruit': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Train vines on shaded trellises');
      if (avg_temp < 15) advice.push('Use hot water root zone irrigation');
      if (avg_rainfall > 120) advice.push('Install vertical bamboo drainage pipes');
      if (avg_humidity < 55) advice.push('Mist flowers during pollination phase');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Passion Fruit cultivation climate.';
  },

  'Pear (Indian Pear)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Apply white reflective bark paint');
      if (avg_temp < 5) advice.push('Use smudge pots for frost control');
      if (avg_rainfall > 90) advice.push('Construct diversion channels between rows');
      if (avg_humidity < 55) advice.push('Install under-canopy misting system');
      return advice.length ? advice.join('; ') + '.' : 'Perfect Indian Pear growing environment.';
  },

  'Plum (Indian Plum)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use kaolin clay spray on fruits');
      if (avg_temp < 5) advice.push('Wrap branches with thermal blankets');
      if (avg_rainfall > 90) advice.push('Implement HDPE pipe subsurface drainage');
      if (avg_humidity < 55) advice.push('Maintain grass mulch for moisture retention');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Indian Plum cultivation conditions.';
  },

  // Vegetables
  'Tomato (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Use 30% shade nets');
      if (avg_temp < 12) advice.push('Install heated grow tunnels');
      if (avg_humidity > 85) advice.push('Increase ventilation frequency');
      if (avg_rainfall < 2) advice.push('Initiate drip irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Optimal tomato growing conditions.';
  },

  'Bell Pepper (Capsicum)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may affect fruit set, use cooling measures');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Bell Pepper (Capsicum) cultivation are met.';
  },
  'Bell Pepper (Sweet)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may reduce fruit quality, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay ripening, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Bell Pepper (Sweet) cultivation are met.';
  },
  'Cardamom (Large)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat can affect quality, use shading');
      if (avg_temp < 15) advice.push('Low temperatures may slow growth, apply mulching');
      if (avg_humidity < 80) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cardamom (Large) cultivation are met.';
  },
  'Cardamom (Small)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat can reduce aroma, use shading');
      if (avg_temp < 15) advice.push('Low temperatures may hinder growth, apply mulching');
      if (avg_humidity < 80) advice.push('Ensure high humidity with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cardamom (Small) cultivation are met.';
  },
  'Radish (Daikon)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may cause bolting, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can reduce root expansion, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain soil moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Radish (Daikon) cultivation are met.';
  },
  'Radish (Cherry Belle)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may lead to bolting, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can impede root development, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Radish (Cherry Belle) cultivation are met.';
  },
  'Carrot (Imperator)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may affect root development, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain soil moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Carrot (Imperator) cultivation are met.';
  },
  'Carrot (Nantes)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may impair root quality, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure consistent soil moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Carrot (Nantes) cultivation are met.';
  },
  'Spinach (Palak)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may cause bolting, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can hinder growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Spinach (Palak) cultivation are met.';
  },
  'Spinach (Baby)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may lead to premature bolting, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Spinach (Baby) cultivation are met.';
  },
  'Spinach (Savoy)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may affect leaf quality, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can impede growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Spinach (Savoy) cultivation are met.';
  },
  'Okra (Lady’s Finger)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('High temperatures may reduce pod set, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can hinder growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain field moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Okra (Lady’s Finger) cultivation are met.';
  },
  'Okra (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Excess heat may affect yield, use shading and proper irrigation');
      if (avg_temp < 20) advice.push('Low temperatures can delay flowering, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with timely irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Okra (Hybrid) cultivation are met.';
  },
  'Eggplant (Brinjal)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures can affect flowering, adjust irrigation');
      if (avg_temp < 20) advice.push('Low temperatures may reduce yield, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Eggplant (Brinjal) cultivation are met.';
  },
  'Eggplant (White)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit quality, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Eggplant (White) cultivation are met.';
  },
  'Onion (Red)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may affect bulb formation, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall > 90) advice.push('Improve drainage to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Onion (Red) cultivation are met.';
  },
  'Onion (White)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may affect bulb quality, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall > 90) advice.push('Ensure proper drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Onion (White) cultivation are met.';
  },
  'Tomato (Cherry)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may affect fruit set, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay ripening, apply mulching');
      if (avg_humidity < 60) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tomato (Cherry) cultivation are met.';
  },
  'Tomato (Heirloom)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may affect fruit set, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay ripening, apply mulching');
      if (avg_humidity < 60) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tomato (Heirloom) cultivation are met.';
  },

  'Zucchini': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect fruit set, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Zucchini cultivation are met.';
  },
  'Winter Squash': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit development, use cooling measures');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain soil moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Winter Squash cultivation are met.';
  },
  'Mustard Greens': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may cause bolting, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Mustard Greens cultivation are met.';
  },
  'Bitter Leaf (Vernonia)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce leaf quality, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Bitter Leaf (Vernonia) cultivation are met.';
  },
  'Malabar Spinach': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect leaf texture, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can hinder growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Malabar Spinach cultivation are met.';
  },
  'Amaranth Leaves': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may reduce leaf quality, use cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can affect growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Amaranth Leaves cultivation are met.';
  },
  'Chayote': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit development, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Chayote cultivation are met.';
  },
  'Water Spinach (Kang Kong)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect growth, use cooling measures');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 60) advice.push('Maintain high moisture levels with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Water Spinach (Kang Kong) cultivation are met.';
  },
  'Parsley': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may affect flavor, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Parsley cultivation are met.';
  },

  'Clove': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may stress the plant, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can hinder growth, apply protective mulching');
      if (avg_humidity < 70) advice.push('Maintain humidity with regular misting');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Clove cultivation are met.';
  },
  'Cinnamon': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect quality, use shading');
      if (avg_temp < 15) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 70) advice.push('Maintain humidity with regular misting');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cinnamon cultivation are met.';
  },
  'Saffron': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may reduce flowering, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can affect stigma development, use protective covers');
      if (avg_humidity < 40) advice.push('Ensure adequate soil moisture with controlled irrigation');
      if (avg_rainfall > 50) advice.push('Improve drainage to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Saffron cultivation are met.';
  },
  'Coriander (Seeds, Leaves)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may lead to bolting, use mulching');
      if (avg_temp < 15) advice.push('Low temperatures can delay germination, apply protective measures');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Coriander (Seeds, Leaves) cultivation are met.';
  },
  'Cumin': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce seed quality, use shading');
      if (avg_temp < 15) advice.push('Low temperatures can hinder germination, apply mulching');
      if (avg_humidity < 40) advice.push('Ensure adequate moisture with timely irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cumin cultivation are met.';
  },
  'Fennel': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect essential oil composition, use shading');
      if (avg_temp < 15) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Fennel cultivation are met.';
  },
  'Fenugreek (Seeds, Leaves)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may reduce leaf quality, use shading');
      if (avg_temp < 15) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Fenugreek (Seeds, Leaves) cultivation are met.';
  },
  'Curry Leaves': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect growth, use shading and proper water management');
      if (avg_temp < 15) advice.push('Low temperatures can hinder growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Curry Leaves cultivation are met.';
  },
  'Mint (Pudina)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect aroma, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, apply protective covers');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Mint (Pudina) cultivation are met.';
  },
  'Asafoetida (Hing)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect resin quality, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can reduce yield, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Asafoetida (Hing) cultivation are met.';
  },
  'Snake Gourd': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('High temperatures may affect vine growth, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Snake Gourd cultivation are met.';
  },
  'Ridge Gourd': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Excessive heat may hinder vine development, use cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Ridge Gourd cultivation are met.';
  },
  'Ivy Gourd': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('High temperatures may affect vine vigor, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Ivy Gourd cultivation are met.';
  },
  'Drumstick (Moringa)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect pod quality, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Drumstick (Moringa) cultivation are met.';
  },
  'Taro (Arbi)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect corm development, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can hinder growth, apply mulching');
      if (avg_humidity < 60) advice.push('Maintain high moisture levels with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Taro (Arbi) cultivation are met.';
  },
  'Sweet Potato': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce tuber quality, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Sweet Potato cultivation are met.';
  },
  'French Bean': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may affect pod set, use cooling measures');
      if (avg_temp < 18) advice.push('Low temperatures can reduce yield, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for French Bean cultivation are met.';
  },
  'Cluster Bean (Guar)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect pod development, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with timely irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cluster Bean (Guar) cultivation are met.';
  },
  'Broccoli': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may cause premature bolting, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can affect head formation, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Broccoli cultivation are met.';
  },

  'Beetroot': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may reduce quality, use shading');
      if (avg_temp < 10) advice.push('Low temperatures can slow root formation, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Beetroot cultivation are met.';
  },
  'Cucumber (Mini)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit set, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cucumber (Mini) cultivation are met.';
  },
  'Bitter Gourd (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('High temperatures may reduce fruit quality, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can delay flowering, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure sufficient moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Bitter Gourd (Hybrid) cultivation are met.';
  },
  'Bottle Gourd': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 38) advice.push('Excessive heat may affect vine growth, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can reduce yield, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Bottle Gourd cultivation are met.';
  },
  'Pumpkin': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit set, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Pumpkin cultivation are met.';
  },
  'Ash Gourd': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit development, use shading');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Ash Gourd cultivation are met.';
  },
  'Green Chili': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fruit quality, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure adequate moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Green Chili cultivation are met.';
  },
  'Red Chili': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce fruit set, use shading');
      if (avg_temp < 18) advice.push('Low temperatures can delay maturation, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Red Chili cultivation are met.';
  },
  'Ginger': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may hinder rhizome development, use cooling measures');
      if (avg_temp < 18) advice.push('Low temperatures can stunt growth, apply mulching');
      if (avg_humidity < 70) advice.push('Increase humidity through regular misting');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Ginger cultivation are met.';
  },
  'Garlic': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may reduce bulb quality, use shading');
      if (avg_temp < 5) advice.push('Low temperatures can delay development, apply protective mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Garlic cultivation are met.';
  },
  'Turmeric': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures require careful water management');
      if (avg_temp < 20) advice.push('Low temperatures may affect rhizome growth, apply mulching');
      if (avg_humidity < 70) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Turmeric cultivation are met.';
  },
  'Black Pepper (Malabar)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may reduce quality, ensure adequate shade');
      if (avg_temp < 18) advice.push('Low temperatures can affect growth, use protective covers');
      if (avg_humidity < 80) advice.push('Maintain high humidity with regular misting');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Black Pepper (Malabar) cultivation are met.';
  },

  'Cabbage (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may cause bolting, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can delay head formation, apply mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cabbage (Hybrid) cultivation are met.';
  },
  'Cauliflower (Hybrid)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may affect curd formation, use cooling measures');
      if (avg_temp < 10) advice.push('Low temperatures can delay growth, consider mulching');
      if (avg_humidity < 50) advice.push('Ensure regular moisture with proper irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cauliflower (Hybrid) cultivation are met.';
  },

  'Potato (Kufri Jyoti)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 25) advice.push('High temperatures may reduce tuber quality, use shading and timely irrigation');
      if (avg_temp < 10) advice.push('Low temperatures may delay sprouting, apply protective mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 15) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Potato (Kufri Jyoti) cultivation are met.';
  },
  // Cash Crops
  'Coffee (Arabica)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Implement shade-grown practices');
      if (avg_humidity < 60) advice.push('Maintain canopy cover');
      if (avg_rainfall > 200) advice.push('Build contour trenches');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Arabica coffee climate.';
  },

  'Sugarcane (Coarse)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect sucrose accumulation, use proper irrigation and shading');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, consider protective measures');
      if (avg_humidity < 50) advice.push('Maintain moisture with regular irrigation');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Sugarcane (Coarse) cultivation are met.';
  },
  'Sugarcane (Fine)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may reduce sugar quality, use shading and timely irrigation');
      if (avg_temp < 20) advice.push('Low temperatures can retard growth, use protective covers');
      if (avg_humidity < 50) advice.push('Ensure consistent moisture through proper irrigation');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Sugarcane (Fine) cultivation are met.';
  },
  'Tea (Assam)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may affect leaf quality, use shading and cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can delay flush, use protective covers');
      if (avg_humidity < 70) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tea (Assam) cultivation are met.';
  },
  'Tea (Darjeeling)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 28) advice.push('Excessive heat may affect delicate flavor, use shading and cooling measures');
      if (avg_temp < 12) advice.push('Low temperatures can delay growth, use protective measures');
      if (avg_humidity < 70) advice.push('Maintain high ambient humidity with regular irrigation');
      if (avg_rainfall < 90) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tea (Darjeeling) cultivation are met.';
  },
  'Tea (Nilgiri)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('High temperatures may reduce quality, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can affect yield, use protective covers');
      if (avg_humidity < 70) advice.push('Maintain humidity with consistent irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tea (Nilgiri) cultivation are met.';
  },
  'Tea (Dooars)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may impair leaf quality, use shading');
      if (avg_temp < 15) advice.push('Low temperatures can delay flush, use protective measures');
      if (avg_humidity < 70) advice.push('Ensure high humidity with regular misting and irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tea (Dooars) cultivation are met.';
  },
  'Coffee (Robusta)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may reduce bean quality, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can hinder growth, use protective covers');
      if (avg_humidity < 70) advice.push('Maintain adequate humidity with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Coffee (Robusta) cultivation are met.';
  },
  'Rubber': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect latex yield, use cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, use protective covers');
      if (avg_humidity < 70) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Rubber cultivation are met.';
  },
  'Coconut (Tall)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may stress the tree, use proper irrigation and shading');
      if (avg_temp < 20) advice.push('Low temperatures can affect growth, use protective measures');
      if (avg_humidity < 60) advice.push('Maintain ambient moisture with regular misting');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation during dry spells');
      if (avg_rainfall > 300) advice.push('Ensure proper drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Coconut (Tall) cultivation are met.';
  },
  'Coconut (Dwarf)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may stress the plant, use timely irrigation and shading');
      if (avg_temp < 20) advice.push('Low temperatures can reduce growth, use protective covers');
      if (avg_humidity < 60) advice.push('Maintain moisture with regular misting');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation as needed');
      if (avg_rainfall > 300) advice.push('Ensure proper drainage to prevent root rot');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Coconut (Dwarf) cultivation are met.';
  },
  'Arecanut (Yellow)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect nut quality, use shading and proper irrigation');
      if (avg_temp < 20) advice.push('Low temperatures can hinder growth, use protective measures');
      if (avg_humidity < 60) advice.push('Maintain high humidity with regular misting');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation during dry spells');
      if (avg_rainfall > 250) advice.push('Ensure proper drainage to avoid waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Arecanut (Yellow) cultivation are met.';
  },
  'Arecanut (Red)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce nut quality, use shading and proper water management');
      if (avg_temp < 20) advice.push('Low temperatures can slow growth, use protective covers');
      if (avg_humidity < 60) advice.push('Maintain ambient moisture with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation as needed');
      if (avg_rainfall > 250) advice.push('Ensure proper drainage to prevent excess moisture stress');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Arecanut (Red) cultivation are met.';
  },
  'Cocoa (Forastero)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Excessive heat may affect bean quality, use shading and cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can hinder flowering, use protective covers');
      if (avg_humidity < 70) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 150) advice.push('Supplement with irrigation during dry spells');
      if (avg_rainfall > 300) advice.push('Ensure proper drainage to prevent waterlogging');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cocoa (Forastero) cultivation are met.';
  },
  'Tobacco (Flue-cured)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('Excessive heat may cause leaf burn, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can delay growth, use protective covers');
      if (avg_humidity < 40) advice.push('Maintain moisture with controlled irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tobacco (Flue-cured) cultivation are met.';
  },
  'Tobacco (Sun-cured)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 32) advice.push('High temperatures may affect leaf quality, use shading and cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can delay leaf development, use protective covers');
      if (avg_humidity < 40) advice.push('Maintain adequate moisture with controlled irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Tobacco (Sun-cured) cultivation are met.';
  },
  'Cotton (Bt)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may affect boll formation, use cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, use protective mulching');
      if (avg_humidity < 50) advice.push('Maintain consistent moisture with proper irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cotton (Bt) cultivation are met.';
  },
  'Cotton (Non-Bt)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may reduce yield, use shading and proper irrigation');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, apply mulching');
      if (avg_humidity < 50) advice.push('Ensure consistent moisture with regular irrigation');
      if (avg_rainfall < 10) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Cotton (Non-Bt) cultivation are met.';
  },
  'Jute (White)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Excessive heat may reduce fiber quality, use shading and cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can hinder growth, use protective mulching');
      if (avg_humidity < 70) advice.push('Maintain high humidity with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation during dry spells');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Jute (White) cultivation are met.';
  },
  'Jute (Tossa)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('High temperatures may affect fiber strength, use cooling measures');
      if (avg_temp < 20) advice.push('Low temperatures can delay growth, use protective covers');
      if (avg_humidity < 70) advice.push('Ensure high humidity with regular irrigation');
      if (avg_rainfall < 100) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Jute (Tossa) cultivation are met.';
  },
  'Hemp': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 30) advice.push('Excessive heat may affect fiber quality, use cooling measures');
      if (avg_temp < 15) advice.push('Low temperatures can slow growth, use protective mulching');
      if (avg_humidity < 50) advice.push('Maintain soil moisture with regular irrigation');
      if (avg_rainfall < 50) advice.push('Supplement with irrigation as needed');
      return advice.length ? advice.join('; ') + '.' : 'Optimal conditions for Hemp cultivation are met.';
  },

  'Chili (Bird\'s Eye)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Use partial shade during afternoon');
      if (avg_temp < 20) advice.push('Use cloches for young plants');
      if (avg_humidity < 50) advice.push('Mist plants in early morning');
      if (avg_rainfall < 2) advice.push('Implement controlled drip irrigation');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Bird\'s Eye chili conditions.';
  },

  // FODDER CROPS
  'Napier Grass': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Implement close planting for mutual shading');
      if (avg_rainfall < 5) advice.push('Use surge irrigation with chopped residue mulch');
      if (avg_humidity < 50) advice.push('Apply fermented biogas slurry');
      return advice.length ? advice.join('; ') + '.' : 'Ideal Napier grass growing conditions.';
  },

  'Sudan Grass': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Practice staggered sowing dates');
      if (avg_rainfall > 150) advice.push('Create ridge and furrow system');
      if (avg_humidity < 50) advice.push('Use sprinkler irrigation at jointing stage');
      return advice.length ? advice.join('; ') + '.' : 'Optimal Sudan grass production.';
  },

  'Rhodes Grass': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 40) advice.push('Intercrop with leguminous shrubs');
      if (avg_rainfall < 5) advice.push('Implement skip-row irrigation pattern');
      if (avg_humidity < 50) advice.push('Apply hydrogel soil amendments');
      return advice.length ? advice.join('; ') + '.' : 'Perfect Rhodes grass conditions.';
  },

  'Lucerne (Alfalfa)': ({ avg_temp, avg_humidity, avg_rainfall }) => {
      let advice = [];
      if (avg_temp > 35) advice.push('Use movable shade nets during establishment');
      if (avg_temp < 5) advice.push('Apply frost-tolerant varieties with row covers');
      if (avg_rainfall > 100) advice.push('Install subsurface drainage tiles');
      return advice.length ? advice.join('; ') + '.' : 'Ideal lucerne cultivation climate.';
  }

};  