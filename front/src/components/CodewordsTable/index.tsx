import Codeword from '../Codeword';

const CodewordsTable = ({ codewords=[] }: { codewords: string[] }) => {
  return (
    <>
      <section className='flex flex-col bg-black text-center' style={{ minHeight: '100vh' }}>
        <div className='container px-5 pt-6 text-center mx-auto lg:px-20'>
          <div className='sections-list'>
            {!codewords.length ? <p>No Codewords found!</p> : 
              codewords.length > 1 ? <p>Codewords are:</p> : <p>Codeword is:</p>}
            {codewords?.map((codeword: string) => (
              <Codeword codeword={codeword} key={codeword}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CodewordsTable;
