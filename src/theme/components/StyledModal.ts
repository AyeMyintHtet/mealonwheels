import styled from 'styled-components'

export const StyledModal = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 5;
background-color: #808080d1;
display: grid;
place-content: center;
.modals{
    position: relative;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
}
.circle{
    position: absolute;
    top: -11px;
    background: white;
    right: -11px;
    cursor: pointer;
    display: inline-flex;
    border-radius: 51%;
    border: 1px solid;
}
button{
    border: 1px solid;
    border-radius: 10px;
    background: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #464444;
    }
}
`