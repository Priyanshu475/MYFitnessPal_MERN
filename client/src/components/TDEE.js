import React, { useState } from 'react';

function TDEECalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [tdee, setTDEE] = useState('');
  const [energyIntakeLoss, setEnergyIntakeLoss] = useState('');
  const [energyIntakeGain, setEnergyIntakeGain] = useState('');

  const calculateTDEE = () => {
    if (age && weight && height) {
      let bmr = 0;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      let tdeeValue = 0;
      switch (activityLevel) {
        case 'sedentary':
          tdeeValue = bmr * 1.2;
          break;
        case 'lightlyActive':
          tdeeValue = bmr * 1.375;
          break;
        case 'moderatelyActive':
          tdeeValue = bmr * 1.55;
          break;
        case 'veryActive':
          tdeeValue = bmr * 1.725;
          break;
        case 'superActive':
          tdeeValue = bmr * 1.9;
          break;
        default:
          break;
      }

      setTDEE(tdeeValue.toFixed(2));

      const energyIntakeLossValue = (tdeeValue - 500).toFixed(2);
      const energyIntakeGainValue = (tdeeValue + 500).toFixed(2);
      setEnergyIntakeLoss(energyIntakeLossValue);
      setEnergyIntakeGain(energyIntakeGainValue);
    }
  };

  return (
    <div className="tdee-calculator">
      <h1 className="title">Total Daily Energy Expenditure (TDEE)</h1>
      <div>
        <div className="select">
        <label>Gender:</label>
        <select 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      </div>
      <div className="input-wrapper">
        <label className="label">Age:</label>
        <input
          type="number"
          className="input"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <label className="label">Weight (kg):</label>
        <input
          type="number"
          className="input"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <label className="label">Height (cm):</label>
        <input
          type="number"
          className="input"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <div className="select">
        <label className="label">Activity Level:</label>
        <select
          className="input"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
          <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
          <option value="veryActive">Very Active (hard exercise/sports 6-7 days/week)</option>
          <option value="superActive">Super Active (very hard exercise/sports & physical job or 2x training)</option>
        </select>
      </div>
      </div>

      <button className="calculate-button" onClick={calculateTDEE}>
        Calculate TDEE
      </button>
      {tdee && (
        <div className="result">
          <p>The estimated TDEE or body weight maintenance energy requirement is <super>{tdee}</super> Calories per day.</p>
          <p>Energy Intake for Fat Loss: <super>{energyIntakeLoss}</super>(0.5 kg/week
) calories per day</p>
          <p>Energy Intake to Gain Weight: <super>{energyIntakeGain}</super>(0.5 kg/week
)calories per day</p>
        </div>
      )}
    </div>
  );
}

export default TDEECalculator;
