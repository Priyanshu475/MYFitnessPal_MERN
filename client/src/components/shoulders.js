import React from 'react';
import ExerciseBox from './exerciseBox';


const Shoulders = () => {
    return ( 
        <div className="App">
        <h1 className="ex-heading"><center>Shoulders</center></h1>
        <ExerciseBox
        imageSrc="https://newlife.com.cy/wp-content/uploads/2019/02/22371301-Dumbbell-Seated-Shoulder-Press-female_Shoulders_360.gif"
        name='Dumbbell Seated Shoulder Press'
        description='The dumbbell seated shoulder press is a great exercise for building shoulder width ,focuses on front(anterior) deltoids and a lit bit activation of upper chest.'
        commonMistake='Using excessive momentum, leaning back excessively, improper form, neglecting full range of motion, and using weights that are too heavy. Focus on maintaining proper posture and controlled movements for optimal results.'
      />

      <ExerciseBox
        imageSrc="https://newlife.com.cy/wp-content/uploads/2019/11/22341301-Dumbbell-Standing-Lateral-Raise-female_Shoulders_360.gif"
        name='Dumbbell Lateral Raise'
        description='The dumbbell lateral raise is a great exercise for building shoulder width ,focuses on medial deltoids.'
        commonMistake='Using excessive weight, swinging the body to generate momentum, lifting the shoulders instead of isolating the lateral deltoids, and not maintaining proper posture. Its important to use controlled movements, focus on raising the weights with the lateral deltoids, avoid excessive swinging, and keep the core stable throughout the exercise. Additionally, maintain a slight bend in the elbows and avoid shrugging the shoulders.'
      />
              <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/10/dumbbell-reverse-fly.gif'
        name='Dumbbell Reverse Fly'
        description='The dumbbell reverse fly is a great exercise for building shoulder width ,focuses on rear deltoids.'
        commonMistake='Using excessive weight, rounding the back, swinging the body, lifting with the arms instead of engaging the rear deltoids, and not maintaining proper posture. Its important to use controlled movements, focus on squeezing the rear deltoids, keep the back straight, avoid excessive swinging, and maintain a stable core throughout the exercise. Additionally, ensure that the movement is driven by the shoulder blades rather than the arms.'
        />
      <ExerciseBox
        imageSrc='https://newlife.com.cy/wp-content/uploads/2018/12/23171301-Dumbbell-Seated-Bent-Arm-Lateral-raise_Shoulders_360.gif'
        name='Dumbbell Seated Bent Arm Lateral Raise'
        description='The dumbbell seated bent arm lateral raise is a great exercise for building shoulder width ,focuses on medial deltoids .'
        commonMistake='include using excessive weight, swinging the body to generate momentum, lifting the shoulders instead of isolating the lateral deltoids, and not maintaining proper posture. Its important to use controlled movements, focus on raising the weights with the lateral deltoids, avoid excessive swinging or shrugging, and keep the core stable throughout the exercise. Additionally, maintain a slight bend in the elbows and avoid arching or rounding the back.'
      />
      <ExerciseBox
      imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-face-pull.gif'
        name='Cable Face Pull'
        description='The cable face pull is a great exercise for building shoulder width ,focuses on rear deltoids.'
        commonMistake='Using excessive weight, pulling with the arms instead of engaging the rear deltoids and upper back muscles, rounding the shoulders, and not maintaining proper form. Its important to use controlled movements, focus on squeezing the rear deltoids and upper back, keep the shoulders down and back, and maintain a stable core throughout the exercise. Additionally, avoid pulling the weight too close to the face or using jerking motions.'
      />

     <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/military-press.gif"
        name='Military Press'
        description='The military press is a great exercise for building shoulder width ,focuses on front(anterior) deltoids and a lit bit activation of upper chest.'
        commonMistake='Using excessive weight, arching the lower back, leaning too far back, not fully extending the arms overhead, and neglecting proper form. Its important to use controlled movements, engage the shoulders and triceps, maintain a neutral spine, and keep the core stable throughout the exercise. Additionally, avoid shrugging the shoulders and focus on a full range of motion while maintaining proper alignment.'
      />
      <ExerciseBox
        imageSrc="https://newlife.com.cy/wp-content/uploads/2019/11/22331301-Dumbbell-Front-Raise-female_Shoulders_360-4.gif"
        name='Dumbbell Front Raise'
        description='The dumbbell front raise is a great exercise for building shoulder width ,focuses on front(anterior) deltoids and a lit bit activation of upper chest.'
        commonMistake='A common mistake is shrugging the shoulders during which fires the upper traps. Instead, keep the shoulders down and back while raising the arms forward. This way you target solely the front of the shoulders.'
      />
        <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/10/reverse-pec-dec-machine.gif'
        name='Reverse Pec Deck Machine'
        description='The reverse pec deck machine is a great exercise for building shoulder width ,focuses on rear deltoids and traps.'
        commonMistake='Using excessive weight, rounding the back, relying on momentum instead of controlled movements, not fully engaging the rear deltoids, and not maintaining proper posture. Its important to use controlled movements, focus on squeezing the rear deltoids, keep the back straight, and maintain a stable core throughout the exercise. Additionally, avoid using excessive swinging or jerking motions and ensure that the movement is driven by the shoulder blades.'
        />

    </div>
     );
}
 
export default Shoulders;