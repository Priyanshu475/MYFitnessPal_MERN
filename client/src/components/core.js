import React from 'react'
import ExerciseBox from './exerciseBox'

const Core = () => {
    return (
        <div className="App">
        <h1 className="ex-heading"><center>Core</center></h1>
        <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/06/hanging-leg-raise-movement.gif'
        name='Hanging Leg Raise'
        description='The hanging leg raise is a great exercise for building the lower portion of your abs. It also works your upper abs and obliques to a lesser degree.'
        commonMistake='Using momentum to swing the legs, not fully engaging the core muscles, relying on the hip flexors instead of the abdominals, and not maintaining proper form. Its important to use controlled movements, focus on using the core to lift the legs, avoid swinging or kicking, and maintain a stable upper body throughout the exercise. Additionally, aim to achieve a full range of motion by lifting the legs up until they are parallel to the ground and lowering them back down under control.'
        />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/01/bicycle-crunch.gif"
        name='Bicycle Kicks'
        description='The bicycle Kicks is a great exercise for building the upper and middle portions of your abs. It also works your obliques to a lesser degree.'
        commonMistake='Rushing the movement, not fully engaging the core muscles, relying on momentum instead of controlled movements, and not maintaining proper form. Its important to perform the exercise with a slow and controlled tempo, focus on engaging the abdominals throughout the movement, avoid jerking or swinging the legs, and maintain a stable upper body position. Additionally, ensure that the legs are fully extended and the knees are brought towards the opposite elbow in a smooth and controlled manner.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2023/01/tuck-crunch.gif"
        name='Tuck Crunch'
        description='The tuck crunch is a great exercise for building the upper and middle portions of your abs. It also works your obliques to a lesser degree.'
        commonMistake='Using momentum to swing the body, not fully engaging the core muscles, relying on the hip flexors instead of the abdominals, and not maintaining proper form. Its important to perform the exercise with controlled movements, focus on using the core to lift the upper body and knees towards each other, avoid jerking or swinging motions, and maintain a stable position throughout the exercise. Additionally, aim to fully contract the abdominal muscles and keep the lower back in contact with the ground throughout the movement.'
      />
      <ExerciseBox
      imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/05/full-sit-up.gif'
        name='Full Sit Up'
        description='The full sit up is a great exercise for building the upper and middle portions of your abs. It also works your obliques to a lesser degree.'
        commonMistake='Pulling on the neck or using the hands to generate momentum, not fully engaging the core muscles, relying on the hip flexors instead of the abdominals, and not maintaining proper form. Its important to perform the exercise with controlled movements, focus on using the core to lift the upper body, avoid pulling on the neck or using the hands for assistance, and maintain a stable position throughout the exercise. Additionally, aim to fully contract the abdominal muscles and avoid arching the lower back excessively.'
      />
      <ExerciseBox
      imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/12/knee-touch-crunch.gif'
        name='Knee Touch Crunch'
        description='The knee touch crunch is a great exercise for building the upper and middle portions of your abs. It also works your obliques to a lesser degree.'
        commonMistake='Pulling on the neck, using excessive momentum, not fully engaging the core muscles, and not maintaining proper form. Its important to perform the exercise with controlled movements, focus on using the core to lift the upper body, avoid pulling on the neck or using the hands for assistance, and maintain a stable position throughout the exercise. Additionally, aim to fully contract the abdominal muscles, touch the knees with the opposite elbows, and avoid rounding the back excessively.'
      />
    </div>
      );
}
 
export default Core;