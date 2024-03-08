import { CTA } from "./CTA";
import "../styles/header.css"
export default function Header() {



    return (
        <header>
            <nav id="nav">
                <a href="" id="logo">
                    <img src="https://static.wixstatic.com/media/c470d0_cc958d2c03094deb998478c12cc70dac~mv2.png/v1/fill/w_233,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LIV-1-8.png" alt="" />
                </a>
                <ul id="menu">
                    <li><a href="#hero" >+Renda</a></li>
                    <li><a href="#services" >Serviços</a></li>
                    <li><a href="#attendant" >Atendimento</a></li>
                    <li><a href="#status" >Bem estar</a></li>
                    <li><a href="#results" >Resultados</a></li>
                    <li><a href="#trust" >Pode confiar</a></li>
                </ul>
                <CTA href="">
                    Investir
                </CTA>
            </nav>
        </header>
    );
}