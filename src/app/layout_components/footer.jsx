'use client'

import {BsGithub} from 'react-icons/bs'
import styled from 'styled-components'
import { Lato } from 'next/font/google';

const FooterStyle = styled.footer`
    background-color: #222427;
    padding: 25px 0;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Credits = styled.span`
    color: #fff;
    margin-left: 8px;
`
const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

export default function Footer(){
    return(
        <FooterStyle>
            <BsGithub fill='#fff'/>
            <Credits className={lato.className}>Aristóteles - Front-End Developer</Credits>
        </FooterStyle>
    )
}