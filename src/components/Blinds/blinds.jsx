import React, {useState} from "react";
import './blinds.css';
import blindsClosed from './images/blinds-closed.svg';
import blindsOpen from './images/blinds-open.svg';

const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(state);

    const openBlinds = () => {
        setBlindsState('open');
    }
    const closeBlinds = () => {
        setBlindsState('closed');
    }
    return(
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsState == 'open' ? blindsOpen : blindsClosed}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={blindsState == 'open' ? 'button button--active' : 'button'} onClick={openBlinds}>Otevřeno</button>
                <button className={blindsState == 'closed' ? 'button button--active' : 'button'} onClick={closeBlinds}>Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;