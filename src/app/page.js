import ArtikelBeranda from '@/components/beranda/ArtikelBeranda';
import GaleriSekolah from '@/components/beranda/GaleriSekolah';
import HeroBeranda from '@/components/beranda/HeroBeranda';
import KeunggulanSekolah from '@/components/beranda/KeunggulanSekolah';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroBeranda />
      <KeunggulanSekolah />
      <GaleriSekolah />
      <ArtikelBeranda />
    </div>
  );
}
