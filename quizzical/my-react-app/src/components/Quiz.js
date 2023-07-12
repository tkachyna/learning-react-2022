import React from "react"
import Question from "./Question"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function Quiz(props) {

    const [allData, setAllData] = React.useState([])
    const [answers, setAnswers] = React.useState(false)
    const [game, setGame] = React.useState(0)
    const [allAnswered,setAllAnswered]= React.useState(false)
    const [points, setPoints] = React.useState(0)
    const [endGame, setEndGame] = React.useState(false)
    
    console.log("points" + points)
    console.log("points stats" + props.stats.points)
    console.log(allData)
    console.log("rounds" + props.rounds)
    console.log("formData" + props.formData.numOfRounds)
    let vsechnospravne = false
    // &category=${props.formData.chosenCategory}


    function chooseAPI(idCategory) {
        if (idCategory === 8) {
            return 
        } else {
            return "&category=" + idCategory
        }
    }

    React.useEffect(() => {
        props.setStats(item => {
            return {
            ...item,
            points: points

        }})
    }, [points])

    React.useEffect(() => {
        async function getData() {
            await fetch(`https://opentdb.com/api.php?amount=${props.formData.numOfQuestions}&type=multiple${chooseAPI(props.formData.chosenCategory)}`)
            .then(res => res.json())
            .then(data => setAllData(data.results)) 

            setAllData(data => data.map(item => {
                return {...item, isHeld: false, id: nanoid(), checkedAnswer: null}
            
            }))
        }
        getData()  
   
        
    }, [game])

    console.log(allData[0])
    let constNumbers = allData.map(item => {
        return (
            <Question item={item} newgame={game} answers={answers}  points={setPoints}/>
        )
    
    
    })

    function nnewGame() {
        console.log("newGame")
        setAllData([])
        setGame(old => old + 1)
        setEndGame(false)
        setAnswers(false)
        props.setRounds(old => old + 1)
        let datum2 = new Date()
        console.log(datum2)
     
    }

    if (props.vysledky === 2) {
        props.setVysledky(true)
    }
    
    function checkAnswers(constNumbers) {
        const checkIfAllAnswered = allData.some((question) => question.checkedAnswer === "") ? "Nezodpovezeno" : "Okay"
        vsechnospravne = allData.every((answer) => answer.checkedAnswer === "1") 
        if (checkIfAllAnswered === "Nezodpovezeno") {
            setAllAnswered(true)
            return 1;
            
        }

        const AllChosen = allData.every(question => question.checkedAnswer === "1")
        setEndGame(true)
        setAllAnswered(false)
        setAnswers(true)
        
        
    }

   
       return (
        <main>
        
        <div className="Quizzical-div">
        <h1 className="Quizzical">Quizzical</h1>
        </div>
        
        
            {points === 5 && <Confetti />}
            <div  className="question">
        
        {constNumbers} 
        <div className="quiz-buttons">
        {!endGame && <button className="quiz-button1" onClick={() => checkAnswers(constNumbers)} >{allAnswered ? "Check Again" : "Check Answers"}</button>}
        {endGame && <button className="quiz-button1" onClick={nnewGame}>Continue</button>}
        <h3>Points: {points}</h3>
        <h3>No. of rounds: {props.rounds + 1}</h3>
        </div>
        {allAnswered && <h3 className="warning" >You have not answered all questions!</h3>}

        

        </div>
       
        </main>
        

       
    )
}