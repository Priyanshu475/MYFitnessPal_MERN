import React from 'react'
import ExerciseBox from './exerciseBox'


const Legs = () => {
    return (  
        <div className="App">
        <h1 className="ex-heading"><center>Legs</center></h1>
        <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif"
        name='Lying Leg Curl'
        description='The lying leg curl is a great exercise for isolating your hamstrings. It also works your glutes to a lesser degree.'
        commonMistake='Raising your hips off the bench and using momentum to curl the weight use your hammstrings with mind muscle connection.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2021/06/leg-extension-machine.gif"
        name='Leg Extension'
        description='The leg extension is a great exercise for isolating your quads. It also works your glutes to a lesser degree.'
        commonMistake='Raising your hips off the bench and using momentum to curl the weight use your quads with mind muscle connection.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif"
        name='Leg Press'
        description='The leg press is a great exercise for building the middle and lower portions of your quads. It also works your glutes and hamstrings to a lesser degree.'
        commonMistake='Raising your hips off the bench and using momentum to move the weight use your quads with mind muscle connection.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/low-bar-squat-form.gif"
        name='Squat'
        description='The squat is one of the best exercise for building the middle and lower portions of your quads. It also works your glutes and hamstrings to a lesser degree.'
        commonMistake='Improper form, such as rounding the back, collapsing the knees inward, not reaching proper depth, and using excessive weight. Its important to maintain proper alignment, engage the core, and perform squats with controlled movements for optimal results and to avoid injury.'
      />
      <ExerciseBox
        imageSrc="https://www.docteur-fitness.com/wp-content/uploads/2022/01/hack-squat.gif"
        name='Hack Squat'
        description='The hack squat is a great exercise for building the middle and lower portions of your quads. It also works your glutes and hamstrings to a good extent also.'
        commonMistake='Placing excessive pressure on the lower back by leaning too far forward, using momentum instead of controlled movements, and not maintaining proper foot placement. Its essential to focus on maintaining proper form, engaging the legs and glutes, and avoiding excessive strain on the lower back.'
      />
      <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2023/03/dumbbell-calf-raise.gif'
        name='Dumbbell Calf Raise'
        description='The dumbbell calf raise is a great exercise for isolating your calves. It also works your quads to a lesser degree.'
        commonMistake='Using excessive weight, swinging the body to generate momentum, lifting the shoulders instead of isolating the lateral deltoids, and not maintaining proper posture. Its crucial to use controlled movements, focus on the targeted muscles, and maintain good form throughout the exercise.'
      />
        <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/11/seated-calf-raise.gif'
        name='Seated Calf Raise'
        description='The seated calf raise is a great exercise for isolating your calves'
        commonMistake='Not using a full range of motion, using excessive weight that compromises form, lifting with the help of other muscle groups, and not maintaining proper foot positioning. Its important to focus on controlled movements, fully extend and contract the calves, and avoid relying on momentum or assistance from other muscles.'
        />
      </div>
    );
}
 
export default Legs;