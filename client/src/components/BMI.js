import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = weight*100*100 / (height * height);
      setBMI(bmiValue.toFixed(2));
      setBMICategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return 'Normal Weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className="bmi-calculator">
      <h1 className="title">Body Mass Index (BMI) </h1>
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
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <div className="result">
          <p>Your BMI: {bmi}</p>
          <p className="category">Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
