import Head from "next/head";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavBar from "../components/NavBar";
import avatar from "../public/avatar.svg";
import coindesk from "../public/coindesk.png";
import todoreact from "../public/todoreact.png";
import calcjs from "../public/calcjs.png";
import productPage from "../public/productPage.png";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import CardProject from "../components/CardProject";

export default function Home() {
  return (
    <>
      <Head>
        <title>MeuPortfolioDev</title>
        <meta name="description" content="Site portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>

      <NavBar />

      <section className="w-[90%] mx-auto px-2 mt-14  font-primary  lg:mb-36 :py-2">
        <div className="w-full flex flex-col  lg:flex-row h-auto lg:justify-between   ">
          <div className="w-full lg:w-[60%] mt-0  ">
            <h1 className="text-3xl mt-0 text-black dark:text-cyan-600  ">
              Olá , eu sou o Lucas &#128075;
            </h1>

            <p className="mt-4 text-lg">
              Olá! Meu nome é Lucas e sou um jovem desenvolvedor web que está
              buscando oportunidades no mercado de trabalho. Tenho conhecimentos
              em HTML, CSS, JavaScript e React e estou sempre buscando aprender
              coisas novas e me atualizar nas tecnologias mais recentes.
              Atualmente, estou focado em me especializar no desenvolvimento de
              aplicações web e mobile, e estou ansioso para encontrar uma
              oportunidade que me permita aplicar meus conhecimentos e
              habilidades e crescer como profissional.
            </p>

            <div className="flex w-28 mt-8 justify-between h-4  ">
              <a
                className="lg:hover:-mt-2 transition-[margin] ease-in "
                target="_blank"
                href="https://github.com/Ianmello10"
              >
                <AiFillGithub className="w-10 h-10" />
              </a>
              <a
                className="lg:hover:-mt-2 transition-[margin] ease-in "
                target="_blank"
                href="https://www.linkedin.com/in/lucas-ian-b62195225/"
              >
                <AiFillLinkedin className="w-10 h-10" />
              </a>
            </div>
          </div>

          <div className="w-[90%] md:w-[50%] mx-auto lg:w-[250px] mt-14 lg:mt-0 h-[300px]   lg:mr-10">
            <Image className="w-full h-full" src={avatar} alt="avatar vector" />
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto mt-24 mb-10  ">
        <h2 className="text-3xl text-center lg:text-left lg:pl-3">
          Habilidades{" "}
        </h2>

        <div className="w-full flex flex-col justify-between mt-6 lg:flex-row">
          <div
            className="shadow-md  w-[90%] md:w-[70%] mx-auto mb-6 lg:w-[23%] border-2
           border-gray-600 rounded-md  h-42 py-2 px-2"
          >
            <h2 className="text-xl">HTML 5</h2>
            <p className="text-sm">
              HTML (Hypertext Markup Language) é uma linguagem de marcação
              utilizada para criar páginas da Web.
            </p>

            <div className="w-full  flex justify-end px-2 mt-2">
              <IoLogoHtml5 className="w-6 h-6" />
            </div>
          </div>

          <div className=" w-[90%] md:w-[70%] mx-auto mb-6 shadow-md  lg:w-[23%]  border-2   border-gray-600 rounded-md   h-42 py-2 px-2">
            <h2 className="text-xl">CSS</h2>
            <p className="text-sm">
              CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada
              em conjunto com HTML para criar páginas da Web modernas e
              responsivas.
            </p>

            <div className="w-full flex justify-end px-2 mt-2">
              <IoLogoCss3 className="w-6 h-6" />
            </div>
          </div>

          <div className="w-[90%] md:w-[70%] mx-auto mb-6 shadow-md  lg:w-[23%]  border-2 border-gray-600 rounded-md  h-42 py-2 px-2">
            <h2 className="text-xl">JavaScript</h2>
            <p className="text-sm">
              JavaScript é uma linguagem de programação de script client-side,
              ou seja, é executada diretamente no navegador do usuário.
            </p>

            <div className="w-full flex justify-end px-2 mt-2">
              <IoLogoJavascript className="w-6 h-6" />
            </div>
          </div>

          <div className="w-[90%] md:w-[70%] mx-auto mb-6 shadow-md  lg:w-[23%]  border-2 border-gray-600 rounded-md  h-42 py-2 px-2">
            <h2 className="text-xl">React js</h2>
            <p className="text-sm">
              React é uma biblioteca JavaScript de código aberto criada pelo
              Facebook para desenvolver interfaces de usuário.
            </p>

            <div className="w-full flex justify-end px-2 mt-2">
              <GrReactjs className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto py-4 mt-24 ">
        <h2
          id="projetos"
          className="text-3xl pl-1 md:text-center lg:text-left lg:px-0"
        >
          Projetos Recentes
        </h2>

        <CardProject
          ProjetoName="Página de produto"
          img={productPage}
          tag1={"React"}
          tag2={"ContextApi"}
          tag3={"StyledComponents"}
          descricao={`O objetivo era reforçar os conhecimentos em react js e css.Usei o
           contextApi para armazenar o número de itens no carrinho e fazer o compartilhamento de estado entre os componentes
           como adicionar, remover e calcular o preço total da soma dos produtos.Também usei o Styled
            Components para estilizar a página e aprender um pouco mais sobre essa ferrmenta. `}
          link={"https://product-page-dusky.vercel.app/"}
        />

        <CardProject
          ProjetoName="Coindesk"
          img={coindesk}
          tag1={"React"}
          tag2={"Api"}
          tag3={"Zustand"}
          descricao={`O projeto consiste em um aplicativo web feito com React, Tailwind 
          CSS e Zustand que exibe informações sobre criptomoedas usando a API da CoinGecko , 
             utilizei o Zustand para gerenciar o estado da aplicação.
           O objetivo era criar uma interface de usuário fácil de usar para acompanhar 
           o mercado de criptomoedas. `}
          link={"https://coindesk-omega.vercel.app/"}
        />

        <CardProject
          ProjetoName="Todo App"
          img={todoreact}
          tag1={"React"}
          tag2={"Tailwind"}
          tag3={"Vite"}
          descricao={`O projeto consiste em uma aplicação de lista de tarefas, 
          ou "todo list", que permite aos usuários criar, editar e excluir tarefas e 
          marcá-las como concluídas.Para criar a interface de usuário, utilizei o Tailwind CSS 
          como framework de estilo, que me permitiu criar um design limpo e minimalista
           com pouco código CSS. `}
          link={"https://todo-react-neon.vercel.app/"}
        />

        <CardProject
          ProjetoName="Calculadora"
          img={calcjs}
          tag1={"Html"}
          tag2={"Css"}
          tag3={"JavaScript"}
          descricao={`O projeto consiste em uma calculadora simples feita com JavaScript, HTML e CSS que permite aos usuários realizar cálculos básicos. A interface de usuário foi criada com HTML e CSS e a lógica de cálculo foi implementada com JavaScript.
           O objetivo era colocar em prática conhecimentos adquiridos`}
          link={"https://ianmello10.github.io/Calculator-app/"}
        />
      </section>

      <footer className="w-[90%] mx-auto py-4 mt-24">
        <p className="text-center">
          {" "}
          © Copyright 2022 by Ian.Feito com ♥ por Lucas.
        </p>
      </footer>
    </>
  );
}
