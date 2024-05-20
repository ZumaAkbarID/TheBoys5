import { useState } from "react";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const Month = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    return (
        <>
            <button onClick={handlePrevMonth}>
                <i className="bx bx-chevron-left"></i>
            </button>
            <small>{months[currentMonth]}</small>
            <button onClick={handleNextMonth}>
                <i className="bx bx-chevron-right"></i>
            </button>
        </>
    );
};

export default Month;
