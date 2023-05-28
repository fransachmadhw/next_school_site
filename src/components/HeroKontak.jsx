import React from 'react';
import Image from 'next/image';

const HeroKontak = () => {
  return (
    <section class="text-white body-font bg-[url('/beranda-background.png')] bg-center bg-[length:100%_100vh] bg-no-repeat h-screen relative">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col gap-[3px]">
            <h1 className="sm:text-4xl lg:text-[3vw] mb-4 font-bold">
              Hubungi Kami
            </h1>
          </div>
          <p class="mb-8 leading-relaxed">
            Kontak sekolah kami agar anda bisa terhubung dengan kami
          </p>
        </div>
        <div class="lg:max-w-[40vw] lg:mt-[100px] lg:w-full md:w-1/2 w-5/6 relative h-[50vh]">
          <Image
            class="object-cover object-center absolute bottom-0"
            alt="hero"
            src="/kontak-cover.png"
            width={1200}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroKontak;