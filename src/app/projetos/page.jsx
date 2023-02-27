'use client'

import styled from "styled-components";
import { Inconsolata, Lato } from 'next/font/google';
import Link from "next/link";
import { FlexColumn, Paragraph } from "../components/pages/styles/sharedstyles";

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
`
const LinksHeader = styled.p`
    color: #fff;
    font-weight: 300;
`
const LinksA = styled.span`
    color: #A4AACA;
    text-decoration: none;
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
                        <Link href="https://nicolasflores.com.br/defesa-familiar.html" target="_blank">
                            <LinksA className={lato.className}>
                                https://nicolasflores.com.br/defesa-familiar.html
                            </LinksA>
                        </Link>
                    </LinksDiv>
                </ProjectDiv>
            </FlexColumn>
        </div>
    )
}