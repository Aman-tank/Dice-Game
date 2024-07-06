import styled from "styled-components";


function RollDice(props) {


    return ( 
        <DiceContainer>
            <div className="Dice"
            onClick={props.rDice}>
                <img src={`./src/media/dice/dice_${props.cDice}.png`} alt="dice 1" />
                <p>Click on Dice to roll</p>
            </div>
        </DiceContainer>
     );
}

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.Dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
`;