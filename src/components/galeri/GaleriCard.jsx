'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const GaleriCard = (props) => {
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
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={variantSatu}
      className="lg:w-1/3 sm:w-1/2 p-4 mb-8"
    >
      <div class="flex flex-col relative items-center">
        <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
          <Image
            src={props.gambar}
            className="object-cover object-center"
            alt="profile"
            fill={true}
          />
        </div>
        <div class="flex-grow text-center">
          <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
            {props.title}
          </h2>
          <p class="text-[#2E334E] leading-relaxed text-base font-normal">
            {props.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GaleriCard;
