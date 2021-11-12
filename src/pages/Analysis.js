import react from "react";
import "./styles.css"

const Analysis = () => {
    return(
        <div className = "accidentImg">
            <div className = "title">
                Analysis
            </div>
            <div>
                <img width = "80%" src = "analysis.png" />
            </div>
            <div className = "subtitle">
                The color red denotes the accidents frequency. The redder the color, the more accidents.
            </div>
            <div className = "subtitle">
                The color purple denotes the vehicle speed. The more purple the color, the more the vehicle speed.
            </div>
            <div className = "tips">
                1. From the data tab, we can find that most accidents are road incidents. Vehicle speed is one of the most important facts in road incidents.
            </div>
            <div className = "tips">
                2. From the figure above, there are several areas where accident is more frequent than others, and the average speed of vehicles are faster than other roads. We advise that more warning signs be set up in these areas or roads to remind drivers to take care and slow down. 
            </div>
        </div>
    )
};

export default Analysis