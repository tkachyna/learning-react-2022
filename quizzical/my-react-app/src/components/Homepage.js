import React from "react"
import Bulb from "../images/question-mark.png"

export default function Homepage(props) {

    function buttonClicked() {
        props.button(true)
    }

    
    function handleChange(event) {
        
        let {name, value, type} = event.target
        props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    

    return (
        <div className="homepage" >
            <img  className="homepage--picture" src={Bulb}/>
            <h1 className="homepage--title">Quizzical</h1>
            <div className="homepage--description">is testing your knowledge</div>
            <div className="homepage--category">Choose your category: </div>
            <select 
            onChange={handleChange}
            name="chosenCategory"
            id="chosenCategory">
                <option value="all">All Categories</option>
                <option value="9">General knowledge</option>
                <option value="10">Entertaiment: Books</option>
                <option value="11">Entertaiment: Film</option>
                <option value="12">Entertaiment: Music</option>
                <option value="13">Entertaiment: Musicals &amp; Theatres</option>
                <option value="14">Entertaiment: Televison</option>
                <option value="15">Entertaiment: Video Games</option>
                <option value="16">Entertaiment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computer</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geogprahy</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>
            <div className="homepage--category">Number of questions: </div>
            <select
                onChange={handleChange}
                defaultValue={5}
                id="numOfQuestions"
                name="numOfQuestions">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <div className="homepage--category">Number of rounds: </div>
            <select
                onChange={handleChange}
                id="numOfRounds"
                name="numOfRounds">
                <option value="100">---</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={buttonClicked} className="homepage--button"> Start Quiz </button>
            <div className="homepage--footer">Created by Teadáš Kachyňa, 2022</div>
        </div>
    )
}