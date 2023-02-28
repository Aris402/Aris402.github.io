'use client'

import styled from "styled-components";
import { Inconsolata, Lato } from 'next/font/google';
import Link from "next/link";
import { FlexColumn, Paragraph } from "../components/pages/styles/sharedstyles";
import Image from "next/image";

const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: '800',
  })
const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

const ProjectDiv = styled.div`
    width: 100%;
    max-width: 700px;
`
const LinksDiv = styled.div`
    background-color: #222427;
    padding: 25px 35px;
    width: 70%;
    border-radius: 4px;
    margin-top: 10px;

    @media screen and (max-width: 700px){
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
`
const LinkImg = styled.div`
    padding: 0 0 0 18px;
    
    @media screen and (max-width: 700px){
        width: 95% !important;
    }
`
const LinksHeader = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 18px;
`
const LinksA = styled.span`
    color: #A4AACA;
    text-decoration: none;
    padding-left: 17px;
    padding-bottom: 20px;
`

export default function Projetos(){
    return(
        <div>
            <FlexColumn>
                <ProjectDiv>
                    <Paragraph className={inconsolata.className}>
                        Landing Pages
                    </Paragraph>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • Nicolas Flores - Infoprodutor
                        </LinksHeader>
                        <br/>
                        <div>
                            <Link href="https://nicolasflores.com.br/defesa-familiar.html" target="_blank">
                                <LinksA className={lato.className}>
                                    https://nicolasflores.com.br/defesa-familiar.html
                                </LinksA>
                            </Link>
                            <br/><br/>
                            <Link href="https://nicolasflores.com.br" target="_blank">
                                <LinksA className={lato.className}>
                                    https://nicolasflores.com.br
                                </LinksA>
                            </Link>
                            <br/><br/>
                            <Link href="https://nicolasflores.com.br/defesa-familiar.html" target="_blank">
                                <LinksA className={lato.className}>
                                    https://nicolasflores.com.br/defesa-familiar.html
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                    <br/>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • Túlio Ávila - Infoprodutor
                        </LinksHeader>
                        <br/>
                        <div>
                            <Link href="https://tulioavila.com.br/pagina-vendas-att.html" target="_blank">
                                <LinksA className={lato.className}>
                                    https://tulioavila.com.br/pagina-vendas-att.html
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                    <br/>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • João Paulo Queiroz - Dentista
                        </LinksHeader>
                        <br/>
                        <div>
                            <Link href="https://drjpqueiroz.com.br" target="_blank">
                                <LinksA className={lato.className}>
                                    https://drjpqueiroz.com.br
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                    <br/>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • Alison Dantas - Consultor
                        </LinksHeader>
                        <br/>
                        <div>
                            <Link href="https://alisondantas.com.br" target="_blank">
                                <LinksA className={lato.className}>
                                    https://alisondantas.com.br
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                </ProjectDiv>
                <br/><br/><br/><br/><br/>
                <ProjectDiv>
                    <Paragraph className={inconsolata.className}>
                        Jogos de videogame
                    </Paragraph>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • IFRN: O Jogo (Em desenvolvimento)
                        </LinksHeader>
                        <br/>
                        <LinkImg>
                            <Image
                                src="/images/if-vg.png"
                                width={349}
                                height={196}
                                alt="Imagem do IFRN: O Jogo"
                                className="projects_Images"
                                priority={false}
                            />
                        </LinkImg>
                        <div>
                            <br/>
                            <Link href="https://github.com/Aris402/if-vg-compilado" target="_blank">
                                <LinksA className={lato.className}>
                                    https://github.com/Aris402/if-vg-compilado
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                    <br/>
                    <LinksDiv>
                        <LinksHeader className={inconsolata.className}>
                            • Clues Seeker (GameBoy Color)
                        </LinksHeader>
                        <br/>
                        <LinkImg>
                            <Image
                                src="/images/clues-seeker.png"
                                width={230}
                                height={198}
                                className="projects_Images"
                                alt="Imagem do IFRN: O Jogo"
                            />
                        </LinkImg>
                        <div>
                            <br/>
                            <Link href="https://aris402.itch.io/clues-seeker" target="_blank">
                                <LinksA className={lato.className}>
                                    https://aris402.itch.io/clues-seeker
                                </LinksA>
                            </Link>
                        </div>
                    </LinksDiv>
                </ProjectDiv>
            </FlexColumn>
        </div>
    )
}