import styled from "styled-components"

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    color: #737380;
    background-color:#F6F6F6;
;
    `
export const Label = styled.label`
   padding-top: 1em;
   padding-bottom: 1em;
`

export const Input = styled.input`
   padding: 1em;
   border-color: #3772FF;
   width: 20em;
    &::placeholder{
        padding:0.5em;
        text-align: center;
    }
`