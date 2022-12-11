import styled from "styled-components";

export const StyledCart = styled.div`
transition: all 0.3s ease;
position: absolute;
top: 0;
right: 0;
z-index: 999999;
height: 100%;
width: 0%;
overflow-x: hidden;
box-shadow: 1px -1px 14px 0px #b3b4d4;
&.active{
  width: 45%;
}
background: #FFFFFF;
.info{
    padding: 20px;
}
.total{
    padding: 20px;
    background: #EEF1FF;
    button {
  outline: 0;
  background:#2E3EA1;;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
button:active {
  background: #395591;
}
.finalAmount{
    border-top: 1px dashed #D0D5DD;
}
}
`