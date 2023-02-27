import styled from "styled-components"

const Paragraph = styled.p`
    background: linear-gradient(180deg, #7A84E1 22.4%, #424FC5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 26px;
    font-weight: bold;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px){
        flex-direction: column;
        text-align: center;
    }
`
const MarkedSpan = styled.span`
    color: #fff;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    @media screen and (max-width: 700px){
       text-align: center;
    }
`

export {MarkedSpan, FlexColumn, FlexRow, Paragraph}