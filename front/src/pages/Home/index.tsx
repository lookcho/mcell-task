import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <section className='bg-black '>
        <Header />
        <div className='container px-5 py-12 mx-auto lg:px-20'>
          <div className='flex flex-col flex-wrap pb-6 mb-12 text-white '>
            <h1 className='mb-6 text-3xl font-medium text-white'>Welcome</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
