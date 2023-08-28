import humidityIcon from "./assets/humidity.png";
import windIcon from "./assets/wind.png";
// eslint-disable-next-line react/prop-types
const Details = (weat) => {
  let temp = (weat.weat.main.temp - 32) * 5 / 9;
  let imgIcon = '/src/assets/' + weat.weat.weather[0].main + '.png';
  return (
    <div>
      <div className="weather-img">
        <img src={imgIcon} alt="Icon" />
      </div>
      <div className="weather-temp"> {temp.toFixed()}°C</div>
      <div className="weather-location">{weat.weat.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity">{weat.weat.main.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">{weat.weat.wind.speed} km/h</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Details;
