"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8 justify-around items-center py-2 md:px-8 sm:px-6 px-4 w-screen text-white bg-brGreen" >
      {
        pathname === '/' ? (<Link className='border border-[#e7e5df] lg:px-4 md:px-3 sm:px-2 px-2 p-1 text-xs lg:text-sm bg-[transparent] rounded-2xl text-[white] hover:bg-[#e7e5df] hover:text-[#0c2510] transition duration-300' href={'/design'} >START DESIGN</Link>) : 
        (
          <Link className='border border-[#e7e5df] p-1 px-4 bg-[transparent] rounded-2xl text-white hover:bg-[#e7e5df] hover:text-[#0c2510] transition duration-300' href={'/'} > Home</Link>
        )
      }

      
      {/* <Link  className='border border-[#e7e5df] p-1 px-4 bg-[transparent] rounded-2xl text-[white]' href={'/design'} >START DESIGNING</Link> */}
      <Promo icon={"shipping"} text={"free delivery"} />
      {/* <Promo icon={"payment"} text={"secure payments"} /> */}
      <SearchBar />
      <div className="flex lg:gap-8 md:gap-5 sm:gap-3 gap-1">
        <Button icon={"user"} href={"/user"} />
        <Button icon={"heart"} href={"/heart"} />
        <Button icon={"shopping_bag"} href={"/bag"} />
      </div>
    </div>
  );
};
const Button = ({ icon, href }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Link href={href}>
        <Image
          src={`/icons/${icon}.svg`}
          width={40}
          height={40}
          alt={icon}
          className="object-cover lg:w-[40px] md:w-[35px] sm:w-[32px] w-[30px]"
        />
      </Link>
    </div>
  );
};

const Promo = ({ icon, text }) => {
  return (
    <div className="flex gap-2 justify-center items-center text-sm sm:text-lg">
      <Image
        src={`/icons/${icon}.svg`}
        width={30}
        height={30}
        alt={icon}
        className="object-cover hidden sm:block"
      />
      <div className="capitalize">{text}</div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="lg:flex md:hidden sm:hidden flex-grow justify-center items-center text-black hidden ">
      <input
        className="p-2 px-6 w-full rounded-l-3xl placeholder:text-gray-500"
        placeholder="Search"
      />
      <div className="p-2 bg-black rounded-r-3xl">
        <Image
          src={`/icons/search.svg`}
          width={25}
          height={25}
          alt="search"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
