import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Date_Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="text-lg text-gray-300 bg-[#296799] p-2 rounded-md">
      {format(currentDateTime, 'EEEE, MMMM d, yyyy')} | {format(currentDateTime, 'h:mm a')}
    </div>
  );
};

export default Date_Time;
