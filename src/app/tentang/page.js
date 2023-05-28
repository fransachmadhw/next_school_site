import GuruSekolah from '@/components/GuruSekolah';
import HeroTentang from '@/components/HeroTentang';
import Navbar from '@/components/Navbar';
import ProfilSingkat from '@/components/ProfilSingkat';
import VideoProfil from '@/components/VideoProfil';
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
