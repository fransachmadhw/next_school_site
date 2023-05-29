import ArtikelCard from '@/components/artikel/ArtikelCard';
import FeaturedArtikel from '@/components/artikel/FeaturedArtikel';
import HeroArtikel from '@/components/artikel/HeroArtikel';
import React from 'react';

const Artikel = () => {
  const dataArtikel = [
    {
      gambar: '/artikel1.png',
      judul: 'Teknik Belajar Tepat Agar Anak Tak Mudah Bosan',
      subjudul:
        'Menggunakan teknik belajar yang tepat sangatlkah penting agar anak bisa menyerap materi dengan baik namun tetap...',
    },
    {
      gambar: '/artikel2.png',
      judul: 'Metode Tanya Jawab Untuk Evaluasi Materi Di Sekolah',
      subjudul:
        'Untuk mengetahui seberapa paham anak tentang materi yang diberikan, guru biasa mengadakan sesi tanya jawab agar...',
    },
    {
      gambar: '/artikel3.png',
      judul: 'Berlibur Bersama Agar Anak Tidak Jenuh',
      subjudul:
        'Anak tentunya akanjenuh jika terus menerus belajar, mereka juga perlu berlibur sejenak apalagi bersama dengan teman...',
    },
    {
      gambar: '/artikel4.png',
      judul:
        'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
      subjudul:
        'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman...',
    },
    {
      gambar: '/artikel5.png',
      judul: 'Permainan Yang Bagus Untuk Perkembangan Anak',
      subjudul:
        'Selain belajar, anak-anak tentunya perlu untuk bermain, namun permainan apasaja kah yang dapat membantu perkembangan...',
    },
    {
      gambar: '/artikel6.png',
      judul: 'Di Sekolah Belajar, Di Rumah pun Apakah Harus Belajar?',
      subjudul:
        'Jika anak merasa dirinya sudah cukup hanya dengan belajar disekolah, kita sebagai orang tua harus bisa memberi...',
    },
    {
      gambar: '/artikel7.png',
      judul: 'Tetap Menjaga Kesehatan Anak Selama Di Sekolah',
      subjudul:
        'Virus dan bakteri tentu ada dimana saja, oleh sebab itu kita perlu memperhatikan kesehatan anak agar tidak mudah tertular...',
    },
    {
      gambar: '/artikel8.png',
      judul: 'Mewarnai Membantu Meningkatkan Kreativitas Anak?',
      subjudul:
        'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa...',
    },
    {
      gambar: '/artikel9.png',
      judul: 'Perlukah Belajar Menggambar Dan Mewarnai Di Sekolah?',
      subjudul:
        'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa...',
    },
  ];

  return (
    <div className="bg-white">
      <HeroArtikel />
      <FeaturedArtikel />
      <div className="mx-auto container">
        <div className="flex flex-wrap -m-4 pb-[100px]">
          {dataArtikel.map((data, index) => (
            <ArtikelCard
              key={index}
              gambar={data.gambar}
              title={data.judul}
              subtitle={data.subjudul}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
