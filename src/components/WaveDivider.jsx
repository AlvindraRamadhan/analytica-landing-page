const WaveDivider = () => {
  return (
    // Latar belakang div ini harus sama dengan section DI ATASNYA (Hero)
    // yaitu bg-light-bg untuk mode terang dan bg-dark-text untuk mode gelap.
    <div className="bg-light-bg dark:bg-dark-text">
      {/* Gelombang untuk Light Mode (Terlihat di mode terang, tersembunyi di mode gelap) */}
      <div className="block dark:hidden">
        {/* Kode SVG terang Anda ditempelkan di sini */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF" // Diubah menjadi putih agar menyatu dengan section Fitur di bawahnya
            fillOpacity="1"
            d="M0,160L30,181.3C60,203,120,245,180,250.7C240,256,300,224,360,202.7C420,181,480,171,540,186.7C600,203,660,245,720,234.7C780,224,840,160,900,122.7C960,85,1020,75,1080,96C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Gelombang untuk Dark Mode (Tersembunyi di mode terang, terlihat di mode gelap) */}
      <div className="hidden dark:block">
        {/* Kode SVG gelap Anda ditempelkan di sini */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1E293B" // Diubah agar menyatu dengan section Fitur (dark:bg-dark-text)
            fillOpacity="1"
            d="M0,160L30,181.3C60,203,120,245,180,250.7C240,256,300,224,360,202.7C420,181,480,171,540,186.7C600,203,660,245,720,234.7C780,224,840,160,900,122.7C960,85,1020,75,1080,96C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveDivider;
