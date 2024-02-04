const ActionId = ({ actionId }: { actionId: string }) => {
  return (
    <>
      <section className='flex flex-col bg-black text-center' style={{ minHeight: '100vh' }}>
        <div className='container px-5 pt-6 text-center mx-auto lg:px-20'>
          <div className='sections-list'>
            {actionId ? <p>Action ID is: {actionId}</p> : <p>No Action ID found!</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default ActionId;
