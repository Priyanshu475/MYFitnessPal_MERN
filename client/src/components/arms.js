import React from 'react';
import ExerciseBox from './exerciseBox';


const Arms = () => {
    return (  
        <div className="App">
        <h1 className="ex-heading"><center>Arms</center></h1>
        <h1 className='ex-heading'><center>Biceps-Triceps-Forearms</center></h1>
        <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-bicep-curl.gif"
        name='Dumbbell Bicep Curl'
        description='The dumbbell bicep curl is a great exercise for building biceps ,focuses more on inner biceps(short head).'
        commonMistake='A common mistake is to swing the dumbbells up using momentum. Instead, keep your elbows locked in place and use your biceps to curl the weight up.'
      />
            <ExerciseBox
      imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2023/03/straight-bar-tricep-pushdown.gif'
        name='Straight Bar Tricep Pushdown'
        description='The tricep pushdown is a great exercise for building triceps ,focuses more on lateral head of triceps.'
        commonMistake='A common mistake is to swing the bar down using momentum. Instead, keep your elbows locked in place and use your triceps to push the weight down.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/dumbbell-hammer-curl.gif"
        name='Dumbbell Hammer Curl'
        description='The dumbbell hammer curl is a great exercise for building biceps ,focuses more on brachioradialis,brachialis and the long head of bicep.'
        commonMistake='A common mistake is to swing the dumbbells up using momentum and improper grip, and inadequate range of motion. Ensure controlled movements, maintain good posture, and focus on engaging the biceps for effective hammer curls'
      />

     <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2021/10/cable-tricep-pushdown.gif"
        name='Rope Tricep Pushdown'
        description='The tricep pushdown is a great exercise for building triceps ,focuses more on medial head of triceps.'
        commonMistake='A common mistake is to swing the rope down using momentum. Instead, keep your elbows locked in place and use your triceps to push the weight down.'
      />
        <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/10/incline-dumbbell-curl.gif'
        name='Incline Dumbbell Curl'
        description='The incline dumbbell curl is a great exercise for building biceps ,focuses more on outer biceps(long head).'
        commonMistake='A common mistake is to swing the dumbbells up using momentum. Instead, keep your elbows locked in place and use your biceps to curl the weight up and strech your biceps at the bottom of the movement.'
        />
      <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/03/ez-bar-preacher-curl.gif'
        name='Preacher Curl'
        description='Preacher curls primarily target the biceps brachii muscle, specifically the long head. Additionally, they engage the brachialis and brachioradialis muscles'
        commonMistake='Using excessive momentum, improper form, and lifting too heavy. Focus on controlled movements and squeeze your biceps for maximum benefits'
      />
          <ExerciseBox
        imageSrc='https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-tricep-overhead-extensions.gif'
        name='Cable Tricep Overhead Extensions'
        description='The tricep overhead extension is a great exercise for building triceps ,focuses more on long head of triceps.'
        commonMistake='A common mistake is to swing the rope down using momentum. Instead, keep your elbows locked in place and use your triceps to push the weight forward.'
    />
            <ExerciseBox
        imageSrc='https://newlife.com.cy/wp-content/uploads/2019/11/01251301-Barbell-Wrist-Curl-II_Forearms_360.gif'
        name='Barbell Wrist Curl'
        description='The barbell wrist curl is a great exercise for building forearms ,focuses more on flexor carpi radialis, flexor carpi ulnaris, and palmaris longus.'
        commonMistake='A common mistake is to swing the bar up-down using momentum. Instead, keep your elbows locked in place and use your forearms to push the weight down-up.'
    />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/08/flat-bench-skull-crusher.gif"
        name='Skull Crusher'
        description='The skull crusher is a great exercise for building triceps ,focuses more on long head of triceps.'
        commonMistake='A common mistake is to swing the bar down using momentum. Instead, keep your elbows locked in place and use your triceps to push the weight down and pick up both.'
      />


        <ExerciseBox
        imageSrc='https://fitnessprogramer.com/wp-content/uploads/2021/06/Behind-The-Back-Barbell-Wrist-Curl.gif'
        name='Back Barbell Wrist Curl'
        description='The back barbell wrist curl is a great exercise for building forearms ,focuses more on extensor carpi ulnaris, extensor carpi radialis longus, and extensor carpi radialis brevis.'
        commonMistake='A common mistake is to swing the bar up-down using momentum. Instead, keep your elbows locked in place and use your forearms to push the weight down-up.'
    />

    </div>
        )
}
 
export default Arms;