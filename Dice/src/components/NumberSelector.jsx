import styled from "styled-components";

function NumberSelector(props) {

    const arrNumber = [1,2,3,4,5,6];
    
    function handleNumberError(value){
        props.setSnumber(value);
        props.setError('');
    }

    return ( 
        <NumberSelectorContainer>
        <p className="error">{props.error}</p>
        <div className="flex">
        {arrNumber.map((value, index)=>(
            <Box
            isSelected={value === props.sNumber}
            key={index}
            onClick={() =>handleNumberError(value)}>{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
        
     );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
.error{
    color: red;
}
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 40px;
font-weight: 700;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};`