import React from "react";
import Image from "next/image";

function CardProject({ ProjetoName, img, tag1, tag2, tag3, descricao, link }) {
  return (
    <>
      <div className="w-full   flex flex-col md:w-[70%] md:mx-auto lg:mx-0 lg:flex-row lg:w-full  mb-14 mt-10">
        <div className="w-full lg:w-[50%] h-[240px] shadow-md ">
          <Image className="w-full h-full" src={img} alt="imagem projeto" />
        </div>

        <div className="w-full h-auto flex gap-2  flex-col mt-2 lg:mt-0 ">
          <h1 className="text-2xl text-center mt-4   lg:text-left lg:mt-2  px-8">
            {ProjetoName}
          </h1>

          <div className="flex  mt-4 w-full  justify-around  lg:justify-between text-sm lg:w-[60%] lg:px-8   lg:mt-2 ">
            <span className="border-2 border-gray-600 h-6 w-auto lg:w-auto px-2 flex items-center justify-center  rounded-md">
              {tag1}
            </span>
            <span className="border-2 border-gray-600 h-6  w-auto  lg:w-auto px-2 flex items-center justify-center rounded-md">
              {tag2}
            </span>
            <span className="border-2 border-gray-600 h-6 w-auto lg:w-auto px-2 flex items-center justify-center rounded-md">
              {tag3}
            </span>
          </div>

          <div className="mt-4 lg:px-8 lg:mt-0">
            <p className="mt-2 lg:mt-0">{descricao}</p>
            <a target="_blank" href={link} className="mt-4 block lg:mt-2">
              Ver projeto
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
