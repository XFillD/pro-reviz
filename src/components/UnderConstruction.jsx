import revizLogo from "../assets/revizLogo.png";

const UnderConstruction = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:info@pro-reviz.cz";
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-gray-800 w-screen"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center mx-0">
                <img src={revizLogo} alt="Reviz Logo" className="w-1/2 mb-8" />
                <div className="flex flex-col text-center items-center gap-16 mb-64">
                    <h1 className="text-5xl font-bold mb-4 font-roboto bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text">
                        Stránky se připravují...
                    </h1>
                    <p className="text-xl font-bold mb-8 px-4 md:px-0 font-roboto bg-gradient-to-r from-gray-200 to-gray-300 text-transparent bg-clip-text">
                        V případě jakýchkoliv dotazů kontaktujte:{" "}
                        <a
                            href="mailto:info@pro-reviz.cz"
                            className="font-bold text-blue-200 hover:text-blue-100 text-xl"
                        >
                            info@pro-reviz.cz
                        </a>
                    </p>
                    <button
                        className="bg-white text-gray-800 font-bold py-3 px-6 rounded-full text-xl transition-all duration-200 hover:text-white hover:bg-blue-500"
                        onClick={handleContactClick}
                    >
                        Kontaktovat nás
                    </button>
                </div>
            </div>
        </div>
    );
};
export default UnderConstruction;
