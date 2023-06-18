import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
function useAos(){
    const router = useLocation();
    useEffect(() => {
        Aos.init();
    }, [router.hash]);
}

export default useAos