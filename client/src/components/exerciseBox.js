import React from 'react';

const ExerciseBox = ({ imageSrc,name,description,commonMistake}) => {
  return (
    <div className="exercise-box">
      <div className='image'>
      <img src={imageSrc} alt="" className="exercise-image" />
      <div class="image__overlay image__overlay--primary">
			<div class="image__title">{name}</div>
			<p class="image__description">
        {description}
			</p>
      <h3>Common Mistake:</h3>
      <p class="image__description">{commonMistake}</p>
		</div>
	</div>    
</div>
  );
};

export default ExerciseBox;
