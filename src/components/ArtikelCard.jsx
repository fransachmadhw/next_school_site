import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArtikelCard = (props) => {
  return (
    <div class="lg:w-1/3 sm:w-1/2 p-4 mb-8">
      <div class="flex flex-col relative items-center lg:items-start">
        <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
          <Image
            src={props.gambar}
            className="object-cover object-center"
            alt="profile"
            fill={true}
          />
        </div>
        <div class="flex-grow">
          <Link href={'/artikel/featured'}>
            <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
              {props.title}
            </h2>
          </Link>
          <p class="text-[#2E334E] leading-relaxed font-normal text-base mb-3">
            {props.subtitle}
          </p>
          <Link href={'/artikel/featured'}>
            <h2 class="text-indigo-500 title-font font-bold mb-3">
              Baca selengkapnya
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelCard;
