const Codeword = ({ codeword }: { codeword: string }) => {
  return (
      <>
        <div className='w-full xl:w-1/4 md:w-1/4'>
          <div className='relative flex flex-col h-full p-8 '>
            <h2 className='mb-4 font-semibold tracking-widest text-white title-font'>
              {codeword}
            </h2>
          </div>
        </div>
      </>
  );
};

export default Codeword;
