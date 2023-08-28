import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Box = ({ setCity, setErr }) => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const success = (pos) => {
        const crd = pos.coords;
        setLat(crd.latitude)
        setLong(crd.longitude)
        setErr(null)
    }
    const rror = (rr) => {
        setErr(rr.message)
        setCity(null)
    }
    const navg = navigator.geolocation.getCurrentPosition(success, rror)
    console.log(navg);
    const url = `https://us1.locationiq.com/v1/reverse.php?key=pk.54725414d48b742f8f63b86e3f8c708e&lat=${lat}&lon=${long}&format=json`;
    const getLocation = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setCity(result.address.city)
            setErr(null)
        } catch (error) {
            setErr(error)
        }
    }

    return (<button onClick={() => getLocation()}>use my location</button>);
}

export default Box;