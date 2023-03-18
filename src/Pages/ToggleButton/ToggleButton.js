import React, { useState } from "react";
import Switch from "react-switch";

export const ToggleButton = () => {
    const [isJobSeeker, setIsJobSeeker] = useState(true);

    const handleToggle = () => {
        setIsJobSeeker(!isJobSeeker);
    }

    return (
        <div className="md:text-xl font-bold ml-4 md:ml-0 mt-0 md:mt-2">
            <span>{isJobSeeker ? 'Job Seeker' : 'Job Poster'}</span>
            <Switch onChange={handleToggle} checked={isJobSeeker} />
        </div>
    );
};

