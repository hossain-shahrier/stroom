import CallList from '@/components/calllist/CallList';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">All Recordings</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default PreviousPage;
