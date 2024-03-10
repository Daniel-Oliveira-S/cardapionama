import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Slider(){
    const slides = [
        {
          img: "https://static.wixstatic.com/media/c470d0_047253e05b7342a68cd6ab0c9fdc6ec8~mv2.png/v1/fill/w_484,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-1.png",
          title: "Onde Investir em 2024.",
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
          btn: "Inscreva-se agora",
          href: "https://typebot.co/typebot-liv-curso-fiis",
        },
    
        {
          img: "https://static.wixstatic.com/media/c470d0_53d4b2b3646a4515b99100b73a4ea47a~mv2.png/v1/fill/w_600,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-3.png",
          title:
            "Teste diferentes estratégias de investimento com o simulador BTG Pactual e LIV Capital.",
          btn: "Experimente agora",
          href: "https://typebot.co/typebot-liv-curso-fiis",
        },
        // Add as many slides as you want
      ];




     return(
    
   <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      draggable={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      
    >

      <SwiperSlide className="slides" style={{
        display: 'inline-flex',
        alignItems: 'center',
     
}}>
        <img src={slides[0].img} alt="" />
        <div className="text-slide">
          <h2>{slides[0].title}</h2>
          <p>{slides[0].text}</p>
          <a href={slides[0].href}>
            {slides[0].btn}
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slides" style={{
        display: 'inline-flex',
        alignItems: 'center',
     
}}>
        <img src={slides[1].img} alt="" />
        <div className="text-slide">
          <h2>{slides[1].title}</h2>
          <p>{slides[1].text}</p>
          <a href={slides[1].href}>
            {slides[1].btn}
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slides" style={{
        display: 'inline-flex',
        alignItems: 'center',
     
}}>
        <img src={slides[2].img} alt="" />
        <div className="text-slide">
          <h2>{slides[2].title}</h2>
          <p>{slides[2].text}</p>
          <a href={slides[2].href}>
            {slides[2].btn}
          </a>
        </div>
      </SwiperSlide>


    </Swiper>

     )
    

      }