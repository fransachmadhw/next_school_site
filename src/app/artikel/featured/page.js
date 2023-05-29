'use client';
import HeroFeatured from '@/components/artikel/HeroFeatured';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Featured = () => {
  const variantSatu = (Variants = {
    hide: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  });

  return (
    <div className="bg-white">
      <HeroFeatured />
      <div className="mx-auto container py-[70px] px-5 lg:px-0">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantSatu}
          className="flex justify-center"
        >
          <div className="relative rounded-[20px] overflow-hidden w-[90%] lg:h-[90vh] h-[350px] mb-[30px] lg:mb-[100px]">
            <Image alt="featured" src={'/sekolah.png'} fill={true} />
          </div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={variantSatu}
          className="flex flex-col gap-4 items-center md:items-start "
        >
          <button class="inline-flex font-normal text-white bg-[#AE39FF] border-0 py-2 px-6 focus:outline-none rounded-[100px] text-lg">
            24 Desember 2021
          </button>
          <h1 className="font-bold lg:leading-[60px] text-lg lg:text-[3vw] text-[#19245F] text-center lg:text-left ">
            Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke
            Sekolah
          </h1>
          <h3 className="text-[#3A3B41] font-light">
            Penulis : Shinta A.P
          </h3>
          <p className="text-[#3A3B41] font-normal text-justify leading-10 text-lg lg:text-[1.5vw]">
            Jika anak kita ditanya apa mimpinya pasti jawabnya saya
            ingin kembali belajar di sekolah. Saya ingin bertemu
            dengan teman-teman sekelas saya. begitupun sebagian besar
            orang tua, mimpi mereka adalah melihat anaknya kembali ke
            aktivitas sekolah secara langsung. Orang tua selama ini
            banyak yang mengaku lelah karena anak-anaknya selama
            pandemi lebih banyak menghabiskan waktu di depan layar
            gawainya bukan hanya untuk belajar namun juga untuk
            bermain game. Belum lagi harus menemani dan membantu
            anak-anak belajar sementara pekerjaan di rumah tidaklah
            sedikit.
            <br />
            <br />
            Namun perlahan demi perlahan sejak Oktober lalu, beberapa
            sekolah di Indonesia sudah mulai menerapkan Pembelajaran
            Tatap Muka atau PTM namun secara terbatas termasuk di
            Purwakarta kota saya tercinta. Seminggu sekali anak-anak
            bersekolah tentunya dengan pembatasan jarak ataupun waktu
            belajar yang mengalami pengurangan.
            <br />
            <br />
            Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru
            di Januari tahun 2022 ini akan mulai melaksanakan
            pembelajaran tatap muka secara terbatas setelah memenuhi
            persyaratan yang ditentukan oleh Pemerintah Daerah dalam
            hal ini Dinas Pendidikan yang beberapa syaratnya antara
            lain tersedianya fasilitas kesehatan, siswa-siswi serta
            civitas sekolah yang sudah di vaksin dan beberapa
            persyaratan lainnya.
            <br />
            <br />
            Karenanya untuk mewujudkan mimpi para siswa yang ingin
            kembali belajar di sekolah, di hari Jumat tanggal 7
            Januari 2022 diselenggarakan kegiatan gotong royong
            membersihkan sekolah yang dilaksanakan oleh perwakilan
            orang tua siswa, perwakilan siswa, perwakilan OSIS dan
            tentunya dilaksanakan juga oleh segenap civitas sekolah
            baik itu Guru maupun Staff Tata Usaha.
            <br />
            <br />
            Kegiatan gotong royong membersihkan sekolah tersebut
            diadakan agar ketika anak kembali ke kelasnya, kelasnya
            sudah dalam keadaan bersih. Seperti yang dikatakan oleh
            perwakilan orang tua dari kelas 7 dan 9 yang mengatakan
            alasan ikut gotong royong membersihkan kelas anaknya agar
            anaknya dapat belajar dengan nyaman dan sehat karena
            lingkungan kelas maupun sekolahnya yang bersih. Selain itu
            mengingat salah satu syarat bisa diadakan pembelajaran
            tatap muka adalah lingkungan pembelajaran yang bersih dan
            sehat.
            <br />
            <br />
            Selain membawa peralatan kebersihan masing-masing, ada
            pula orang tua yang membawa makanan untuk dikonsumsi
            setelah kelas selesai. Terjalin pula kerjasama yang baik
            antar orang tua padahal ada yang tidak kenal awalnya
            begitu juga anak-anak kelas 7 yang akhirnya bisa bertemu
            dengan teman kelasnya secara langsung setelah di semester
            ganjil ini hanya bertemu di pembelajaran online. Semuanya
             hadir demi mewujudkan pembelajaran tatap muka meskipun
            terbatas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
