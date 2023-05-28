import FormKontak from '@/components/FormKontak';
import HeroKontak from '@/components/HeroKontak';
import React from 'react';

const Kontak = () => {
  return (
    <div className="bg-white">
      <HeroKontak />
      <div className="pt-[100px] container mx-auto text-center">
        <h3 className="text-[#4FACF6] font-normal text-center text-xl lg:text-[1.5vw] mb-4">
          Dapatkan Informasi Lengkap
        </h3>
        <h1 className="mb-12 font-bold text-center text-[#19245F] text-3xl lg:text-[3vw]">
          Kontak Kami
        </h1>
      </div>
      <FormKontak />
    </div>
  );
};

export default Kontak;
