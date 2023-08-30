import { useState } from 'react';
import Details from './details';
import SearchWeather from './search';
import Box from './box';


const WeatherApp = () => {
    const [city, setCity] = useState('')
    const [err, setErr] = useState(null)
    // console.log(city);
    const [data, setData] = useState(null);
    return (
        <div className='all'>
            <div className="container">
                <div>
                    <SearchWeather setCity={setCity} setErr={setErr} setData={setData} city={city} />
                    {err && <div className='ErrMsg'>{err + city}!!</div>}
                    {data && <Details weat={data} />}
                    <div className="userBox">
                        <Box setCity={setCity} setErr={setErr} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeatherApp;