import React, { useState } from "react";
import './climate.css';
import temp from './images/temp.svg';

const Climate = ({temperature, humidity}) => {
    const [temperatureState, setTemperatureState] = useState(temperature);

    const tempPlus = () => {
        setTemperatureState(temperatureState + 1)
    }
    const tempMinus = () => {
        setTemperatureState(temperatureState - 1)
    }
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperatureState}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={tempPlus}>+</button>
                <button className="button" onClick={tempMinus}>-</button>
            </div>
        </div>
    )
}

export default Climate;