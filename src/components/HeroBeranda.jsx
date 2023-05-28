import React from 'react';
import Image from 'next/image';

const HeroBeranda = () => {
  return (
    <section class="text-white body-font pb-[200px] relative bg-[url('/beranda-background.png')] bg-center bg-[length:100%_100vh] bg-no-repeat h-screen">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="sm:text-4xl lg:text-[3vw] mb-4 font-bold leading-relaxed">
            Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
          </p>
          <p class="mb-8 leading-relaxed font-normal">
            jelajahi semua pengetahuan dan ilmu yang berguna bersama
            kami, untuk kehidupan yang lebih bermanfaat
          </p>
          <div class="flex justify-center font-normal">
            <button class="inline-flex text-white bg-[#AE39FF] border-0 rounded-[100px] transit py-2 px-6 focus:outline-none text-lg hover:bg-[#c677ff] hover:shadow-xl hover:-translate-y-3 transition duration-300">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div class="lg:max-w-[50vw] lg:mt-[100px] lg:w-full md:w-1/2 w-5/6 relative h-[50vh]">
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
