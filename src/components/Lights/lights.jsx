import React from "react";
import './lights.css';
import Light from "../Light/light";

const Lights = ({lights}) => {
    return (
        <div className="lights">
            {lights.map((light) => (
                <Light
                    key={light.name}
                    roomName={light.name}
                    state={light.state}
                />
            ))}
        </div>
    );
};

export default Lights;