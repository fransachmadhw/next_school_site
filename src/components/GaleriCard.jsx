import React from 'react';
import Image from 'next/image';

const GaleriCard = (props) => {
  return (
    <div class="lg:w-1/3 sm:w-1/2 p-4 mb-8">
      <div class="flex flex-col relative items-center">
        <div className="rounded-[24px] w-[360px] h-[320px] overflow-hidden relative mb-5">
          <Image
            src={props.gambar}
            className="object-cover object-center"
            alt="profile"
            fill={true}
          />
        </div>
        <div class="flex-grow text-center">
          <h2 class="text-gray-900 text-lg lg:text-[1.5vw] title-font font-bold mb-3">
            {props.title}
          </h2>
          <p class="text-[#2E334E] leading-relaxed text-base font-normal">
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaleriCard;
