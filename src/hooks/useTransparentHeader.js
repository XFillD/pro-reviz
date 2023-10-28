import { useState, useEffect } from "react";

const useTransparentHeader = () => {
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setTransparent(false);
            } else {
                setTransparent(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return transparent;
};

export default useTransparentHeader;
