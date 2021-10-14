import styled from 'styled-components';
import homeImage from '../assets/homeImage.svg';

export const Container = styled.div`
    background: white;
    height: 100vh;
    margin-left:300px;
`;

export const Header = styled.div`
    height: 50vh;
    padding: 0;
    background-image: url(${homeImage});
    background-repeat: no-repeat;
    background-size: 100% ;
    
    display: flex;
    min-width: 1000px;

    strong{
        font-weight: 400;
        color: white;
        
        margin:auto;
        font-size: 36px;
        display: flex;
    }

`;

export const Body = styled.div`
    display: grid;
    text-align: justify;
    padding: 2rem;
    h2{
        color: var(--text-title);
        font-weight: 600;
        margin: auto;
        margin-top: 2rem;
    }

    p{
        color: black;
        width: 800px;
        margin: auto;
        margin-top: 2rem;
        font-weight: 400;
    }
`; 

export const TrabalhosTable = styled.div`
    margin:auto;
    margin-top:2rem;
    display: grid;
    width: 800px;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    padding: 1rem;
    gap: 1rem;
`;

export const Square = styled.div`
    float:left;
    display: inline;
    height: 120px;
    background: #C4C4C4;
`;