import styled from 'styled-components'

export const HomeCom = styled.div`
position: relative;
min-height: 100vh;
.card-container{
    row-gap: 10px;
}
.addTicket{
    cursor: pointer;
    box-shadow: 0px 1px 12px 1px #dbaf10;
    padding: 5px;
    border: none;
    padding: 8px;
    border-radius: 5px;
    transition: all 0.5s ease;
    &:hover{
            color: white;
        box-shadow: 0;
        background-color: #dbaf10;
    }
}
.addTicketData{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .layer{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #80808085;
        z-index: 1;
    }
    .content{
        position: relative;
        display: grid;
        place-content: center;
        z-index: 4;
        border: none;
        background: white;
        width: fit-content;
        border-radius:10px;
        padding: 15px;
        margin: auto;
        margin-top: 10%;
        box-shadow: 0px 1px 12px 1px white;
        .submit{
            border: none;
            padding: 10px;
            border-radius: 8px;
            max-width: 100px;
            width: 100%;
            cursor: pointer;
            &:hover{
                background: #e1d2d2;
            }
        }
        .cancel{
            border: none;
            padding: 10px;
            border-radius: 8px;
            max-width: 100px;
            width: 100%;
            background: black;
            color: white;
            cursor: pointer;
            &:hover{
                background: gray;
            }
        }        
    }
}
.waterdrop {
width:70px;height:82px; margin:50px 30px;
  background: rgba(222,222,0,.05);//transparent;
  border-radius: 25% 75% 44% 56% / 29% 30% 70% 71% ;
  box-shadow: inset 10px 20px 20px rgba(0,0,0,0.2),
  5px 5px 5px rgba(0,0,0,.1),
  15px 10px 25px rgba(0,0,0,0.2);
  inset :-10px -20px 5px rgba(255,255,255, 0.9);
} 
.waterdrop1 {
width:fit-content;
  background: rgba(222,222,0,.05); //white; //transparent;
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50% ;
  box-shadow: inset 10px 15px 20px rgba(0,0,0,0.2),
  5px 5px 15px rgba(0,0,0,.1),
  10px 10px 15px rgba(0,0,0,0.2);
  inset :-20px -10px 25px rgba(255,255,255,.9);
  height: 252px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 17px;
    margin: auto;
} 
`