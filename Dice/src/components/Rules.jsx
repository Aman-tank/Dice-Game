import styled from "styled-components";

function Rules() {
    return ( 
        <>
            <RuleContainer>
                <h2>HOW TO PLAY DICE GAME</h2>
                <p>Select any number.</p>
                <p>Click on Dice.</p>
                <p>After Click on dice if the selected number in equal to dice number you will get same point as dice & if you get wrong guess then 2 points will be deducted.</p>
            </RuleContainer>
        </>
     );
}

export default Rules;


const RuleContainer = styled.div`
background-color: lightblue;
max-width: 600px;
margin: 0 auto;
border-radius: 5px;
padding: 10px 50px;
`;