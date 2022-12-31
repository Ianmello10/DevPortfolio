import React, { useEffect, useState } from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
function NavBar() {
  
  const { theme, setTheme } = useTheme();

  const [mounted , setMounted] = useState(false)

   useEffect(() => {  
      
     setMounted(true)
   }, [])
 
   if(!mounted) return null 

  const currentTheme = theme === 'system' ? systemTheme : theme; 


  return (
    <>
      <header className="w-[90%] mx-auto h-20 font-primary" >
        <nav className="w-full flex justify-between h-full items-center px-2">
          <h2 className="text-2xl font-bold   ">IanDev</h2>
         
         
          <div className="flex h-full items-center justify-between w-40">
            {currentTheme === 'dark' ? (
              <BsFillSunFill
                onClick={() => setTheme("light")}
                className="cursor-pointer w-[20px] h-[20px]"
              />
            ) : (
              <BsFillMoonFill
                onClick={() => setTheme("dark")}
                className="cursor-pointer w-[20px] h-[20px]"
              />
            )}
            <a  
              className="w-24 h-[34px]  rounded-md bg-cyan-300 
               flex items-center justify-center dark:bg-cyan-600"
              href="#projetos"
            >
              Projetos
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
