import React, { useState } from 'react';
import axios from 'axios';

const NutrientDetails = () => {
  const [foodName, setFoodName] = useState('');
  const [nutrientDetails, setNutrientDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchNutrientDetails = () => {
    axios
      .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodName}`, {
        headers: {
          'X-Api-Key': 'lcc83hgqHj9y4OHaKADXag==K07mNKvsx5atr1Qs'
        }
      })
      .then(response => {
        setNutrientDetails(response.data.items);
        setError('');
      })
      .catch(error => {
        setNutrientDetails(null);
        setError('Error fetching nutrient details. Please try again.');
      });
      console.log(nutrientDetails)
  };

  return (
    <div className='gh'>
      <h3>Fetch Nutrient Details</h3>
      <input
        type="text"
        value={foodName}
        onChange={e => setFoodName(e.target.value)}
        placeholder="Enter food name to check nutrient details"
      />
      <button className='btn'  onClick={fetchNutrientDetails}>Fetch</button>

      {error && <p>{error}</p>}

      {nutrientDetails && (
        <div>
          <ul>
            {nutrientDetails.map(item => (
              <li key={item.name}>
                          <h3>Nutrient Details for {item.name}:</h3>
 
 <div id="nutritionfacts">
        <table width="242" cellspacing="0" cellpadding="0">
            <tbody><tr>
                <td align="center" class="header">Nutrition Facts</td>
            </tr>
            <tr>
                <td><div class="serving">Per <span class="highlighted">{item.serving_size_g}</span> Serving Size</div></td>
            </tr>
            <tr>
                <td bgcolor="#000000"></td>
            </tr>
            <tr>
                <td><div class="line">Amount Per Serving</div></td>
            </tr>
            <tr>
                <td>
                    <div class="line">
                    <div class="label">Calories:  <div class="weight">{item.calories}</div></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td><div class="line"><div class="dvlabel">% Daily Value<sup>*</sup></div></div></td>
            </tr>
            <tr>
                <td>
                    <div class="line">
                    <div class="label">Total Fat <div class="weight">{item.fat_total_g}g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td class="indent">
                    <div class="line">
                    <div class="labellight">Saturated Fat <div class="weight">{item.fat_saturated_g}g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td class="indent">
                    <div class="line">
                    <div class="labellight"><i>Trans</i> Fat <div class="weight">{((item.fat_total_g)-(item.fat_saturated_g))}g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div class="line">
                    <div class="label">Cholesterol <div class="weight">{item.cholesterol_mg} mg</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div class="line">
                    <div class="label">Sodium <div class="weight">{item.sodium_mg} mg</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div class="line">
                    <div class="label">Total Carbohydrates <div class="weight">{item.carbohydrates_total_g}g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td class="indent">
                    <div class="line">
                    <div class="labellight">Dietary Fiber <div class="weight">{item.fiber_g}g</div></div>
                </div></td>
            </tr>
                        <tr>
                <td class="indent">
                    <div class="line">
                    <div class="labellight">Sugars <div class="weight">{item.sugar_g}g</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div class="line">
                    <div class="label">Protein <div class="weight">{item.protein_g}g</div>
                    </div>
                </div></td>
            </tr>
            <tr>
                <td bgcolor="#000000"></td>
            </tr>
                        <tr>
                <td>
                    <table cellspacing="0" cellpadding="0" border="0" class="vitamins">
                    <tbody>
                    <tr>
                        <td>Sodium&nbsp;&nbsp;{item.sodium_mg} mg</td>
                        <td align="center">•</td>
                        <td align="right">Potassium&nbsp;&nbsp;{item.potassium_mg} mg</td>
                    </tr>                      
                    </tbody></table>
                </td>
            </tr>
                        <tr>
                <td><div class="line">
                <div class="labellight"><i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                </div>
                </div>
                </td>
            </tr>
        </tbody></table>
    </div>


              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutrientDetails;
