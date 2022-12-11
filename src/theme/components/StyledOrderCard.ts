import styled from "styled-components";
export const StyledOrderCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .qtyDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid #D0D5DD;
        border-radius: 8px;
        width: fit-content;
    .minus,.plus{
        padding: 15px;
    }
    .quantity{
        padding-inline: 20px;
        padding-block: 15px;
        border-left: 1px solid  #D0D5DD;
        border-right: 1px solid  #D0D5DD;
    }
    }
`