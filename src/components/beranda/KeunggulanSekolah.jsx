'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const KeunggulanSekolah = () => {
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
    <div className="relative pt-[100px]">
      <div className="absolute bottom-30 right-0 w-[100px] h-[100px]">
        <Image
          alt="blob1"
          src={'/blob1.png'}
          className=""
          width={100}
          height={100}
        />
      </div>
      <div className="mx-auto container py-5 relative text-center md:text-left">
        <h3 className="text-[#AE39FF] font-medium text-lg lg:text-[20px] mb-5">
          Kenapa Memilih Kami
        </h3>
        <h3 className="text-[#19245F] font-medium text-lg lg:text-[2.5vw]">
          Keunggulan Sekolah Kami
        </h3>
        <motion.section
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantSatu}
          className="text-gray-600 body-font"
        >
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center md:text-left items-center md:items-start">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#8362C2] mb-5 flex-shrink-0">
                  <Image
                    alt="book"
                    src={'/book.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-semibold mb-3">
                    Menggunakan Kurikulum Terbaru
                  </h2>
                  <p class="leading-relaxed text-base font-normal">
                    Sekolah kami menerapkan kurikulum terbaru saat
                    proses belajar agar siswa mendapatakan materi
                    terbaru sesuai ketentuan
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center md:text-left items-center md:items-start">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#F2B828] text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    alt="clock"
                    src={'/clock.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font mb-3 font-semibold">
                    Efektifitas Waktu Saat Belajar Disekolah
                  </h2>
                  <p class="leading-relaxed text-base font-normal">
                    Sekolah kami memiliki waktu belajar yang dirancang
                    agar para siswa tidak jenuh dan dapat menerima
                    pelajaran dengan baik
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center md:text-left items-center md:items-start">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#4FACF6] text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    alt="pen-tool"
                    src={'/pen-tool.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-semibold mb-3">
                    Penyaluran Bakat dan Minat
                  </h2>
                  <p class="leading-relaxed text-base font-normal">
                    Sekolah kami memiliki berbagai macam kegitan
                    akademik maupun non akademik untuk menyalurkan
                    bakat dan minat siswa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantSatu}
          className="text-gray-600 body-font"
        >
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                src={'/teacher-student.png'}
                width={500}
                height={500}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#1C2661]">
                Tentang Kami
              </h1>
              <p class="mb-8 leading-relaxed font-normal">
                Sekolah Kami merupakan sekolah informal yang dikelola
                untuk membantu anak mengembangkan bakat dan
                kemampuannya. Dengan memberikan kurikulum terbaik agar
                anak bisa memilih minat nya dan fokus mengembangkan
                minat tersebut. Sekolah ini didirikan sejak tahun 1989
                dan terus berkembang hingga saat ini.
              </p>
              <div class="flex justify-center font-normal">
                <button class="inline-flex text-white bg-[#AE39FF] border-0 py-2 px-6 focus:outline-none rounded-[100px] text-lg hover:shadow-xl hover:-translate-y-3 transition duration-300 hover:bg-[#bf6dfa]">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KeunggulanSekolah;
