'use client';

import MeetingTypeList from '@/components/meeting-type-list/MeetingTypeList';
import RunningTimeAndDate from '@/components/time-date/RunningTimeAndDate';
import { useGetCalls } from '@/hooks/useGetCalls';
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import React from 'react';

const Home = () => {
  const calls = useGetCalls();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          {calls.upcomingCalls && calls.upcomingCalls.length > 0 ? (
            <p className="glassmorphism max-w-[400px] rounded-full py-1 text-center text-base font-normal">
              Upcoming Meeting at:{' '}
              {calls.upcomingCalls[0].state.startsAt?.toLocaleString()}
            </p>
          ) : (
            <p className="glassmorphism max-w-[250px] rounded-full py-1 text-center text-base font-normal">
              No upcoming meeting
            </p>
          )}

          <RunningTimeAndDate />
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
