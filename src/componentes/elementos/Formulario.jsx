import styled from "styled-components"

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    color: #737380;
    `
export const Label = styled.label`
    padding: 0.5em;
`

export const Input = styled.input`
   padding: 10px;
   border-color: #3772FF;
   width: 20em;
    &::placeholder{
        padding:0.5em;
        text-align: center;
    }
`