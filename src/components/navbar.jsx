import inday from '../images/inday-small.png';

const NavBar = () => {
  return (
    <>
      <div className='container mx-auto flex justify-around absolute z-10'>
        <div>
          <img src={inday} alt='img' className='transform scale-50' />
        </div>
        <div className='flex gap-5 items-center text-2xl font-semibold text-white'>
          <h1 className='px-8 py-2 hover:bg-blue-600 transition-all duration-500 ease-in-out cursor-pointer rounded'>
            Home
          </h1>
          <h1 className='px-8 py-2 hover:bg-blue-600 transition-all duration-500 ease-in-out cursor-pointer rounded'>
            Places
          </h1>
          <h1 className='px-8 py-2 hover:bg-blue-600 transition-all duration-500 ease-in-out cursor-pointer rounded'>
            About
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
