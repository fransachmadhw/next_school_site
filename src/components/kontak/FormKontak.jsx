'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const FormKontak = () => {
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
    <motion.section
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={variantSatu}
      className="text-gray-600 body-font relative mt-[-100px] sm:mt-0"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-[45%] md:w-1/2 w-full bg-transparent rounded-lg overflow-hidden sm:mr-10 px-10 py-5 flex flex-col items-start gap-5 relative">
          <div className="flex gap-5 items-center">
            <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#8362C2]">
              <Image
                alt="phone"
                src={'/phone.svg'}
                className="text-white object-cover object-center"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-base text-[#2E334E]">
                (+62) 812 698 15172
              </h3>
              <h3 className="font-semibold text-base text-[#2E334E]">
                (0341) 545 987
              </h3>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#F2B828]">
              <Image
                alt="mail"
                src={'/mail.svg'}
                className="text-white object-cover object-center"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-base text-[#2E334E]">
                contact@sekolahanak.com
              </h3>
              <h3 className="font-semibold text-base text-[#2E334E]">
                info@sekolah.anak.com
              </h3>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#4FACF6]">
              <Image
                alt="location"
                src={'/location.svg'}
                className="text-white object-cover object-center"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-base text-[#2E334E]">
                JL. Soekarno hatta J-12
              </h3>
              <h3 className="font-semibold text-base text-[#2E334E]">
                Malang
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:w-[55%] md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 font-normal">
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nama Anda*"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Anda*"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Nomor Telepon"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Pesan Anda*"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-[#AE39FF] border-0 py-2 px-6 focus:outline-none hover:bg-[#c778ff] rounded-full text-lg">
            Kirim Pesan
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default FormKontak;
