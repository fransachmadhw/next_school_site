import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header class="text-white body-font bg-gradient-to-r from-[#734192] to-[#9B309D]">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/inagata.svg"
            alt="Inagata Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </div>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} class="mr-5">
            Beranda
          </Link>
          <Link href={'/tentang'} class="mr-5">
            Tentang
          </Link>
          <Link href={'/galeri'} class="mr-5">
            Galeri
          </Link>
          <Link href={'/artikel'} class="mr-5">
            Artikel
          </Link>
          <Link href={'/kontak'} class="mr-5">
            Kontak
          </Link>
        </nav>
        <button class="inline-flex items-center border rounded-[100px] py-1 px-3 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 outline-1 outline-white">
          PPDB
        </button>
      </div>
    </header>
  );
};

export default Navbar;
