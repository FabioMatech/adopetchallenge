import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import { Botao } from "../componentes/elementos/botao";
import logoazul from "../imagens/logoazul.png"
import styled from "styled-components";

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    color: #737380;
    `
const Label = styled.label`
    padding: 0.5em;
`

const Input = styled.input`
   padding: 10px;
   border-color: #3772FF;
   width: 20em;
    &::placeholder{
        padding:0.5em;
        text-align: center;
    }
`

export const Cadastro = () => (
    <WrapperConteudo>
        <Logo src={logoazul} alt="Logo da Adopet" />
       <Texto>
            Ainda não tem cadastro?
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Texto>
        <Formulario>
        
        <Label for="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Escolha seu melhor email" />
        
        <Label for="fnome">Nome </Label>
        <Input type="text" id="fnome" name="fnome" placeholder="Digite seu nome completo" />
        
        <Label for="senha">Senha </Label>
        <Input type="senha" id="senha" name="senha" placeholder="Crie uma senha" />
        
        <Label for="fnome">Confrme sua senha </Label>
        <Input type="corfirmarsenha" id="confirmarsenha" name="confirmarsenha" placeholder="Repita a senha criada acima" />


        </Formulario>
        <Botao href="/cadastro">
            Cadastrar
        </Botao>
    </WrapperConteudo>
)
  