import React from "react";
import { LocalesAdheridosStyled } from "./LocalesAdheridosStyles";

import mcDonaldsImg from "../../assets/imgs/Locales/mcdonalds.png";
import laLeñitaImg from "../../assets/imgs/Locales/laleñita.jpeg";
import el10Img from "../../assets/imgs/Locales/el10.jpeg";
import burguerKingImg from "../../assets/imgs/Locales/burguerking.png";
import laPizzadaImg from "../../assets/imgs/Locales/lapizzada.png";
import mostazaImg from "../../assets/imgs/Locales/mostaza.png";
import mqPizzaImg from "../../assets/imgs/Locales/mqpizza.jpeg";
import subwayImg from "../../assets/imgs/Locales/subway.png";
import gridoImg from "../../assets/imgs/Locales/grido.jpg";

import iframeImg from "../../assets/imgs/Logo/logoConNombre500x500.png";

function LocalesAdheridos() {
  const locals = [
    {
      name: "McDonalds",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.031579316516!2d-65.26282592378388!3d-26.807123088801784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d1c8be8e585%3A0x38f53432586113b6!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sar!4v1703540001856!5m2!1ses-419!2sar",
      img: mcDonaldsImg,
    },
    {
      name: "La Leñita",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56977.26003664665!2d-65.32849345447539!3d-26.805620955193426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d6fb1236ab%3A0x1faac0263372c478!2sLa%20Le%C3%B1ita%20Empanadas%20y%20Pizzas%20YB.!5e0!3m2!1ses-419!2sar!4v1703536520322!5m2!1ses-419!2sar",
      img: laLeñitaImg,
    },
    {
      name: "El 10",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56977.343012260666!2d-65.32849349055823!3d-26.805455812902313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cdc148e3a0f%3A0xfc83a03b25e18fd!2sEl%2010%20Gran%20Sandwicheria!5e0!3m2!1ses-419!2sar!4v1703536627075!5m2!1ses-419!2sar",
      img: el10Img,
    },
    {
      name: "Burguer King",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56977.42598748809!2d-65.32849352664111!3d-26.805290670438712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dd4a793f96b%3A0x66f99200393e1a9c!2sBurger%20King%20-%20Sucursal%20Tucuman!5e0!3m2!1ses-419!2sar!4v1703536747265!5m2!1ses-419!2sar",
      img: burguerKingImg,
    },
    {
      name: "La Pizzada",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56977.508962328815!2d-65.32849356272402!3d-26.805125527802637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d677f3077d%3A0x993899f1bf0a75c1!2sLa%20Pizzada!5e0!3m2!1ses-419!2sar!4v1703536841268!5m2!1ses-419!2sar",
      img: laPizzadaImg,
    },
    {
      name: "Mostaza",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56977.59193678287!2d-65.32849359880703!3d-26.80496038499409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243fd4bd54cad%3A0xb53b45b65fb3bc7e!2sMostaza!5e0!3m2!1ses-419!2sar!4v1703536909405!5m2!1ses-419!2sar",
      img: mostazaImg,
    },
    {
      name: "Mq Pizza",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6554196835077!2d-65.27901382378343!3d-26.81909838930032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d6e280334d9%3A0x874ff77049809eb6!2sMQ-pizza!5e0!3m2!1ses-419!2sar!4v1703536977902!5m2!1ses-419!2sar",
      img: mqPizzaImg,
    },
    {
      name: "Subway",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28485.25456764893!2d-65.2970384657213!3d-26.819053788011058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cdcc467b85d%3A0x45df5d75139f51f6!2sSubway!5e0!3m2!1ses-419!2sar!4v1703537069340!5m2!1ses-419!2sar",
      img: subwayImg,
    },
    {
      name: "Grido",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28485.274569710182!2d-65.29703847474048!3d-26.818974206811827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243af49a306ed%3A0x600a1d0e6a86afef!2sHeladeria%20Grido!5e0!3m2!1ses-419!2sar!4v1703537148004!5m2!1ses-419!2sar",
      img: gridoImg,
    },
  ];

  return (
    <LocalesAdheridosStyled id="locals">
      <h2>Locales Adheridos</h2>
      <hr />
      <div className="localsContainer">
        {/* MC DONALDS */}
        <div className="local">
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.031579316516!2d-65.26282592378388!3d-26.807123088801784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d1c8be8e585%3A0x38f53432586113b6!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sar!4v1703540001856!5m2!1ses-419!2sar"
            target="local-iframe"
          >
            <img src={locals[0].img} alt="Logo McDonalds" />
          </a>
        </div>

        {/* LA LEÑITA */}
        <div className="local">
          <a href={locals[1].link} target="local-iframe">
            <img src={locals[1].img} alt="Logo La Leñita" />
          </a>
        </div>

        {/* EL 10 */}
        <div className="local">
          <a href={locals[2].link} target="local-iframe">
            <img src={locals[2].img} alt="Logo El 10" />
          </a>
        </div>

        {/* BURGUER KING */}
        <div className="local">
          <a href={locals[3].link} target="local-iframe">
            <img src={locals[3].img} alt="Logo Burguer King" />
          </a>
        </div>

        {/* LA PIZZADA */}
        <div className="local">
          <a href={locals[4].link} target="local-iframe">
            <img src={locals[4].img} alt="Logo La Pizzada" />
          </a>
        </div>

        {/* MOSTAZA */}
        <div className="local">
          <a href={locals[5].link} target="local-iframe">
            <img src={locals[5].img} alt="Logo Mostaza" />
          </a>
        </div>

        {/* MQ PIZZA */}
        <div className="local">
          <a href={locals[6].link} target="local-iframe">
            <img src={locals[6].img} alt="Logo Mq Pizza" />
          </a>
        </div>

        {/* SUBWAY */}
        <div className="local">
          <a href={locals[7].link} target="local-iframe">
            <img src={locals[7].img} alt="Logo Subway" />
          </a>
        </div>

        {/* GRIDO */}
        <div className="local">
          <a href={locals[8].link} target="local-iframe">
            <img src={locals[8].img} alt="Logo Grido" />
          </a>
        </div>
      </div>
      <hr />
      <iframe src={iframeImg} name="local-iframe"></iframe>
    </LocalesAdheridosStyled>
  );
}

export default LocalesAdheridos;
