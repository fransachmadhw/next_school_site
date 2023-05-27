import React from 'react';
import Image from 'next/image';

const HeroBeranda = () => {
  return (
    <section class="text-white body-font bg-gradient-to-b from-[#734192] to-[#9B309D] relative">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col gap-[3px]">
            <h1 className="sm:text-4xl lg:text-[3vw] mb-4 font-bold">
              Tuntut Ilmu Untuk Masa
            </h1>
            <h1 className="sm:text-4xl lg:text-[3vw] mb-4 font-bold">
              Depan Yang Lebih Baik
            </h1>
          </div>
          <p class="mb-8 leading-relaxed">
            jelajahi semua pengetahuan dan ilmu yang berguna bersama
            kami, untuk kehidupan yang lebih bermanfaat
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-[#AE39FF] border-0 rounded-[100px] py-2 px-6 focus:outline-none text-lg">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative h-[50vh]">
          <Image
            class="object-cover object-center absolute bottom-0"
            alt="hero"
            src="/beranda-cover.png"
            width={1200}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBeranda;
