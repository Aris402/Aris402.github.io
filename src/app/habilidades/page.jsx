'use client'

import { FlexRow, Paragraph, FlexColumn } from "../components/pages/styles/sharedstyles"
import Image from "next/image"
import { Lato, Inconsolata } from 'next/font/google';
import styled from "styled-components";

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: '800',
})

const SkillDescription = styled.p`
    color: #A4AACA;
    max-width: 505px;

    @media screen and (max-width: 768px){
        padding: 15px 30px;
    }
`
const SkillsTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 35px;

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-top: 20px;
    }
`
const ImagesDiv = styled.div`
    width: 89px;
    height: 89px;
    display: flex;
    justify-content: center;
`

export default function Habilidades(){
    return(
        <div>
            <FlexRow>
                <Image
                    src="/images/react.png"
                    width={95}
                    height={80}
                    alt='React JS'
                />
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        ReactJS
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Para os sites ficarem com interfaces limpas, bonitas e bem estruturadas, 
                        utilizo o framework React, que é a base da linguagem Javascript.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <Image
                    src="/images/javascript.png"
                    width={89}
                    height={89}
                    alt='Javascript'
                />
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        Javascript
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Javascript é a linguagem de programação base do framework React,
                        então eu utilizo bastante suas funcionalidades.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <ImagesDiv>
                <Image
                        src="/images/html.png"
                        width={64}
                        height={89}
                        alt='Html'
                    />
                </ImagesDiv>
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        HTML5
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Uso a versão mais recente do HTML como estrutura dos sites que
                        desenvolvo.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <ImagesDiv>
                    <Image
                        src="/images/css.png"
                        width={64}
                        height={89}
                        alt='CSS'
                    />
                </ImagesDiv>
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        CSS3
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Também utilizo a versão mais recente do CSS para estilizar o HTML
                        dos sites, ou seja, deixar o design do site bonito.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <ImagesDiv>
                    <Image
                        src="/images/figma.png"
                        width={54}
                        height={83}
                        alt='Figma'
                    />
                </ImagesDiv>
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        Figma
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Uso o site Figma para construir os protótipos dos sites antes de
                        desenvolver eles nos códigos.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <Image
                    src="/images/photoshop.png"
                    width={89}
                    height={89}
                    alt='Photoshop'
                />
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        Photoshop
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                    Tenho experiência também utilizando Photoshop para manipulação
                    de imagens.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <Image
                    src="/images/dino.png"
                    width={84}
                    height={84}
                    alt='Dinossauro do google'
                />
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        Pixel Art
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Como também sou desenvolvedor de jogos de videogame, tenho
                        experiência na criação de artes em pixel (ou pixel arts).
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
            <br/><br/><br/>
            <FlexRow>
                <Image
                    src="/images/gameboy.png"
                    width={86}
                    height={86}
                    alt='Videogame antigo'
                />
                <SkillsTexts>
                    <Paragraph className={inconsolata.className}>
                        Games
                    </Paragraph>
                    <SkillDescription className={lato.className}>
                        Sou desenvolvedor indie de jogos digitais, com experiência em desenvolvimento usando as Game Engines Unity e RPG Maker MV.
                    </SkillDescription>
                </SkillsTexts>
            </FlexRow>
        </div>
    )
}