"use client"
import {useState , useEffect}from "react";
import Link from "next/link";
import Image from "next/image";

import HackCLubLogo from "../../public/flag-hc-top.svg";
//react icons
import { CiMenuFries } from "react-icons/ci";

//component 


    
const Navbar = () => {

    const LiStyle ="  cursor-pointer transition dark:text-white  hover:translate-y-[-1px] hover:text-gray-600 duration-150"
    
    const links = [
        { href: '/',                        label: 'Home'                       },
        { href: '/Why-Us',                  label: 'Why Us'                     },
        { href: '/Meet-Us',                 label: 'Meet Us'                    },
        { href: '/Hackathons',              label: 'Hackathons'                 },
        { href: '/Projects',                label: 'Projects'                   },
        { href: '/Competitive-Programming', label: 'Competitive Programming'    },
        { href: '/Teen-hack-competition',   label: 'Teen hack competition'      }
      ];
 


      // function for change bg for navbar on scroll
      const [hasScrolled,setHasScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const offset = 0;
          if(window.scrollY > offset){
            setHasScrolled(true);
          }else{
            setHasScrolled(false);
          }
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
          window.removeEventListener('scroll',handleScroll);
        }
      },[]);

      
      return (
    <div className={` ${hasScrolled? "bg-white   bg-opacity-90 ": ""} fixed flex justify-between lg:justify-evenly items-center h-14 w-full text-black py-2 px-14 duration-200 `}>
      
          {/* logo */}
        <Link href="/">
          <Image
            src={HackCLubLogo} 
            alt="My Icon"
            className={`duration-200 ${hasScrolled? "h-28 w-28":"h-32 w-32" }`}
          
          />
        </Link>

        {/* navList for computers and tablets */}
        <div className="hidden lg:flex gap-6 select-none ">
            {links.map((link, index) => (
                  <Link className={LiStyle} href={link.href} key={index}>
                    {link.label} 
                  </Link>
                ))}


   
        </div>


        {/* navList for mobile */}
       <button className=" lg:hidden text-3xl "><CiMenuFries/></button>


    </div>
  )
}

export default Navbar
