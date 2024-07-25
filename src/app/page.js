"use client";
import { useState } from "react";

import estilos from "./page.module.css";
import Image from "next/image";
import banner from "/public/banner.jpg";
import logo from "/public/barbearia.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export default function Home() {

  const [icone, set_icone] = useState(false);

  function alterar_icone() {
    set_icone(!icone);
  };


  return (
    <main className={icone ? estilos.main_dark : estilos.main_light}>

      <header className={estilos.header} >
        <Image className={estilos.logo} src={logo} />
        <button onClick={alterar_icone} className={estilos.btn} >
          {icone ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </header>

      <section className={estilos.primeira_secao} >
        <Image className={estilos.banner} src={banner} />
      </section>

      <section className={estilos.segunda_secao} >
        <h1 className={estilos.h1} >
          Bem-vindo a Barber Shop
        </h1>

        <p className={estilos.primeiro_p} >
          Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
        </p>

        <p className={estilos.segundo_p}  >
          Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
        </p>

        <p className={estilos.terceiro_p} >
          S.Kelly
        </p>
      </section>
    </main>
  );
}
