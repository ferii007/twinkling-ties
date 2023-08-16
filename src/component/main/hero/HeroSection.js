import lottie from "lottie-web";
import weddingAnimation from '../../../resources/lottie-animation/wedding-animation.json';
import scrollDownAnimation from '../../../resources/lottie-animation/scroll-down.json';
import { useEffect } from "react";

const HeroSection = () => {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#wedding-animation"),
            animationData: weddingAnimation,
            renderer: "svg", // "canvas", "html"
            loop: false, // boolean
            autoplay: true, // boolean
          });

        lottie.loadAnimation({
            container: document.querySelector("#scroll-down"),
            animationData: scrollDownAnimation,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
          });
    }, []);
    return(
        <section className="w-screen h-screen relative hero-section">
            <div className="max-w-screen-xl flex flex-col items-center mx-auto lg:block pl-0 pt-12 sm:px-16 lg:px-0 sm:pt-20 lg:pl-48 lg:pt-56">
                <div className="sm:w-2/3 lg:w-1/2 text-center px-10 sm:px-0 sm:text-start">
                    <h1 className="text-5xl sm:text-7xl lg:text-6xl font-amatic-sc">
                        Twinkling
                        <span className="font-shadows-into-light">Ties</span>
                    </h1>

                    <h5 className="text-md sm:text-xl font-nunito-sans font-semibold mt-3 sm:mt-5">
                        Kilauan cinta, ikatan abadi. Bergabunglah dalam momen indah perjalanan istimewa kami.
                    </h5>
                </div>

                <div className="w-full lg:w-1/2 lg:absolute top-0 sm:-mt-16 lg:-mt-0 right-5">
                    <span className="w-full" id="wedding-animation"></span>
                </div>

                <div className="w-16 sm:w-24 lg:w-16 lg:mx-32 mt-5 opacity-40">
                    <span className="w-full" id="scroll-down"></span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection