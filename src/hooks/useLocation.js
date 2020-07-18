import { useState, useEffect } from "react";

export default () => {
    const [lat, setLat] = useState(null);

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
            },
            (error) => {
                setErrorMessage(error.message);
            }
        );
    }, []);
    return [lat, errorMessage];
};
