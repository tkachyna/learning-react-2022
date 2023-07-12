import React, { Fragment } from "react"
import he from "he"

export default function Question(props) {
      /*  console.log("===============")
        console.log("Number of game: " + props.newgame       )
        console.log("Quesstion: " + props.item.question)
        console.log("Correct answer: " + props.item.correct_answer)
        console.log("Incorrect answers: " + props.item.incorrect_answers)
        console.log("00000")*/
     
        let [shuffledArray, setShuffledArray]= React.useState([])
        let [aincorrectAnswers, setaIncorrectAnswers] = React.useState()
        let [correctAnswer, setCorrectAnswer] = React.useState()
        let [question, setQuestion] = React.useState("")
        let [point, setPoint] = React.useState(true)
 
  
        React.useEffect( () => {
               
                
                
                let shuffledArrayA = [he.decode(props.item.incorrect_answers[0]), 
                he.decode(props.item.incorrect_answers[1]), 
                he.decode(props.item.incorrect_answers[2]),
                he.decode(props.item.correct_answer)]
                setaIncorrectAnswers(props.item.incorrect_answers)
                shuffledArrayA = shuffledArrayA.sort((a, b) => 0.5 - Math.random());
                setQuestion(props.item.question)               
                setShuffledArray(shuffledArrayA)
                setCorrectAnswer(shuffledArrayA.indexOf(props.item.correct_answer))

                
        }, [props.newgame])


        const [active, setActive] = React.useState("");
        const [activeName, setActiveName] = React.useState("");
        let clickable = true;
        let redColor = false
        const handleClick = (event) => {

        if (clickable) {
                console.log("d")
                setActive(event.target.id);
                setActiveName(event.target.innerText)
           
        }
        }   
  
    if (props.answers === true) {
        let incorrectAnswers = []
        incorrectAnswers = props.item.incorrect_answers
        let isTheAnswerWrong = incorrectAnswers.includes(activeName)
        if (isTheAnswerWrong === true) {
                redColor = true
        }
        clickable = false       
        
    }



    const styles = {
        backgroundColor: props.answers && false && "#94D7A2",


    }
    props.item.checkedAnswer = active
    

    function chooseColor() {

        let incorrectAnswers = []
        // console.log("TEST")
       // console.log(props.item.incorrect_answers)
        //console.log("TESTkonec")
        incorrectAnswers = aincorrectAnswers

        let isTheAnswerWrong = incorrectAnswers.includes(activeName)
        let isTheAnswerTrue = props.item.correct_answer
        isTheAnswerTrue =  isTheAnswerTrue.includes(activeName)
        if (props.answers) {
                if(isTheAnswerWrong) {
                        console.log("B")
                        return "actives"
                        
                } else if (isTheAnswerTrue)
                        if (point) {
                                props.points(old => old +1)
                                setPoint(false)
                        }
                        console.log(correctAnswer)
                        console.log("A")
                        return "activesS"
                        
                
        } else {
                console.log("C")
                return "active"
        }

    }

    function chooseColor2(id) {

        
        if (props.answers && correctAnswer === id) {
                return "activesS"
        }
                
    }



    return (
        
        <div> 
        
        <h3 className="question--question">{he.decode(question)}</h3>
            <div className="row">
            <Fragment>
            <button key={1}
                    className={active === "1" ? chooseColor() : chooseColor2(0)}
                    id={"1"}
                    onClick={handleClick}
                    style = {styles}>
            {shuffledArray[0]}
            </button>
            <button key={2}
                    className={active === "2" ? chooseColor() : chooseColor2(1)}
                    id={"2"}
                    onClick={handleClick}
                    style = {styles}>
            {shuffledArray[1]}
            </button>
            <button key={3}
                    className={active === "3" ? chooseColor() : chooseColor2(2)}
                    id={"3"}
                    onClick={handleClick}
                    style = {styles}>               
            {shuffledArray[2]}
            </button>
            <button key={4}
                    className={active === "4" ? chooseColor() : chooseColor2(3)}
                    id={"4"}
                    onClick={handleClick}
                    style = {styles}>
            {shuffledArray[3]}
            </button>
            </Fragment> 
            </div> 
            <hr/> 
       </div> 

    )
}