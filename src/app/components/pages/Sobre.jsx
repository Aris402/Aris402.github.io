'use client'

import styled from "styled-components";
import { Inconsolata, Lato } from 'next/font/google';

const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: '800',
  })
const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

const ImageDiv = styled.div`
    padding: 70px;
    margin: 0 40px 0 0;
    border-radius: 50%;
    background-image: url('/images/ari.png');
    background-size: cover;
`
const Paragraph = styled.p`
    background: linear-gradient(180deg, #7A84E1 22.4%, #424FC5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 30px;
    font-weight: bold;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BioDescription = styled.p`
    color: #A4AACA;
    max-width: 478px;
    margin-top: 13px;
    line-height: 19px;
`
const Description = styled.p`
    color: #A4AACA;
    max-width: 701px;
    margin-top: 13px;
    text-indent: 47px;
    line-height: 19px;
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
`
const AboutMe = styled.div`
    margin-top: 50px;
`
const WorkDid = styled.p`
    color: #fff;
    font-weight: normal;
    margin-top: 15px;
`
const WorkDiv = styled.div`
    margin-top: 10px;
    width: 100%;
    max-width: 700px;
`
const TimeWorked = styled.p`
    color: #A4AACA;
    font-weight: normal;
    margin-top: 15px;
`
const Trajectory = styled.div`
    margin-top: 50px;
    width: 100%;
    max-width: 700px;
`

export default function Sobre(){
    return(
        <div>
            <FlexRow>
                <div>
                    <ImageDiv>
                    </ImageDiv>
                </div>
                <div>
                    <Paragraph className={inconsolata.className}>Biografia</Paragraph>
                    <BioDescription className={lato.className}>Meu nome é <MarkedSpan>Aristóteles</MarkedSpan>, mas meus amigos costumam me chamar de
                    <MarkedSpan> Arí</MarkedSpan>. Tenho <MarkedSpan>20 anos</MarkedSpan> e sou programador há <MarkedSpan>mais de 4 anos</MarkedSpan>.</BioDescription>
                </div>
            </FlexRow>
            <FlexColumn>
                <AboutMe>
                    <Paragraph className={inconsolata.className}>Sobre mim</Paragraph>
                    <Description className={lato.className}>
                        Sou programador front-end que utiliza <MarkedSpan>HTML</MarkedSpan>, <MarkedSpan>CSS</MarkedSpan> e <MarkedSpan>Javascript</MarkedSpan>, principalmente com o framework <MarkedSpan>ReactJS</MarkedSpan> para construir interfaces Web. Entrei para o mundo da programação porque sempre quis desenvolver <MarkedSpan>jogos</MarkedSpan> de videogame. Gosto de <MarkedSpan>criar</MarkedSpan> coisas, sejam sites, jogos ou qualquer que seja a atividade envolvida com <MarkedSpan>criatividade</MarkedSpan>.
                    </Description>
                </AboutMe>
            </FlexColumn>
            <FlexColumn>
                <Trajectory>
                    <Paragraph className={inconsolata.className}>Trajetória</Paragraph>
                </Trajectory>
                <WorkDiv>
                    <WorkDid className={lato.className}>Desenvolvedor de Landing Pages<br/>
                        (Produtora Bellum)</WorkDid>
                    <TimeWorked className={lato.className}>2022 - Atualmente</TimeWorked>
                </WorkDiv>
            </FlexColumn>
            <FlexColumn>
                <WorkDiv>
                    <WorkDid className={lato.className}>Desenvolvedor de jogo digital
                        <br/>(IFRN Natal-Central)</WorkDid>
                    <TimeWorked className={lato.className}>2022 - 2023</TimeWorked>
                </WorkDiv>
            </FlexColumn>
            <FlexColumn>
                <WorkDiv>
                    <WorkDid className={lato.className}>Freelancer</WorkDid>
                    <TimeWorked className={lato.className}>2023 - Atualmente</TimeWorked>
                </WorkDiv>
            </FlexColumn>
        </div>
    )
}