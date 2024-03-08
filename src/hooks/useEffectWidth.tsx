import Header from "../components/header";
import { CalculatorForm, HeroForm } from "../utils/email";
import { CTA } from "../components/CTA";
import "../styles/App.css";
import campanha from "../assets/campanha.mp4";
import {
  InstagramLogo as Instagram,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Slider } from "../utils/slider";
export function UseDesktop() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div className="container grid">
            <div className="text-form">
              <h2>Aumente sua renda & Estilo de vida</h2>
              <p>
                Faça o seu dinheiro trabalhar para você com a assessoria
                particular da LIV Capital
              </p>
              <HeroForm />
            </div>
            <img
              src="https://static.wixstatic.com/media/c470d0_08bd659a8695409fa3ded96db08e2595~mv2.jpg/v1/crop/x_1820,y_0,w_4592,h_4667/fill/w_492,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/casal-adulto-lindo-feliz-sentado-no-lado-do-iate-assistindo-na-beira-mar-e-abracando-enqua.jpg"
              alt=""
              className="hero-img"
            />
          </div>
        </section>
        <section id="services">
          <h2>A liv te ajuda com:</h2>
          <div className="flex-services">
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png"
                alt=""
              />
              <p>O aumento da sua renda</p>
            </div>
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png"
                alt=""
              />
              <p>O Cuidado das suas aplicações</p>
            </div>
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png"
                alt=""
              />
              <p>A evolução do seu negócio</p>
            </div>
          </div>
          <CTA href="/">Conhecer os produtos</CTA>
        </section>
        <section id="testimonials">
          <Slider />
        </section>
        <section id="attendant">
          <div className="text-btn">
            <h2>POR QUE SER TRATADO COMO MAIS UM?</h2>

            <p>
              Fazemos um diagnóstico das suas características e sugerimos
              investimentos específicos para o seu perfil.
            </p>
            <CTA href="/">Ter um atendimento personalizado</CTA>
          </div>
          <img
            src="https://static.wixstatic.com/media/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png"
            alt=""
          />
        </section>
        <section id="calc">
          <div className="filter">
            <h2>Calculadora de Investimentos</h2>
            <CalculatorForm />
          </div>
        </section>
        <section id="status">
          <img
            src="https://static.wixstatic.com/media/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png/v1/fill/w_261,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png"
            alt=""
          />
          <div className="text-btn">
            <h2>POUPE TEMPO COM UMA ASSESSORIA</h2>
            <p>
              Equilíbrio e bem estar são essenciais. Uma assessoria poupa o seu
              tempo e dinheiro, com os primeiros desafios do mercado financeiro.
            </p>
            <CTA href="/">Poupar meus recursos</CTA>
          </div>
        </section>
        <section id="results">
          <div className="title-desc">
            <h2>A VIDA É FEITA DE PERSPECTIVAS, CERTO?</h2>
            <p>
              Aqui vão algumas idéias do que você pode fazer com os lucros dos
              seus investimentos
            </p>
          </div>
          <div className="objectives">
            <div className="trip">
              <div className="filter">
                <p>Viajar</p>
              </div>
            </div>
            <div className="grandparents">
              <div className="filter">
                <p>Investir na saúde da sua família</p>
              </div>
            </div>
            <div className="family">
              <div className="filter">
                <p>Complementar a sua renda</p>
              </div>
            </div>
          </div>
          <CTA href="/">Dar um up no lifestyle</CTA>
        </section>
        <section id="trust">
          <div className="title-desc">
            <h2>A GENTE SÓ INVESTE COM QUEM CONFIA</h2>
            <p>A LIV Capital é:</p>
          </div>
          <div className="icon-flex">
            <div className="icon-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png"
                alt=""
              />
              <p>Parceira do banco BTG Pactual</p>
            </div>
            <div className="icon-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png"
                alt=""
              />
              <p>Devidamente registrada na CVM</p>
            </div>
          </div>
          <video src={campanha} controls></video>
          <p>
            Além disso, nossos sócios são especializados no mercado financeiro
          </p>
          <div className="CEOs">
            <div className="Felipe">
              <img
                src="https://static.wixstatic.com/media/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png/v1/fill/w_280,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png"
                alt=""
              />
              <h4>Felipe Moraes</h4>
              <p>
                É médico cardiologista formado pela USP e possui MBA em Finanças
                pelo INSPER. Oferece assessoria especializada para médicos e
                clientes de alta renda.
              </p>
            </div>
            <div className="Rafa">
              <img
                src="https://static.wixstatic.com/media/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png/v1/fill/w_279,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png"
                alt=""
              />
              <h4>Rafael Plens</h4>
              <p>
                Vasta experiência no mercado financeiro, com mais de 20 anos no
                atendimento de patrimônios corporativos e familiares.
              </p>
            </div>
          </div>
          <CTA href="#">Investir com a LIV</CTA>
        </section>
        <section id="products">
          <div className="products white">
            <h2>Produtos para pessoas</h2>
            <ul>
              <li>Carteiras administradas</li>
              <li>Fundos exclusivos</li>
              <li>400 fundos independentes</li>
              <li>Previdência privada com multifundos</li>
              <li>Carteiras de renda variável</li>
              <li>Carteiras de renda fixa</li>
              <li>Planejamento fiscal</li>
              <li>Planejamento sucessório</li>
              <li>Assesoria individualizada</li>
            </ul>
          </div>
          <div className="products black">
            <h2>Produtos para empresas</h2>
            <ul>
              <li>Crédito</li>
              <li>Câmbio</li>
              <li>Previdência e seguros coletivos</li>
              <li>Antecipação de recebíveis</li>
              <li>Estruturação de dívidas</li>
              <li>Investment Banking</li>
              <li>Gestão de Caixa</li>
              <li>Mercado livre de energia</li>
              <li>Compra de ativos</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="socials">
          <a href="https://www.instagram.com/liv.capital/" target="_blank">
            <Instagram weight="bold" className="social" />
          </a>
          <a
            href="https://www.linkedin.com/company/livcapital/"
            target="_blank"
          >
            <LinkedinLogo weight="bold" className="social" />
          </a>
        </div>
        <h3>
          Feito por
          <br />
          Queijo&Goiabada
        </h3>
      </footer>
    </>
  );
}

export function UseMobile() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div className="container grid">
            <div className="text-form">
              <h2>Aumente sua renda & Estilo de vida</h2>
              <p>
                Faça o seu dinheiro trabalhar para você com a assessoria
                particular da LIV Capital
              </p>
              <HeroForm />
            </div>
            <img
              src="https://static.wixstatic.com/media/c470d0_08bd659a8695409fa3ded96db08e2595~mv2.jpg/v1/crop/x_1820,y_0,w_4592,h_4667/fill/w_492,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/casal-adulto-lindo-feliz-sentado-no-lado-do-iate-assistindo-na-beira-mar-e-abracando-enqua.jpg"
              alt=""
              className="hero-img"
            />
          </div>
        </section>
        <section id="services">
          <h2>A liv te ajuda com:</h2>
          <div className="flex-services">
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png"
                alt=""
              />
              <p>O aumento da sua renda</p>
            </div>
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png"
                alt=""
              />
              <p>O Cuidado das suas aplicações</p>
            </div>
            <div className="img-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png"
                alt=""
              />
              <p>A evolução do seu negócio</p>
            </div>
          </div>
          <CTA href="/">Conhecer os produtos</CTA>
        </section>
        <section id="testimonials">
          <Slider />
        </section>
        <section id="attendant">
          <div className="text-btn">
            <h2>POR QUE SER TRATADO COMO MAIS UM?</h2>
            <img
              src="https://static.wixstatic.com/media/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png"
              alt=""
            />

            <p>
              Fazemos um diagnóstico das suas características e sugerimos
              investimentos específicos para o seu perfil.
            </p>
            <CTA href="/">Ter um atendimento personalizado</CTA>
          </div>
        </section>
        <section id="calc">
          <div className="filter">
            <h2>Calculadora de Investimentos</h2>
            <CalculatorForm />
          </div>
        </section>
        <section id="status">
          <div className="text-btn">
            <h2>POUPE TEMPO COM UMA ASSESSORIA</h2>
            <img
              src="https://static.wixstatic.com/media/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png/v1/fill/w_261,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png"
              alt=""
            />
            <p>
              Equilíbrio e bem estar são essenciais. Uma assessoria poupa o seu
              tempo e dinheiro, com os primeiros desafios do mercado financeiro.
            </p>
            <CTA href="/">Poupar meus recursos</CTA>
          </div>
        </section>
        <section id="results">
          <div className="title-desc">
            <h2>A VIDA É FEITA DE PERSPECTIVAS, CERTO?</h2>
            <p>
              Aqui vão algumas idéias do que você pode fazer com os lucros dos
              seus investimentos
            </p>
          </div>
          <div className="objectives">
            <div className="trip">
              <div className="filter">
                <p>Viajar</p>
              </div>
            </div>
            <div className="grandparents">
              <div className="filter">
                <p>Investir na saúde da sua família</p>
              </div>
            </div>
            <div className="family">
              <div className="filter">
                <p>Complementar a sua renda</p>
              </div>
            </div>
          </div>
          <CTA href="/">Dar um up no lifestyle</CTA>
        </section>
        <section id="trust">
          <div className="title-desc">
            <h2>A GENTE SÓ INVESTE COM QUEM CONFIA</h2>
            <p>A LIV Capital é:</p>
          </div>
          <div className="icon-flex">
            <div className="icon-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png"
                alt=""
              />
              <p>Parceira do banco BTG Pactual</p>
            </div>
            <div className="icon-text">
              <img
                src="https://static.wixstatic.com/media/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png"
                alt=""
              />
              <p>Devidamente registrada na CVM</p>
            </div>
          </div>
          <video src={campanha} controls></video>
          <p>
            Além disso, nossos sócios são especializados no mercado financeiro
          </p>
          <div className="CEOs">
            <div className="Felipe">
              <img
                src="https://static.wixstatic.com/media/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png/v1/fill/w_280,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png"
                alt=""
              />
              <h4>Felipe Moraes</h4>
              <p>
                É médico cardiologista formado pela USP e possui MBA em Finanças
                pelo INSPER. Oferece assessoria especializada para médicos e
                clientes de alta renda.
              </p>
            </div>
            <div className="Rafa">
              <img
                src="https://static.wixstatic.com/media/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png/v1/fill/w_279,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png"
                alt=""
              />
              <h4>Rafael Plens</h4>
              <p>
                Vasta experiência no mercado financeiro, com mais de 20 anos no
                atendimento de patrimônios corporativos e familiares.
              </p>
            </div>
          </div>
          <CTA href="#">Investir com a LIV</CTA>
        </section>
        <section id="products">
          <div className="products white">
            <h2>Produtos para pessoas</h2>
            <ul>
              <li>Carteiras administradas</li>
              <li>Fundos exclusivos</li>
              <li>400 fundos independentes</li>
              <li>Previdência privada com multifundos</li>
              <li>Carteiras de renda variável</li>
              <li>Carteiras de renda fixa</li>
              <li>Planejamento fiscal</li>
              <li>Planejamento sucessório</li>
              <li>Assesoria individualizada</li>
            </ul>
          </div>
          <div className="products black">
            <h2>Produtos para empresas</h2>
            <ul>
              <li>Crédito</li>
              <li>Câmbio</li>
              <li>Previdência e seguros coletivos</li>
              <li>Antecipação de recebíveis</li>
              <li>Estruturação de dívidas</li>
              <li>Investment Banking</li>
              <li>Gestão de Caixa</li>
              <li>Mercado livre de energia</li>
              <li>Compra de ativos</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="socials">
          <a href="https://www.instagram.com/liv.capital/" target="_blank">
            <Instagram weight="bold" className="social" />
          </a>
          <a
            href="https://www.linkedin.com/company/livcapital/"
            target="_blank"
          >
            <LinkedinLogo weight="bold" className="social" />
          </a>
        </div>
        <h3>
          Feito por
          <br />
          Queijo&Goiabada
        </h3>
      </footer>
    </>
  );
}
