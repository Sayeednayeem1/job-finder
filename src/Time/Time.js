import React, { useState, useEffect } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return <div className='text-xl font-bold'>{time}</div>
}

export default Time;