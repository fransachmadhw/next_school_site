import React from 'react';
import Image from 'next/image';

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
            <div class="flex flex-col relative">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali
                  ke Sekolah
                </h2>
                <p class="text-[#2E334E] leading-relaxed text-base">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman . . .
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali
                  ke Sekolah
                </h2>
                <p class="text-[#2E334E] leading-relaxed text-base">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya
                  saya ingin kembali belajar di sekolah. Saya ingin
                  bertemu dengan teman-teman . . .
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex flex-col relative">
              <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
                <Image
                  src={'/sekolah.png'}
                  className="object-cover object-center"
                  alt="profile"
                  fill={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali
                  ke Sekolah
                </h2>
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
