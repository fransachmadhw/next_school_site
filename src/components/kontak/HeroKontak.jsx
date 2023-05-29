'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroKontak = () => {
  const variantSatu = (Variants = {
    hide: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  });

  const variantDua = (Variants = {
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
  });

  return (
    <section className="text-white body-font bg-[url('/beranda-background.png')] bg-center bg-[length:100%_100vh] bg-no-repeat h-screen relative">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantSatu}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <div className="flex flex-col gap-[3px]">
            <h1 className="sm:text-4xl lg:text-[3vw] mb-4 font-bold">
              Hubungi Kami
            </h1>
          </div>
          <p className="mb-8 leading-relaxed font-normal">
            Kontak sekolah kami agar anda bisa terhubung dengan kami
          </p>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantDua}
          className="lg:max-w-[40vw] lg:mt-[100px] mt-[-100px] lg:w-full md:w-1/2 w-5/6 relative h-[50vh]"
        >
          <Image
            className="object-cover object-center absolute bottom-0"
            alt="hero"
            src="/kontak-cover.png"
            width={1200}
            height={1000}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroKontak;
