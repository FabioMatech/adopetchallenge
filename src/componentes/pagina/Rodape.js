import styled from "styled-components"

const Footer = styled.footer`
    padding: 3.25em;
    background-color: #36D6AD;
;
`
const Texto = styled.p`
    text-align: center;
    color: white;
`

export const Rodape = () => (
   <Footer>
    <Texto>
        2022 - Feito por Fabio de Sousa
    </Texto>
   </Footer>
)