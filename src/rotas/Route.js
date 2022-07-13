import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cadastro } from "../pagina/Cadastro"
import { Home } from "../pagina/Home"
import { Login } from "../pagina/Login"
import { Perfil } from "../pagina/Perfil"
import { TelaInicial } from "../pagina/TelaInicial"

export const Conteudo = () => (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<TelaInicial />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/home" element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)