import { useState } from 'react';
import Header from '../../components/Header';

import CodewordsTable from '../../components/CodewordsTable';

const Codewords = () => {
  const [codewords, setCodewords] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('5001');

  const fetchCodewords = async () => {
    // XXX: only submit if the searchValue is not empty, inform the user ...
    if (searchValue) {
        const response = await fetch(`http://localhost:3000/api/v1/codeword/?action_id=${searchValue}`);
        const data = await response.json();
        setCodewords(data.codewords);
    } else {
        setCodewords([]);
    }
  };

  return (
    <section className='bg-black '>
      <Header />
      <div className='container px-5 pt-6 text-center mx-auto lg:px-20'>
        <h1 className='mb-12 text-3xl font-medium text-white'>Codewords from Action ID</h1>
        <div className='container px-5 py-12 mx-auto lg:px-20'>
          <div className='flex flex-col flex-wrap pb-6 mb-12 text-white '>
            <div className='container flex justify-center items-center mb-6'>
              <div className='relative w-full max-w-xs m-auto'>
                <input
                  type='text'
                  onChange={(e) => setSearchValue(e.target.value)}
                  className={`text-teal-500 z-20 hover:text-teal-700 h-14 w-full max-w-xs m-auto pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none`}
                  placeholder='Type Action ID...'
                />
                <button
                  onClick={() => fetchCodewords()}
                  className='h-10 w-20 text-white rounded bg-teal-500 hover:bg-teal-600'
                >
                  Load
                </button>
              </div>
            </div>
            <div className='mainViewport'>
              <CodewordsTable codewords={codewords} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Codewords;
