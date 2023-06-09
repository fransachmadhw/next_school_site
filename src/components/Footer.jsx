import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font bg-[#FAFAFA]">
      <div class="container px-5 py-24 mx-auto flex md:justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={'/'}
            className="flex title-font text-[#1C2661] font-medium items-center md:justify-start justify-center"
          >
            <Image
              src="/inagata.png"
              alt="Inagata Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </Link>
          <p class="mt-2 text-sm text-gray-500 font-normal">
            Jelajahi semua pengetahuan dan ilmu yang berguna bersama
            kami, untuk kehidupan yang lebih bermanfaat
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-[#1C2661] tracking-widest text-sm mb-3">
              Informasi
            </h2>
            <nav class="list-none mb-10 font-normal">
              <li>
                <Link
                  href={'/artikel'}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href={'/galeri'}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Galeri
                </Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-[#1C2661] tracking-widest text-sm mb-3">
              Tentang
            </h2>
            <nav class="list-none mb-10 font-normal">
              <li>
                <Link
                  href={'/tentang'}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href={'/kontak'}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Hubungi Kami
                </Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 class="title-font font-bold text-[#1C2661] tracking-widest text-sm mb-3">
              Ikuti Kami
            </h2>
            <nav class="list-none mb-10 font-normal text-center md:text-left">
              <li className="flex justify-center lg:justify-start gap-3">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="text-gray-600 hover:text-gray-800">
                  namasekolah
                </a>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="text-gray-600 hover:text-gray-800">
                  namasekolah
                </a>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="text-gray-600 hover:text-gray-800">
                  namasekolah
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-[#FAFAFA]">
        <div class="container mx-auto py-4 px-5 justify-center flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
