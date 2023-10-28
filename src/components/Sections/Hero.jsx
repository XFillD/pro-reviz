import { useState } from "react";
import Typed from "react-typed";
import revizLogo from "/full-logo.png";

const COLOR_CLASSES = ["text-mainBlue", "text-mainRed", "text-mainYellow"];
const TYPED_STRINGS = ["VODA", "TOPENÍ", "PLYN"];

const Hero = () => {
    const [colorIndex, setColorIndex] = useState(0);

    const getTypedString = (string, index) => {
        const colorClass = COLOR_CLASSES[index % COLOR_CLASSES.length];
        return `<span class="${colorClass}">${string}</span>`;
    };

    return (
        <div className="h-screen isolate sticky top-0">
            {/* <div className="absolute inset-0 bg-hero-img bg-cover overflow-hidden blur-[2px]" aria-hidden="true"/> */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-mainBlue to-mainBlue opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="h-full relative flex flex-col justify-center items-center gap-8 p-10 text-center">
                <img src={revizLogo} alt="Reviz Logo" className="h-16 md:h-28" />

                <h1 className="text-6xl font-bold tracking-tight text-white">NEJLEPŠÍ REVIZE V PRAZE</h1>
                <Typed
                    className="text-4xl font-bold"
                    strings={TYPED_STRINGS.map((string, index) => getTypedString(string, index))}
                    typeSpeed={100}
                    backSpeed={120}
                    loop
                    onComplete={() => setColorIndex(colorIndex + 1)}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-mainYellow to-mainYellow opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;
