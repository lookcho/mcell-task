import { useState } from 'react';
import Header from '../../components/Header';

import ActionId from '../../components/ActionId';

const ActionIds = () => {
  const [actionId, setActionId] = useState('');
  const [searchValue, setSearchValue] = useState('thanks');

  console.log(11, actionId)
  const fetchActionId = async () => {
    // XXX: only submit if the searchValue is not empty, inform the user ...
    const response = await fetch(`http://localhost:3000/api/v1/action/?codeword=${searchValue}`);
    const data = await response.json();
    console.log(22, data)
    setActionId(data.action_id);
  };

  return (
    <>
      <section className='bg-black '>
        <Header />
        <div className='container px-5 pt-6 text-center mx-auto lg:px-20'>
          <h1 className='mb-12 text-3xl font-medium text-white'>Action ID from Codeword</h1>
          <div className='container px-5 py-12 mx-auto lg:px-20'>
            <div className='flex flex-col flex-wrap pb-6 mb-12 text-white '>
              <div className='container flex justify-center items-center mb-6'>
                <div className='relative w-full max-w-xs m-auto'>
                  <input
                    type='text'
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`text-teal-500 z-20 hover:text-teal-700 h-14 w-full max-w-xs m-auto pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none`}
                    placeholder='Type Codeword...'
                  />
                  <button
                    onClick={() => {
                      /^-?[0-9]+$/.test(searchValue) && fetchActionId();
                    }}
                    className='h-10 w-20 text-white rounded bg-teal-500 hover:bg-teal-600'
                  >
                    Load
                  </button>
                </div>
              </div>
              <div className='mainViewport'>
                <ActionId actionId={actionId} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActionIds;
