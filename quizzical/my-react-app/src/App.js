
import React from "react" 
import Quiz from "./components/Quiz"
import Homepage from "./components/Homepage"
import Foooter from "./components/Footer"
import Statistics from "./components/Statistics"

export default function App() {

    
    let [start, setStart] = React.useState(false)
    let [stats, setStats] = React.useState({
        startingTime: "",
        endingTime: "",
        rounds: "",
        questions: "",
        points: ""
    })
    const [rounds, setRounds] = React.useState(0)
    let [formData, setFormData] = React.useState({
        chosenCategory: "",
        numOfQuestions: 5,
        numOfRounds: ""
    })

    React.useEffect(() => {
        let date = new Date()
        setStats(item => {
            return {
            ...item,
            startingTime: date

        }})
    },[])

    React.useEffect(() => {
        let date = new Date()
        setStats(item => {
            return {
            ...item,
            questions: formData.numOfQuestions,
            rounds: rounds

        }})
    },[rounds])

    console.log("rounds  " + formData.numOfRounds)
    return (
        <div>
        {   
            
            !start
            ?
            <Homepage button={setStart} setFormData={setFormData} formData={formData}  />
            :
            rounds !== parseInt(formData.numOfRounds)
            ?
            <div>
                <Quiz start={start} formData={formData} rounds={rounds} setRounds={setRounds} stats={stats} setStats= {setStats}/>
                <Foooter />
            </div>
            :
            <Statistics stats={stats} setStats={setStats} />
         
        }
        </div>
    )
}