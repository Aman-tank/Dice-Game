import styled from "styled-components";

function Home({props}) {
    return ( 
        <>
        <Container>
            <div>
                <DiceImage src="./src/media/Dice.png" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button
                onClick={props}
                >Play Now</Button>
            </div>
        </Container>
        </>
     );
}

export default Home;

const Container = styled.div`
max-width: 1180px;
height: 97vh;
 display: flex; 
 margin: 0 auto;
align-items: center;
gap: 12rem;

.content {
    h1 {
        font-size : 96px;
    };
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
`


const DiceImage = styled.img`width:400px`

const Button = styled.button`
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
`
