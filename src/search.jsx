import { useEffect, useState } from "react";
import searchIcon from './assets/search.png';
// eslint-disable-next-line react/prop-types
const SearchWeather = ({ setCity, setData, setErr, city }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(city)
  }, [city])
  let url = 'https://open-weather13.p.rapidapi.com/city/' + location;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0e325530aamsha4044e9cc0ccae4p152e89jsn6ce970541f6c',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  const search = async () => {

    try {
      let resp = await fetch(url, options);
      if (!resp.ok) {
        throw Error(`can't serve you the data you want `)
      }
      let data = await resp.json();
      setErr(null)
      setData(data)
      setCity(location)
    } catch (err) {
      setErr(err.message);
      setData(null)
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      search()
    }
    } >
      <input type="text"
        className="cityInput"
        placeholder="write your city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="search-icon" onClick={() => search()}>
        <img src={searchIcon} alt="" />
      </div>
    </form>
  );
};

export default SearchWeather;
