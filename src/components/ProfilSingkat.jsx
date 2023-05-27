import React from 'react';
import Image from 'next/image';

const ProfilSingkat = () => {
  return (
    <div>
      <div className="mx-auto container mt-[50px] pb-[100px] flex flex-col gap-4">
        <h3 className="text-[#4FACF6] text-xl lg:text-[1.5vw]">
          Profil Singkat
        </h3>
        <h1 className="font-bold text-[#19245F] text-3xl lg:text-[3vw]">
          Sekolah Alam
          <br />
          Insan Mulia Berkarya
        </h1>
        <p className="text-[#3A3B41] text-xl lg:text-[1.5vw] leading-9">
          Sekolah kami merupakan sekolah informal yang dikelola untuk
          membantu anak mengembangkan bakat dan kemampuannya. Dengan
          memberikan kurikulum terbaik agar anak bisa memilih minat
          nya dan fokus mengembangkan minat tersebut. Sekolah ini
          didirikan sejak tahun 1989 dan terus berkembang hingga saat
          ini. berlokasikan di jl. Soekarno Hatta Blok J No. 245,
          Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah
          ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami.
          Dengan menjunjung tinggi kejujuran, kedisiplinan dan
          semangat belajar yang tinggi kami berharap bisa terus
          meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.
        </p>
      </div>
      <div className="mx-auto container py-5 relative">
        <h3 className="text-[#AE39FF] text-center font-medium text-lg lg:text-[20px] mb-5">
          Kenapa Memilih Kami
        </h3>
        <h3 className="text-[#19245F] text-center font-medium text-lg lg:text-[2.5vw]">
          Keunggulan Sekolah Kami
        </h3>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-left">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#8362C2] mb-5 flex-shrink-0">
                  <Image
                    alt="book"
                    src={'/book.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Menggunakan Kurikulum Terbaru
                  </h2>
                  <p class="leading-relaxed text-base">
                    Sekolah kami menerapkan kurikulum terbaru saat
                    proses belajar agar siswa mendapatakan materi
                    terbaru sesuai ketentuan
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-left">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#F2B828] text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    alt="clock"
                    src={'/clock.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Efektifitas Waktu Saat Belajar Disekolah
                  </h2>
                  <p class="leading-relaxed text-base">
                    Sekolah kami memiliki waktu belajar yang dirancang
                    agar para siswa tidak jenuh dan dapat menerima
                    pelajaran dengan baik
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-left">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#4FACF6] text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    alt="pen-tool"
                    src={'/pen-tool.svg'}
                    className="text-white object-cover object-center"
                    width={40}
                    height={40}
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Penyaluran Bakat dan Minat
                  </h2>
                  <p class="leading-relaxed text-base">
                    Sekolah kami memiliki berbagai macam kegitan
                    akademik maupun non akademik untuk menyalurkan
                    bakat dan minat siswa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilSingkat;