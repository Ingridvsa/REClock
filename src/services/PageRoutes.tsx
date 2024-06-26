import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { CreateAccount } from "../pages/cadastrar/CreateAccount";
import  { Login }  from "../pages/login/Login";
import { ResetPassword } from "../pages/esqueceu-senha/ResetPassword";
import { PrincipalHome } from "../pages/principal-home/PrincipalHome";
import { Sobre } from "../pages/sobre/Sobre";
import { TermosPrivacidade } from "../pages/termos-privacidade/TermosPrivacidade";
import { AjustarPonto } from "../pages/ajustar-ponto/AjustarPonto";
import { BaterPonto } from "../pages/bater-ponto/BaterPonto";
import { AjustarPontoJustificativa } from "../pages/ajustar-ponto-justificativa/AjustarPontoJustificativa";
import { Suporte } from "../pages/suporte/Suporte";
import { BancoHora } from "../pages/banco-hora/BancoHora";
import { MeuPonto } from "../pages/meus-pontos/MeuPonto";
import { Configuracoes } from "../pages/configuracoes/Configuracoes";
import { Notificacoes } from "../pages/notificacoes/Notificacoes";


function PagesRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/termos-privacidade" element={<TermosPrivacidade />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/bater-ponto" element={<BaterPonto />} />
            <Route path="/home" element={<PrincipalHome />} />
            <Route path="/ajustar-ponto" element={<AjustarPonto />} />
            <Route path="/ajustar-ponto-justificativa" element={<AjustarPontoJustificativa />} />
            <Route path="/banco-de-horas" element={<BancoHora />} />
            <Route path="/meus-pontos" element={<MeuPonto />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/suporte" element={<Suporte />} />
        </Routes>
    );
}

export default PagesRoutes; 