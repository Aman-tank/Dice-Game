import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";


function GamePlay() {

    const [selectedNumber, setSelectedNumber] = useState();

    const [currentDice, setCurrentDice] = useState(1);

    const [score, setScore] = useState(0);

    const [error,setError] = useState('');

    const[showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min) + min);
    };

    const roleDice = () => {
        
        const randomNumber = generateRandomNumber(1,7);

        setCurrentDice((prev) => randomNumber);

        if(!selectedNumber){
            
            setError('First select a number');

            return;}

        if (selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }
        else{
            setScore((prev) => prev - 2
            );
        }

        setSelectedNumber(undefined);

    }


    function resetGame(){

        setScore(0);
        setCurrentDice(1);
        setSelectedNumber('');
        setError('');

    }


    return ( 
        <MainContainer>
         <div className="top_section">
         <TotalScore score ={score}/>
         <NumberSelector setError = {setError} error = {error} sNumber ={selectedNumber} setSnumber = {setSelectedNumber}/>
         </div>
         <RollDice cDice = {currentDice} rDice ={roleDice}/>
         <div className="butns">
            <button className="newbtn" onClick={resetGame}>Reset The Game</button>
            <button className="newbtn" onClick={()=> setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</button>
         </div>
         {showRules && <Rules/>}
        </MainContainer>
     );
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;

.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.butns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.newbtn{
    
    margin: 10px;
    color:white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    border:1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
}
}
`;