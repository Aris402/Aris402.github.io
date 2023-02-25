'use client'

import styled from "styled-components"
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

const NavUl = styled.ul`
    color: #A4AACA;
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 25px 50px 50px 50px;
`
const NavLi = styled.li`
    cursor: pointer;
    padding: 10px 20px;

    &:hover{
        background-color: #191970;
        color: white;
        transition: .5s;
        border-radius: 4px;
    }

    &:active{
        color: white;
        background-color: #141517;
    }
`
const NavUnderline = styled.span`
    content: "";
    position: absolute;
    margin: 0px auto;
    top: 18px;
    left: 0px;
    right: 0px;
    height: 1px;
    width: 20px;
    background: rgb(255, 255, 255);
    opacity: 0;
    transition: opacity var(--transitions-duration) ease-in-out;
`

export default function NavBar(){
    return(
        <div>
            <NavUl className={lato.className}>
                <NavLi>Sobre</NavLi>
                <NavLi>Projetos</NavLi>
                <NavLi>Habilidades</NavLi>
            </NavUl>
        </div>
    )
}