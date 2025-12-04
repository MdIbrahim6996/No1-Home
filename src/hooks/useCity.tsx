import { useEffect, useState } from "react";

export default function useCity() {
    const [city, setCity] = useState(null);

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                setCity(data.city);
            })
            .catch(() => setCity(null));
    }, []);

    return city;
}
