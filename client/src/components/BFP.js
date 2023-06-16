import React, { useState } from 'react';

function BodyFatCalculator() {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [chest, setChest] = useState('');
  const [abdomen, setAbdomen] = useState('');
  const [thigh, setThigh] = useState('');
  const [tricep, setTricep] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState('');

  const calculateBodyFatPercentage = () => {
    if (gender === 'male') {
      if (weight && chest && abdomen && thigh && tricep) {
        const sum = chest + abdomen + thigh + tricep;
        const bodyFatWeight = (0.29288 * sum) - (0.0005 * sum * sum) + (0.15845 * weight) - 5.76377;
        const bodyFatPercentageValue = (bodyFatWeight * 100) / weight;
        setBodyFatPercentage(bodyFatPercentageValue.toFixed(2));
      }
    } else {
      if (weight && chest && abdomen && thigh && tricep) {
        const sum = chest + abdomen + thigh + tricep;
        const bodyFatWeight = (0.29669 * sum) - (0.00043 * sum * sum) + (0.02963 * weight) + 1.4072;
        const bodyFatPercentageValue = (bodyFatWeight * 100) / weight;
        setBodyFatPercentage(bodyFatPercentageValue.toFixed(2));
      }
    }
  };

  return (
    <div className="body-fat-calculator">
      <h1 className="title">Body Fat Percentage Calculator</h1>
        <div className="input-wrapper">
        <div className="select">
        <label className="custom-select">Gender:</label>
        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
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
        <label className="label">Chest (mm):</label>
        <input
          type="number"
          className="input"
          value={chest}
          onChange={(e) => setChest(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <label className="label">Abdomen (mm):</label>
        <input
          type="number"
          className="input"
          value={abdomen}
          onChange={(e) => setAbdomen(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <label className="label">Thigh (mm):</label>
        <input
          type="number"
          className="input"
          value={thigh}
          onChange={(e) => setThigh(Number(e.target.value))}
        />
      </div>
      <div className="input-wrapper">
        <label className="label">Tricep (mm):</label>
        <input
          type="number"
          className="input"
          value={tricep}
          onChange={(e) => setTricep(Number(e.target.value))}
        />
      </div>
      <button className="calculate-button" onClick={calculateBodyFatPercentage}>
        Calculate Body Fat Percentage
      </button>
      {bodyFatPercentage && (
        <p className="result">Your Body Fat Percentage: {bodyFatPercentage}%</p>
      )}
    </div>
  );
}

export default BodyFatCalculator;
