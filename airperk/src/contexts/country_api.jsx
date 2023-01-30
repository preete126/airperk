import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";


const Country_text = createContext(null)
export { Country_text }

function Context_provider({ children }) {
    const API_KEY = "01737c8e19836e1bf91d998232779998"
    const BASE_URL = "https://api.countrylayer.com/v2/"
    const API_URL = `${BASE_URL}all?access_key=${API_KEY}`
    let isMounted = true

    useEffect(() => {
        const fetch = async () => {
            try {
                const request = axios.get(API_URL)
                const result = await request
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        if(isMounted) fetch()
        return ()=>{
            isMounted = false
        }
    }, [])



    return (
        <>
            <Country_text.Provider value={"hey"}>
                {children}
            </Country_text.Provider>
        </>
    );
}

export default Context_provider;