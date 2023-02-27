'use client'

import styled from "styled-components";
import { Inconsolata, Lato } from 'next/font/google';
import { FlexRow, MarkedSpan, FlexColumn, Paragraph } from "./styles/sharedstyles";

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

    @media screen and (max-width: 700px){
        padding: 50px;
        margin: 0 10px 10px 0;
    }
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
    text-indent: 0;
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
    margin-top: 7px;
`
const Trajectory = styled.div`
    margin-top: 50px;
    width: 100%;
    max-width: 700px;
`
const GeneralDiv = styled.div`
    @media screen and (max-width: 700px){
        padding: 0 20px;
    }
`

export default function Sobre(){
    return(
        <GeneralDiv>
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
        </GeneralDiv>
    )
}