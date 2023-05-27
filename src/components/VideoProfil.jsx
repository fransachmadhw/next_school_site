import React from 'react';

const VideoProfil = () => {
  return (
    <div className="w-full py-[100px]">
      <div className="mx-auto container">
        <h3 className="text-[#4FACF6] text-center text-xl lg:text-[1.5vw]">
          Cuplikan Sekolah
        </h3>
        <h1 className="mb-12 font-bold text-center text-[#19245F] text-3xl lg:text-[3vw]">
          Video Profil
        </h1>
        <div className="flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DiN4M6cF78c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoProfil;
