'use client'

import styled from "styled-components"
import { Lato } from 'next/font/google';
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        background-color: #141517;
    }
    @media screen and (max-width: 700px){
        &:hover{
            background-color: #141517;
        }
    }
`
const ActiveBorder = styled.span`
    border-bottom: #fff 1px solid;
    padding-bottom: 8px;
    border-width: 40%;
    color: white;
`

export default function NavBar(){
    const router = useRouter()

    const [hrState, setHrState] = useState(0)

    return(
        <div>
            <NavUl className={lato.className}>
                <NavLi onClick={() => {router.push('/'); setHrState(1)}}>
                    {hrState === 1 ? 
                    (<div><ActiveBorder>Sobre</ActiveBorder></div>):
                    <span>Sobre</span>}</NavLi>
                <NavLi onClick={() => {router.push('/projetos'); setHrState(2)}}>
                    {hrState === 2 ? 
                    (<div><ActiveBorder>Projetos</ActiveBorder></div>):
                    <span>Projetos</span>}
                </NavLi>
                <NavLi onClick={() => {router.push('/habilidades'); setHrState(3)}}>
                    {hrState === 3 ? 
                    (<div><ActiveBorder>Habilidades</ActiveBorder></div>):
                    <span>Habilidades</span>}
                </NavLi>
            </NavUl>
        </div>
    )
}