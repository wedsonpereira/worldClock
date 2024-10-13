import './App.css';
import { useEffect, useState } from "react";
import moment from "moment-timezone";

function App() {
    const [time, setTime] = useState(new Date());
    const [options, setOptions] = useState([]);
    const [selectedTimeZone, setSelectedTimeZone] = useState("Asia/Kolkata");

    // Set options for the dropdown menu
    useEffect(() => {

        const timeZone=moment.tz.names();

        const renderedOptions = timeZone.map((item, index) => (
            <option key={index} value={item}  >
                {item}
            </option>
        ));
        setOptions(renderedOptions);
    }, []);

    // Update the time every second based on the selected time zone
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    // Handle the dropdown selection change
    const handleSelectChange = (e) => {
        setSelectedTimeZone(e.target.value); // Update the selected time zone
    };

    return (
        <div className="App">
            <div className="c-header">
                <select className="countries" value={selectedTimeZone} onChange={handleSelectChange}>
                    {options}
                </select>
            </div>
            <div className='c-timer'>
                <div className='time-zone'>
                    {/* Display the time for the selected time zone */}
                    <h3>{time.toLocaleTimeString("en-US", { timeZone: selectedTimeZone })}</h3>
                </div>
            </div>
            <div className={"creater"}>
                <p>Developed By: Wedson Ninel Pereira | 14 October 2024</p>
            </div>
        </div>
    );
}

export default App;
