import Plx from "react-plx";
import { parallaxTitle, pointCard1, pointCard2, pointCard3, pointCard4 } from "../../../helpers/parallaxProp";

const WhyUsSection = () => {

    return(
      <section className="max-w-screen-xl mx-auto pt-10 relative">
        <Plx className="MyAwesomeParallax fixed -top-10 left-0 right-0" parallaxData={parallaxTitle}>
          <h1 className="text-5xl sm:text-7xl lg:text-6xl font-amatic-sc text-center z-10">Kenapa Memilih Kami?</h1>
        </Plx>

        <div className="flex justify-between w-full fixed left-0 right-0 top-20">
          <div className="relative w-1/2">
              <div className="absolute left-44 main-point-card">
                <Plx className="content-point-card-1 py-12 opacity-0" parallaxData={pointCard1}>
                  <h1 className="content-card-title">Harga Terjangkau</h1>
                  <p className="content-card-desc">Kami menyediakan layanan berkualitas dengan harga yang sangat ramah.</p>
                </Plx>
              </div>

              <div className={`absolute left-[28.5rem] main-point-card`}>
                <Plx className="content-point-card-3 py-12 opacity-0" parallaxData={pointCard3}>
                  <h1 className="content-card-title">Hasil Berkualitas</h1>
                  <p className="content-card-desc">Kami menjamin website pernikahan Anda akan berkualitas dan memuaskan.</p>
                </Plx>
              </div>
          </div>

          <div className="relative w-1/2">
              <div className={`absolute right-44 main-point-card`}>
                <Plx className="content-point-card-2 py-12 opacity-0" parallaxData={pointCard2}>
                  <h1 className="content-card-title">Efisien dan Cepat</h1>
                  <p className="content-card-desc">Kami menyederhanakan proses pembuatan website sehingga Anda dapat lebih fokus pada persiapan pernikahan.</p>
                </Plx>
              </div>

              <div className={`absolute left-0 main-point-card`}>
                <Plx className="content-point-card-1 py-12 opacity-0" parallaxData={pointCard4}>
                  <h1 className="content-card-title">Desain Elegan</h1>
                  <p className="content-card-desc">Kami menawarkan desain website yang elegan dan menawan untuk mangabadikan momen bahagia Anda</p>
                </Plx>
              </div>
          </div>
        </div>

        <div className="pb-[6000px]"></div>
      </section>
    )

}

export default WhyUsSection