import MeetingTypeList from '@/components/meeting-type-list/MeetingTypeList';
import RunningTimeAndDate from '@/components/time-date/RunningTimeAndDate';
import React from 'react';

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded-full py-1 text-center text-base font-normal">
            Upoming Meeting at: 12.30px
          </h2>
          <RunningTimeAndDate />
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
