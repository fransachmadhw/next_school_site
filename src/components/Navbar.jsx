'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [berandaActive, setBerandaActive] = React.useState(true);
  const [tentangActive, setTentangActive] = React.useState(false);
  const [galeriActive, setGaleriActive] = React.useState(false);
  const [artikelActive, setArtikelActive] = React.useState(false);
  const [kontakActive, setKontakActive] = React.useState(false);

  return (
    <header className="text-white body-font bg-gradient-to-r from-[#734192] to-[#9B309D]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/inagata.svg"
            alt="Inagata Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-normal">
          <Link
            href={'/'}
            className={`mr-5 ${berandaActive && 'font-bold'}`}
            onClick={() => {
              setBerandaActive(true);
              setTentangActive(false);
              setGaleriActive(false);
              setArtikelActive(false);
              setKontakActive(false);
            }}
          >
            Beranda
          </Link>
          <Link
            href={'/tentang'}
            className={`mr-5 ${tentangActive && 'font-bold'}`}
            onClick={() => {
              setBerandaActive(false);
              setTentangActive(true);
              setGaleriActive(false);
              setArtikelActive(false);
              setKontakActive(false);
            }}
          >
            Tentang
          </Link>
          <Link
            href={'/galeri'}
            className={`mr-5 ${galeriActive && 'font-bold'}`}
            onClick={() => {
              setBerandaActive(false);
              setTentangActive(false);
              setGaleriActive(true);
              setArtikelActive(false);
              setKontakActive(false);
            }}
          >
            Galeri
          </Link>
          <Link
            href={'/artikel'}
            className={`mr-5 ${artikelActive && 'font-bold'}`}
            onClick={() => {
              setBerandaActive(false);
              setTentangActive(false);
              setGaleriActive(false);
              setArtikelActive(true);
              setKontakActive(false);
            }}
          >
            Artikel
          </Link>
          <Link
            href={'/kontak'}
            className={`mr-5 ${kontakActive && 'font-bold'}`}
            onClick={() => {
              setBerandaActive(false);
              setTentangActive(false);
              setGaleriActive(false);
              setArtikelActive(false);
              setKontakActive(true);
            }}
          >
            Kontak
          </Link>
        </nav>
        <button className="inline-flex items-center border rounded-[100px] py-1 px-6 font-normal focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 outline-1 outline-white">
          PPDB
        </button>
      </div>
    </header>
  );
};

export default Navbar;
