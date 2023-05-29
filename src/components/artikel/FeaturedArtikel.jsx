'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const FeaturedArtikel = () => {
  const variantSatu = {
    hide: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="mx-auto container py-[150px] relative">
      <motion.section
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={variantSatu}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 md:h-[440px] h-[350px] w-full mb-10 lg:mb-0 rounded-[24px] overflow-hidden relative">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={'/sekolah.png'}
              fill={true}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center gap-5">
              <button className="inline-flex font-normal text-white bg-[#AE39FF] border-0 py-2 px-6 focus:outline-none rounded-[100px] text-lg">
                24 Desember 2021
              </button>
              <div className="flex-grow ">
                <Link href={'/artikel/featured'}>
                  <h2 className="text-[#1C2661] leading-10 text-lg title-font font-bold mb-3 lg:text-[2.5vw]">
                    Gotong Royong di Sekolah, Bantu Anak Segera
                    Kembali ke Sekolah
                  </h2>
                </Link>
                <p className="leading-relaxed text-base font-normal">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman sekelas saya. begitupun
                  sebagian besar orang tua, mimpi mereka adalah
                  melihat anaknya kembali ke aktivitas sekolah secara
                  langsung. Orang tua selama ini banyak yang mengaku
                  lelah karena anak-anaknya selama pandemi lebih
                  banyak menghabiskan waktu di. . .
                </p>
                <Link
                  href={'/artikel/featured'}
                  className="mt-3 text-indigo-500 inline-flex items-center font-bold"
                >
                  Baca selengkapnya
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FeaturedArtikel;
