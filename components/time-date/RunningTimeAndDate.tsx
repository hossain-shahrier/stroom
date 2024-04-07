'use client';
import React, { useState, useEffect } from 'react';

interface TimeDateProps {}

const RunningTimeAndDate: React.FC<TimeDateProps> = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [isRunning, setIsRunning] = useState(true); // Flag for running state

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        const now = new Date();
        setTime(
          now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        );
        setDate(
          now.toLocaleDateString([], {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]); // Dependency on isRunning for conditional update

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
      </div>
      <p className="text-lg font-medium text-sky-1 lg:text2xl">{date}</p>
    </div>
  );
};

export default RunningTimeAndDate;
