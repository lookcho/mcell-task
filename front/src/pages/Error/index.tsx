import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const ErrorPage = () => {
  return (
    <section className='bg-black '>
      <Header />

      <div className=' flex items-center justify-center w-screen h-screen bg-black '>
        <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-blue-600 text-9xl'>404</h1>
            <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span className='text-red-500'>Oops!</span> Page not found
            </h6>
            <p className='mb-8 text-center text-gray-500 md:text-lg'>A A A-a! No can do.</p>
            <Link to='/' className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'>
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
