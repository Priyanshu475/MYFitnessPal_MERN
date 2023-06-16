import ExerciseBox from "./exerciseBox";



const Chest = () => {
    return ( 
        <div className="App">
        <h1 className="ex-heading"><center>Chest</center></h1>
        <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif"
        name='Bench Press'
        description='Strengthen your chest and triceps with the flat bench press, a classic compound exercise that targets multiple muscle groups. Boost upper body strength and build a well-rounded physique'
        commonMistake='Not keeping your core tight, not keeping your elbows tucked in, and not keeping your back arched.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/incline-barbell-bench-press.gif"
        name='Incline Bench Press'
        description='The incline bench press is a variation of the traditional bench press in which the bench is positioned at about a 45-degree angle. The resulting inclined position targets your upper chest and the frontside of your shoulders more than the flat bench press.'
        commonMistake='Not keeping your core tight, not keeping your elbows tucked in, and not keeping your back arched,not bringing barbell more near to you and bring it down more towards face and setting angle more than 45 degree'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif"
        name='Incline Dumbbell Press'
        description='The incline dumbbell bench press is a free weights exercise that primarily targets the upper chest and to a lesser degree also targets the shoulders and triceps.'
        commonMistake='Not keeping your core tight, not keeping your elbows tucked in, and not keeping your back arched,not bringing dumbbells enough to you,keeping incline angle more than 45 degree'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-chest-press.gif"
        name='Dumbbell Bench Press'
        description='The dumbbell bench press is a free weights exercise that primarily targets the middle and lower portion of chest and to a lesser degree also targets the shoulders and triceps.'
        commonMistake='Not keeping your core tight, not keeping your elbows tucked in, and not keeping your back arched,not bringing dumbbells enough to you'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/cable-cross-over.gif"
        name='Cable Crossover'
        description='The cable crossover is a great exercise for building the lower and middle portions of your chest. It also works your upper chest and shoulders to a lesser degree.'
        commonMistake='Using excessive weight, leaning too far forward or backward, not maintaining proper form and alignment, and not fully engaging the chest muscles. Its important to use controlled movements, keep the core stable, and focus on squeezing the chest at the peak of the movement for maximum effectiveness.'

      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/07/pec-deck.gif"
        name='Pec Deck'
        description='The pec deck is a great exercise for isolating your chest muscles.Its a isolation movement exercise focused only on chest, less prone to injury then dumbbell fly.'
        commonMistake='Using excessive weight, rounding the shoulders forward, using momentum instead of controlled movements, and not fully squeezing the chest muscles at the peak of the contraction. Its important to maintain proper form, engage the chest muscles, and focus on a slow and controlled motion throughout the exercise.'
      />
      <ExerciseBox
        imageSrc="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-machine.gif"
        name='Chest Press Machine'
        description='The chest press machine is a great exercise for building the middle and lower portions of your chest. It also works your shoulders and triceps to a lesser degree.'
        commonMistake='Using too much weight, arching the back, flaring the elbows outward, not fully extending the arms, and relying on the machine to do the work instead of actively engaging the chest muscles. Its important to maintain proper form, control the movement, and focus on a full range of motion to effectively target the chest muscles.'
      />
      <ExerciseBox
        imageSrc="https://boxlifemagazine.com/wp-content/uploads//2023/05/pullover-haltere.gif"
        name='Dumbbell Pullover'
        description='The dumbbell pullover is a great exercise for building the upper portion of your chest. It also works your lats and triceps depending on the extend of flare in your elbows.'
        commonMistake='Using excessive weight, arching the lower back excessively, not engaging the core, and relying on momentum instead of controlled movements. Its important to maintain proper form, keep the core stable, and focus on the stretch and contraction of the targeted muscles chest throughout the exercise.'
      />
    </div>
     );
}
 
export default Chest;