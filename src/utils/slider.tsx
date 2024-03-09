import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
          img: "https://static.wixstatic.com/media/c470d0_047253e05b7342a68cd6ab0c9fdc6ec8~mv2.png/v1/fill/w_484,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-1.png",
          title: "Onde Investir em 2024.",
          class: "slide-prev",
          btn: "Acesse e baixe agora",
          href: "https://liv-capital.ondeinvestir.live/?utm_source=livcapital&utm_medium=livcapial-banner&utm_campaign=livcapital-onde_investir_24",
          text: <p>
            As principais ações, fundos imobiliários e títulos de renda pública, segundo especialistas do BTG.
            <br />
            <br />
            Controle suas finanças e tome decisões de investimento.
          </p>,
      
        },
        {
          img: "https://static.wixstatic.com/media/c470d0_0420086f3de8425ab1a1cd72c50e883e~mv2.png/v1/fill/w_509,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_0420086f3de8425ab1a1cd72c50e883e~mv2.png",
          title:
            "Aprenda a investir em fundos imobiliários com o BTG Pactual e a LIV Capital.",
          class: "slide",
          btn: "Inscreva-se agora",
          href: "https://typebot.co/typebot-liv-curso-fiis",
        },
    
        {
          img: "https://static.wixstatic.com/media/c470d0_53d4b2b3646a4515b99100b73a4ea47a~mv2.png/v1/fill/w_600,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-3.png",
          title:
            "Teste diferentes estratégias de investimento com o simulador BTG Pactual e LIV Capital.",
          class: "slide-next",
          btn: "Experimente agora",
          href: "https://typebot.co/typebot-liv-curso-fiis",
        },
        // Add as many slides as you want
      ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 8000);

        return () => clearInterval(interval);

    

    },);



     return(
      <>
      <div className={`slide ${slides[currentSlide].class}`}>
     
      <div className="slide-prev" onClick={() => setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))}> 
        <ArrowLeft className="nav-slide" />
      </div>
    <img className="" src={slides[currentSlide].img} alt="" />
    <div className="text-btn">
      <h2 className="">{slides[currentSlide].title}</h2>
      <p>{slides[currentSlide].text}</p>
      <a href={slides[currentSlide].href} target="_blank">
        {slides[currentSlide].btn}
      </a>
    </div>
    <div className="slide-next" onClick={() => setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))}>
        <ArrowRight className="nav-slide" />
      </div>
  </div>
</>

     )
    

      }