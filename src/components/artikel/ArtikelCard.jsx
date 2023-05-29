'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const ArtikelCard = (props) => {
  const variantSatu = (Variants = {
    hide: {
      opacity: 0,
      y: 150,
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

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={variantSatu}
      className="lg:w-1/3 sm:w-1/2 p-4 mb-8 text-center md:text-left"
    >
      <div className="flex flex-col relative items-center lg:items-start">
        <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
          <Image
            src={props.gambar}
            className="object-cover object-center"
            alt="profile"
            fill={true}
          />
        </div>
        <div className="flex-grow px-5 md:px-0">
          <Link href={'/artikel/featured'}>
            <h2 className="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
              {props.title}
            </h2>
          </Link>
          <p className="text-[#2E334E] leading-relaxed font-normal text-base mb-3">
            {props.subtitle}
          </p>
          <Link href={'/artikel/featured'}>
            <h2 className="text-indigo-500 title-font font-bold mb-3">
              Baca selengkapnya
            </h2>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtikelCard;
