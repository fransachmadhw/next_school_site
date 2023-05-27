import ArtikelBeranda from '@/components/ArtikelBeranda';
import GaleriSekolah from '@/components/GaleriSekolah';
import HeroBeranda from '@/components/HeroBeranda';
import KeunggulanSekolah from '@/components/KeunggulanSekolah';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroBeranda />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9B309D"
          fill-opacity="1"
          d="M0,288L26.7,256C53.3,224,107,160,160,154.7C213.3,149,267,203,320,192C373.3,181,427,107,480,85.3C533.3,64,587,96,640,112C693.3,128,747,128,800,112C853.3,96,907,64,960,53.3C1013.3,43,1067,53,1120,90.7C1173.3,128,1227,192,1280,197.3C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <KeunggulanSekolah />
      <GaleriSekolah />
      <ArtikelBeranda />
    </div>
  );
}
