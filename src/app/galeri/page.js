import HeroGaleri from '@/components/HeroGaleri';
import React from 'react';
import Image from 'next/image';
import GaleriCard from '@/components/GaleriCard';

const Galeri = () => {
  const dataGaleri = [
    {
      gambar: '/sekolah.png',
      judul: 'Ruang Sekolah',
      subjudul:
        'Ruangan yang digunakan untuk proses belajar mengajar',
    },
    {
      gambar: '/halaman-sekolah.png',
      judul: 'Halaman Sekolah',
      subjudul: 'Halaman tempat siswa dapat bermain dan berkumpul',
    },
    {
      gambar: '/lorong-sekolah.png',
      judul: 'Lorong Sekolah',
      subjudul: 'Lorong sekolah sebagai jalan penghubung antar kelas',
    },
    {
      gambar: '/belajar-mengajar.png',
      judul: 'Belajar Mengajar',
      subjudul:
        'Kegiatan belajar mengajar yang dilakukan di dalam kelas',
    },
    {
      gambar: '/kelas-bahasa-inggris.png',
      judul: 'Kelas Bahasa Inggris',
      subjudul:
        'Kelas bahasa inggris agar siswa bisa lebih fasih berbahasa inggris',
    },
    {
      gambar: '/karya-murid.png',
      judul: 'Karya Murid',
      subjudul:
        'Hasil karya murid dari kelas prakarya yang dikerjakan secara individu dan kelompok',
    },
    {
      gambar: '/tarik-tambang.png',
      judul: 'Lomba Tarik Tambang',
      subjudul:
        'Kegiatan lomba tarik tambang yang diadakan diacara sekolah',
    },
    {
      gambar: '/pameran-teknologi.png',
      judul: 'Pameran Teknologi',
      subjudul:
        'Pameran alat alat dengan teknologi terbaru agar siswa bisa mengamati',
    },
    {
      gambar: '/kelas-menggambar.png',
      judul: 'Kelas Menggambar',
      subjudul:
        'Kelas agar siswa bisa mengembangkan kemampuan non akademik',
    },
    {
      gambar: '/tugas-kelompok.png',
      judul: 'Tugas Kelompok',
      subjudul:
        'Selain tugas individu, kami juga memberikan tugas kelompok',
    },
    {
      gambar: '/belajar-dan-bermain.png',
      judul: 'Belajar dan Bermain',
      subjudul:
        'Agar siswa tidak jenuh, kami menerapkan metode belajar dan bermain',
    },
    {
      gambar: '/tamasya-sekolah.png',
      judul: 'Tamasya Sekolah',
      subjudul:
        'Tamasya bersama agar siswa lebih akrab dan tidak jenuh',
    },
  ];

  const gambar = [
    '/sekolah.png',
    '/halaman-sekolah.png',
    '/lorong-sekolah.png',
  ];

  const title = [
    'Ruang Sekolah',
    'Halaman Sekolah',
    'Lorong Sekolah',
  ];

  return (
    <div className="bg-white">
      <HeroGaleri />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9B309D"
          fill-opacity="1"
          d="M0,128L26.7,117.3C53.3,107,107,85,160,74.7C213.3,64,267,64,320,90.7C373.3,117,427,171,480,170.7C533.3,171,587,117,640,117.3C693.3,117,747,171,800,208C853.3,245,907,267,960,272C1013.3,277,1067,267,1120,224C1173.3,181,1227,107,1280,69.3C1333.3,32,1387,32,1413,32L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="mx-auto container py-[100px]">
        <h3 className="text-[#4FACF6] text-center text-xl lg:text-[1.5vw]">
          Galeri
        </h3>
        <h1 className="mb-12 font-bold text-center text-[#19245F] text-3xl lg:text-[3vw]">
          Dokumentasi Sekolah
        </h1>
        <div className="flex flex-wrap -m-4">
          {dataGaleri.map((data, index) => (
            <GaleriCard
              key={index}
              gambar={data.gambar}
              title={data.judul}
              subtitle={
                'Ruangan yang digunakan untuk proses belajar mengajar'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeri;
