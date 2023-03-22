import React from "react";
import Lights from "../Lights/lights";
import Climate from "../Climate/climate";
import Blinds from "../Blinds/blinds";
import Energy from "../Energy/energy";
import './dashboard.css';

const Dashboard = ({data}) => (
    <main className="dashboard">
        <Lights 
            key={data.lights} 
            lights={data.lights} 
        />
        <Climate 
            temperature={data.climate.temperature} 
            humidity={data.climate.humidity} 
        />
        <Blinds 
            state={data.blinds} 
        />
        <Energy 
            electricity={data.energyConsumption.electricity} 
            water={data.energyConsumption.water} 
        />
    </main>
)

export default Dashboard;