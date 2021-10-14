import styled from 'styled-components';

export const Container = styled.div`
    background:var(--sidebar);
    height: 100vh;
    width: 300px;

    
    display:grid;
    position: fixed;

    gap: 0.5rem;
    
`;

export const Profile = styled.div`
    border: none;
    display:grid;
    margin: auto;
    margin-top: 60px; 
    gap: 1rem;
    width: 100%;

    img {

        height: 120px;
        margin: auto;
        margin-top:0;
        border-radius: 50%;
    }

    h2, h4{
        color: var(--text-color);
        font-weight: 400;
        margin: auto;
        
    }


`;

export const Menu = styled.div`
    border: none;
    border-top: none;
    display: grid;
    height: 230px;
    width: 100%;
    padding: 0;


`;

export const MenuButton = styled.button`
   
    background: transparent;
    cursor: pointer;
    color: white;
    padding: 1rem;
    
    text-decoration:none;
    border:none;
    border-bottom: 1px solid white; 
    text-align: left;
    padding-left: 2.5rem;
    font-weight: 400;
    font-size: 14px;
    width:100%;

    &:hover{
            background: var(--grey);
            color: black;
        }

    
`; 