import styled from "styled-components";

type StyledTextProps ={
    size ?: string
    align?:string
    weight?:string
}
export const StyledText = styled.p<StyledTextProps>`
font-size: ${props=> props?.size === 'sm' ? 14 :props?.size === 'lg'? 24 : props?.size ||16}px;
color: ${props=> props?.color === 'blue'? '#151D72' : props?.color ==='gray' ? '#475467' : '#000000'};
text-align: ${props=> props?.align || 'left' };
font-weight: ${props => props?.color === 'blue' ? '700':props?.weight ||'400'};
`