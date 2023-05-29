import GuruSekolah from '@/components/tentang/GuruSekolah';
import HeroTentang from '@/components/tentang/HeroTentang';
import Navbar from '@/components/Navbar';
import ProfilSingkat from '@/components/tentang/ProfilSingkat';
import VideoProfil from '@/components/tentang/VideoProfil';
import React from 'react';

const Tentang = () => {
  return (
    <div className="bg-white">
      <HeroTentang />
      <ProfilSingkat />
      <GuruSekolah />
      <VideoProfil />
    </div>
  );
};

export default Tentang;
