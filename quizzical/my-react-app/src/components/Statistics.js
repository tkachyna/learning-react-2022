import React from "react"
import Confetti from "react-confetti"
export default function Statistics(props) {

    
    let totalPoints = props.stats.questions * props.stats.rounds
    let earnedPoints = props.stats.points
    let percentage = earnedPoints/totalPoints
    console.log(percentage)
    React.useEffect(() => {
        let date = new Date()
        props.setStats(item => {
            return {
            ...item,
            endingTime: date

        }})
    },[])

    function congrats() {
        if (percentage === 1) {
           return "🌟 Wow. Great job. Everything right! 🌟"
        } else if (percentage >= 0.85) {
            return "Well done!"
        } else if (percentage >= 0.5) {
            return "Good work!"
        } else if (percentage >= 0.2) {
            return "Not bad!"
        } else {
            return "Very Bad!"
        }

    }

    function styles()  {
       if (percentage >= 1) {
            return {backgroundColor: "#A50BE4"}
       } else if (percentage >= 0.85) {
            return {backgroundColor:  "#04C106"}
       } else if (percentage >= 0.5) {
             return {backgroundColor: "#E2CE00"}
       } else if (percentage >= 0.2) {
            return {backgroundColor: "#E26A00"}
       } else {
            return {backgroundColor: "#E20000"}
       }
      
       
    }

    console.log(props.stats)
    return (
        <main>
            {percentage >= 0.85 && <Confetti />}
            <div className="stats--quizzical-div">
                <h1 className="stats--quizzical-title">Quizzical</h1>
                <div className="stats--congrats" style={styles()}>{congrats()}</div>
            </div>
            
            <h2 className="stats--title">Statistics</h2>
            <div className="stats--stats">
            <div>Starting Time: {props.stats.startingTime.toString().split(' ')[1]} {props.stats.startingTime.toString().split(' ')[2]} {props.stats.startingTime.toString().split(' ')[3]} {props.stats.startingTime.toString().split(' ')[4]}</div>
            <div>Ending Time: {props.stats.endingTime.toString().split(' ')[1]} {props.stats.endingTime.toString().split(' ')[2]} {props.stats.endingTime.toString().split(' ')[3]} {props.stats.endingTime.toString().split(' ')[4]}</div>
            
            <div>Points earned: {props.stats.points} out of  {totalPoints} </div>

            
            <div>No. of rounds: {props.stats.rounds}</div>
            </div>
            <div className="stats--reload">Click "reload" in your browser in a order to play a new game</div>
        </main>
    )
}