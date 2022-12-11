import styled from "styled-components";

export const StyledLoginRegisters = styled.div`
transition: all 0.3s ease;
background: #dde1e7;
p{
    margin: 0;
    padding: 0;
}
height: 100vh;
.container-fluid{
    height: 100vh;
    .row{
        height: 100vh;
    }
}
.field{
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
}
.field:nth-child(2){
  margin-top: 20px;
}
.field input{
  height: 100%;
  width: 100%;
  padding-left: 45px;
  outline: none;
  border: none;
  font-size: 18px;
  background: #dde1e7;
  color: #595959;
  border-radius: 25px;
  box-shadow: inset 2px 2px 5px #BABECC,
              inset -5px -5px 10px #ffffff73;
}
.field input:focus{
  box-shadow: inset 1px 1px 2px #BABECC,
              inset -1px -1px 2px #ffffff73;
}
.field span{
  position: absolute;
  color: #595959;
  width: 50px;
  line-height: 50px;
}
.field label{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 45px;
  pointer-events: none;
  color: #666666;
}
.field input:valid ~ label{
  opacity: 0;
}
button{
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: #dde1e7;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #595959;
  box-shadow: 2px 2px 5px #BABECC,
             -5px -5px 10px #ffffff73;
}
button:focus{
  color: #3498db;
  box-shadow: inset 2px 2px 5px #BABECC,
             inset -5px -5px 10px #ffffff73;
}
.text{
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 35px;
  color: #595959;
}
.content{
  width: 330px;
  padding: 40px 30px;
  background: #dde1e7;
  border-radius: 10px;
  margin: auto;
  box-shadow: -3px -3px 7px #ffffff73,
               2px 2px 5px rgba(94,104,121,0.288);

}
.error{
  color: red;
    font-size: 12px;
    padding-block: 7px;
}
.notmember{
  color: #504949;
    border-bottom: 1px solid #0dcaf0;
}
.goTo{
  cursor: pointer;
  color: #842029;
    border-bottom: 1px solid #504949;
}
.select{
  background: #dde1e7;
    padding: 11px;
    border-radius: 25px;
    outline: none;
    border: none;
    padding-left: 45px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
}
`