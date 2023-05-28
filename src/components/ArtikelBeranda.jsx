import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArtikelBeranda = () => {
  return (
    <div className="relative p-5 mt-[70px] pb-[200px]">
      <div className="mx-auto container">
        <h2 className="text-center text-[#4FACF6] text-2xl mb-3">
          Artikel Seputar Pendidikan
        </h2>
        <h1 className="text-center text-[#1C2661] font-bold text-2xl lg:text-[3.2vw] mb-12">
          Artikel Terbaru
        </h1>
        <div className="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-visible relative mb-10">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center rounded-[24px]"
                  alt="profile"
                  fill={true}
                />
                <div className="text-white text-[16px] absolute -bottom-5 translate-x-[50%] bg-[#AE39FF] rounded-[100px] py-2 px-6">
                  12 Desember 2021
                </div>
              </div>
              <div class="flex-grow">
                <Link href={'/artikel/featured'}>
                  <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                    Gotong Royong di Sekolah, Bantu Anak Segera
                    Kembali ke Sekolah
                  </h2>
                </Link>
                <p class="text-[#2E334E] leading-relaxed text-base">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman . . .
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-visible relative mb-10">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center rounded-[24px]"
                  alt="profile"
                  fill={true}
                />
                <div className="text-white text-[16px] absolute -bottom-5 translate-x-[50%] bg-[#AE39FF] rounded-[100px] py-2 px-6">
                  12 Desember 2021
                </div>
              </div>
              <div class="flex-grow">
                <Link href={'/artikel/featured'}>
                  <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                    Gotong Royong di Sekolah, Bantu Anak Segera
                    Kembali ke Sekolah
                  </h2>
                </Link>
                <p class="text-[#2E334E] leading-relaxed text-base">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman . . .
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative items-center">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-visible relative mb-10">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center rounded-[24px]"
                  alt="profile"
                  fill={true}
                />
                <div className="text-white text-[16px] absolute -bottom-5 translate-x-[50%] bg-[#AE39FF] rounded-[100px] py-2 px-6">
                  12 Desember 2021
                </div>
              </div>
              <div class="flex-grow">
                <Link href={'/artikel/featured'}>
                  <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                    Gotong Royong di Sekolah, Bantu Anak Segera
                    Kembali ke Sekolah
                  </h2>
                </Link>
                <p class="text-[#2E334E] leading-relaxed text-base">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman . . .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelBeranda;
