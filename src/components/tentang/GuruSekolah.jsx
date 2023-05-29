'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const GuruSekolah = () => {
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
    <div className="relative bg-[#E9EFFF] py-5">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={variantSatu}
        className="mx-auto container py-8"
      >
        <h3 className="text-[#AE39FF] font-medium text-lg lg:text-[20px] mb-5 text-center md:text-left">
          Perkenalkan Anggota Sekolah
        </h3>
        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-0 justify-between mb-8">
          <h3 className="text-[#19245F] font-bold text-lg lg:text-[2.5vw]">
            Guru & Staff Sekolah
          </h3>
          <button class="hover:shadow-lg hover:-translate-y-3 hover:bg-[#fed05b] transition duration-300 inline-flex text-white bg-[#F2B828] border-0 py-2 px-6 focus:outline-none rounded-lg text-lg font-normal">
            Lihat Semua
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          <div class="lg:w-1/4 sm:w-1/2 p-4 w-full">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[289px] h-[424px] overflow-hidden relative mb-5">
                <Image
                  src={'/kepala-sekolah.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="text-center">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Jeannete Ong
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base">
                  Kepala Sekolah
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4 w-full">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[289px] h-[424px] overflow-hidden relative mb-5">
                <Image
                  src={'/kepala-staff.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="text-center">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  John Smith
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base">
                  Kepala Staff
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4 w-full">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[289px] h-[424px] overflow-hidden relative mb-5">
                <Image
                  src={'/guru-matematika.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="text-center">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Lidya M.P
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base">
                  Guru Matematika
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4 w-full">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[289px] h-[424px] overflow-hidden relative mb-5">
                <Image
                  src={'/guru-fisika.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="text-center">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  William
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base">
                  Guru Fisika
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GuruSekolah;
