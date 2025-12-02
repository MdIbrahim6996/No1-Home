import { useState, useEffect } from "react";
import { apiBaseUrl } from "../utils/constants";

export function useAutoFetch<T>(url: string, intervalMs = 5000) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        let isMounted = true;
        console.log(isMounted);

        const fetchData = async () => {
            try {
                const res = await fetch(apiBaseUrl + url);
                const json = await res.json();
                const newData = json[0] ?? json;

                // Avoid unnecessary re-renders
                setData((prevData: any) => {
                    if (JSON.stringify(prevData) === JSON.stringify(newData)) {
                        return prevData;
                    }
                    return newData; // new reference -> re-render
                });
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();

        const id = setInterval(fetchData, intervalMs);

        return () => {
            isMounted = false;
            clearInterval(id);
        };
    }, [url, intervalMs]);

    return data;
}
