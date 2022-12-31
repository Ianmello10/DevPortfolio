import React from "react";
import Image from "next/image";

function CardProject({ ProjetoName, img, tag1, tag2, tag3, descricao, link }) {
  return (
    <>
      <div className="  flex flex-col md:w-[70%] md:mx-auto lg:mx-0 lg:flex-row lg:w-full   mt-10">
        <div className="w-full lg:w-[50%] h-[200px]">
          <Image className="w-full h-full" src={img} alt="imagem projeto"/>
        </div>

        <div className="flex gap-2  flex-col mt-2 lg:mt-0">
          <div className="flex flex-col  items-center gap-x-10 w-full    h-12 px-8 lg:flex-row">
            <h1 className="text-2xl mt-2 lg:mt-0">{ProjetoName}</h1>

            <div className="flex mt-4 w-full  justify-around   text-sm lg:w-[40%] lg:mt-0">
              <span className="border-2 border-gray-600 h-6 w-[80px] lg:w-[100px] flex items-center justify-center  rounded-md">
                {tag1}
              </span>
              <span className="border-2 border-gray-600 h-6  w-[80px]  lg:w-[100px] flex items-center justify-center rounded-md">
                {tag2}
              </span>
              <span className="border-2 border-gray-600 h-6 w-[80px] lg:w-[100px] flex items-center justify-center rounded-md">
                {tag3}
              </span>
            </div>
          </div>

          <div className="mt-8 lg:px-8 lg:mt-0">
            <p className="mt-2 lg:mt-0">{descricao}</p>
            <a target='_blank' href={link} className="mt-4 block lg:mt-2">Ver projeto</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
