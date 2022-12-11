import styled from "styled-components";

export const StyledCard = styled.div`
    position: relative;
    border: none;
    border-radius: 10px;
    margin-bottom: 16px;
    height: calc(100% - 16px);
    .desc{
        padding: 10px;
    }
    .status{
        border-radius: 10px 10px 0 0;
        padding:5px;
        p{
            text-align: center;
            color:white;
        }

    }
    &.unseen{
        box-shadow: 0px 1px 12px 1px #0d6efd;
        .status{
            background: #0d6efd;
            
        }
    }
    &.pending{
        box-shadow: 0px 1px 12px 1px #cedb10;
        .status{
            background: #cedb10;
            
        }
    }
    &.approved{
        box-shadow: 0px 1px 12px 1px #10db43;
        .status{
            background: #10db43;
            
        }
    }
    &.reject{
        box-shadow: 0px 1px 12px 1px #db1010;
        .status{
            background: #db1010;
            
        }
    }
    .deleteTicket{
        position: absolute;
        top: -10px;
        left: -10px;
        background-color: red;
        display: grid;
        place-content: center;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        opacity: 0;
        transition: all 0.4s ease;
        cursor: pointer;
    }
    &:hover{
        .deleteTicket{
            opacity: 1;
        }
    }
.scale{
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
}
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
        &.upperRole{
            box-shadow: 0px 1px 12px 1px #10db43;
        }
`