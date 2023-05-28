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
