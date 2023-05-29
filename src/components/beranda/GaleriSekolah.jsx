'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const GaleriSekolah = () => {
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
      <div className="absolute top-20 -left-10 w-[100px] h-[100px]">
        <Image
          alt="blob2"
          src={'/blob2.png'}
          className=""
          width={100}
          height={100}
        />
      </div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={variantSatu}
        className="mx-auto container py-8 text-center md:text-left"
      >
        <h3 className="text-[#AE39FF] font-medium text-lg lg:text-[20px] mb-5">
          Galeri
        </h3>
        <div className="flex flex-col items-center gap-5 md:gap-0 md:flex-row justify-between mb-8">
          <h3 className="text-[#19245F] font-bold text-lg lg:text-[2.5vw]">
            Dokumentasi Sekolah
          </h3>
          <button class="inline-flex text-white font-normal bg-[#F2B828] border-0 py-2 px-6 focus:outline-none rounded-lg text-lg hover:shadow-lg hover:-translate-y-3 hover:bg-[#fed05b] transition duration-300">
            Lihat Semua
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center md:items-start">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/belajar-mengajar.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow text-center md:text-left">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Belajar Mengajar
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base px-5 md:px-0">
                  Kegiatan belajar mengajar diadakan setiap hari Senin
                  hingga Jum`at
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center md:items-start">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/sharing-session.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow text-center md:text-left">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Sharing Session
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base px-5 md:px-0">
                  Kegiatan menukar pendapat dan pikiran antara guru
                  dan siswa
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center md:items-start">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/presentasi-project.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow text-center md:text-left">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Presentasi Proyek
                </h2>
                <p class="text-[#2E334E] font-normal leading-relaxed text-base px-5 md:px-0">
                  Kegiatan menunjukan hasil pekerjaan dari guru untuk
                  melatih keberanian
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GaleriSekolah;
