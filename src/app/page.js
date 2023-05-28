import ArtikelBeranda from '@/components/ArtikelBeranda';
import GaleriSekolah from '@/components/GaleriSekolah';
import HeroBeranda from '@/components/HeroBeranda';
import KeunggulanSekolah from '@/components/KeunggulanSekolah';
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
