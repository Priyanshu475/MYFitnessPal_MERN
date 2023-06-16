import Bmi from "../components/BMI";
import Tdee from "../components/TDEE";
import Bfp from "../components/BFP";
import { Link } from "react-router-dom";


const Calculate = () => {
  return (
    <section id='about'>
      <div className="calculate1">
        <div className="hello">
          <Tdee />
        </div>
        <div className="content">
          <h4>
            <center>Calculate Your TDEE</center>
          </h4>
          <p>
          <super>TDEE stands for total daily energy expenditure</super>. It is the total
            energy that a person uses in a day. TDEE is hard to measure
            accurately and varies day by day. More often, it is estimated using
            factors such as a person's basal metabolic rate (BMR), activity
            level, and the thermic effect of food.Understanding TDEE allows
            individuals to adjust their calorie intake to achieve a caloric
            balance, whether their goal is{" "}
            <super>weight maintenance, weight loss, or weight gain</super>, make
            your diet plans accordingly
          </p>
          <p>You can use our Calorie-Calculator by clicking below</p>
          <button className="btn"><Link to='/user/CalorieCalculate'>Plan Your Diet</Link></button>
        </div>
      </div>
      <div className="calculate1">
        <div className="hello">
          <Bmi />
        </div>
        <div className="content">
          <h4>
            <center>Calculate Your BMI</center>
          </h4>
          <p>
          <super>(BMI) stands for body mass index</super>.It
            is widely used as a general indicator of whether a person has a
            healthy body weight for their height. Specifically, the value
            obtained from the calculation of BMI is used to categorize whether a
            person is underweight, normal weight, overweight, or obese depending
            on what range the value falls between.{" "}
          </p>
          <img className="img-bmi"  src="https://austingynecomastiacenter.com/assets/img/blog/BMI-Chart-Simple.png" alt=""></img>
        </div>
      </div>
      <div className="calculate1">
        <div className="hello">
          <Bfp />
        </div>
        <div className="content">
          <h4>
            <center>Calculate Your BFP</center>
          </h4>
          <p>
          <super> Body fat percentage (BFP), </super>the scientific term for body fat is "adipose tissue." Adipose tissue
            serves a number of important functions. Its primary purpose is to
            store lipids from which the body creates energy. In addition, it
            secretes a number of important hormones, and provides the body with
            some cushioning as well as insulation. Body fat includes essential
            body fat and storage body fat. Essential body fat is a base level of
            fat that is found in most parts of the body. It is necessary fat
            that maintains life and reproductive functions. The amount of
            essential fat differs between men and women, and is typically around
            2-5% in men, and 10-13% in women. The healthy range of body fat for
            men is typically defined as 8-19%, while the healthy range for women
            is 21-33%. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
