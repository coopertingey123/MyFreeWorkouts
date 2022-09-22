import { Link } from "react-router-dom";
import { useState } from 'react';
import Cookies from "js-cookie";

export default function Homepage() {

  const [heightFeet, setHeightFeet] = useState("")
  const [heightInches, setHeightInches] = useState("")
  const [currentWeight, setCurrentWeight] = useState("")
  const [targetWeight, setTargetWeight] = useState("")
  const [fitnessGoal, setFitnessGoal] = useState("")

  const handleSetUserData = () => {
    Cookies.set("heightFeet", heightFeet)
    Cookies.set("heightInches", heightInches)
    Cookies.set("currentWeight", currentWeight)
    Cookies.set("targetWeight", targetWeight)
    Cookies.set("fitnessGoal", fitnessGoal)

  }

  return (
    <div className="homepage">
      <div className="header">
        Enter your info to generate a workout based on your fitness goals
      </div>
      <div className="prompts-wrapper">
        <div className="prompt">
          <label>Height: </label>
          <div className="height">
            <select value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} >
              <option>Select...</option>
              <option value="4">4 ft</option>
              <option value="5">5 ft</option>
              <option value="6">6 ft</option>
              <option value="7">7 ft</option>
            </select>
            <select value={heightInches} onChange={(e) => setHeightInches(e.target.value)}>
              <option value="">Select...</option>
              <option value="0">0 in</option>
              <option value="1">1 in</option>
              <option value="2">2 in</option>
              <option value="3">3 in</option>
              <option value="4">4 in</option>
              <option value="5">5 in</option>
              <option value="6">6 in</option>
              <option value="7">7 in</option>
              <option value="8">8 in</option>
              <option value="9">9 in</option>
              <option value="10">10 in</option>
              <option value="11">11 in</option>
            </select>
          </div>
        </div>
        <div className="prompt">
          <label>Current Weight: </label>
          <div>
            <input type="text" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)}/>
            <label style={{paddingLeft: "5px"}}>lb. </label>
          </div>
        </div>
        <div className="prompt">
          <label>Target Weight: </label>
          <div>
            <input type="text" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)}/>
            <label style={{paddingLeft: "5px"}}>lb. </label>
          </div>
        </div>
        <div className="prompt">
          <label>My Main Fitness Goal: </label>
          <select style={{width: "180px"}} value={fitnessGoal} onChange={(e) => setFitnessGoal(e.target.value)}>
            <option value="">Select...</option>
            <option value="lose weight">Lose weight</option>
            <option value="trim fat">Trim fat</option>
            <option value="keep my body healthy">Keep my body healthy</option>
            <option value="bulk up">Bulk up</option>
          </select>
        </div>
        <div className="button-wrapper">
          <Link to="/suggested-workouts"><button onClick={handleSetUserData}>See suggested workouts</button></Link>
        </div>
      </div>

    </div>
  );
}

