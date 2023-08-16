import Plx from "react-plx";
import test from '../../../resources/img/test-papper.avif'

const AboutSection = () => {

  const parallaxTitle = [
    {
      start: '.about-section',
      end: 1300,
      properties: [
        {
          startValue: -100,
          endValue: 100,
          property: "translateY",
        },
      ],
    },
  ];

  const testing4 = [
    {
      start: '540vh',
      duration: '50%',
      // easing: 'easeInOut',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity'
        },
        {
          startValue: 3,
          endValue: 0,
          property: 'scale'
        }
      ]
    }
  ]

  const testing3 = [
    {
      start: '400vh',
      duration: '50%',
      // easing: 'easeInOut',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity'
        },
        {
          startValue: 3,
          endValue: 0,
          property: 'scale'
        }
      ]
    }
  ]

  const testing2 = [
    {
      start: '260vh',
      duration: '30%',
      // easing: 'easeInOut',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity'
        },
        {
          startValue: 3,
          endValue: 0,
          property: 'scale'
        }
      ]
    }
  ]

  const testing = [
    {
      start: '120vh',
      duration: '30%',
      // easing: 'easeInOut',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity'
        },
        {
          startValue: 3,
          endValue: 0,
          property: 'scale'
        }
      ]
    }
  ]

    return(
        <section className="max-w-screen-xl mx-auto pt-10 about-section relative">
            <Plx className="MyAwesomeParallax about-title" parallaxData={parallaxTitle}>
              <h1 className="text-5xl sm:text-7xl lg:text-6xl font-amatic-sc text-center z-10">Kenapa Memilih Kami?</h1>
            </Plx>

            <Plx className="flex justify-center fixed left-0 right-0 top-52 opacity-0" parallaxData={testing}>
              <div className="box w-1/2 p-8">
                <h3 className="font-amatic-sc text-6xl">Harga Terjangkau</h3>
                
                <div>
                  <p className="font-nunito-sans text-lg mt-2">
                    Kami menawarkan layanan berkualitas dengan harga yang sesuai dengan anggaran Anda.
                  </p>
                </div>
              </div>
            </Plx>

            <Plx className="flex justify-center fixed left-0 right-0 top-52 opacity-0" parallaxData={testing2}>
              <div className="box w-1/2 p-8">
                <h3 className="font-amatic-sc text-6xl">Sederhana dan Mudah</h3>
                
                <div>
                  <p className="font-nunito-sans text-lg mt-2">
                    Proses pembuatan website pernikahan dengan kami sangat mudah dan sederhana, tanpa ribet.
                  </p>
                </div>
              </div>
            </Plx>

            <Plx className="flex justify-center fixed left-0 right-0 top-52 opacity-0" parallaxData={testing3}>
              <div className="box w-1/2 p-8">
                <h3 className="font-amatic-sc text-6xl">Hasil Berkualitas Tinggi</h3>
                
                <div>
                  <p className="font-nunito-sans text-lg mt-2">
                    Kami menjamin hasil akhir website pernikahan Anda akan berkualitas tinggi dan memenuhi harapan.
                  </p>
                </div>
              </div>
            </Plx>

            <Plx className="flex justify-center fixed left-0 right-0 top-52 opacity-0" parallaxData={testing4}>
              <div className="box w-1/2 p-8">
                <h3 className="font-amatic-sc text-6xl">Respon Cepat</h3>
                
                <div>
                  <p className="font-nunito-sans text-lg mt-2">
                    Kami siap merespon pertanyaan Anda dan permintaan Anda dengan cepat, memberikan layanan yang responsif
                  </p>
                </div>
              </div>
            </Plx>

            <div className="pb-[6000px]"></div>
        </section>
    )

}

export default AboutSection