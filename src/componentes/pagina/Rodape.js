import styled from "styled-components"

const Footer = styled.footer`
    min-height: 5vh;
    background-color: #36D6AD;
    font-size: 1em;
;
`
const Texto = styled.p`
    padding: 1.5em;
    text-align: center;
    color: white;
`

export const Rodape = () => (
   <Footer>
    <Texto>
        2022 - Feito por Fabio
    </Texto>
   </Footer>
)