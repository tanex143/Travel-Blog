import places from '../images/places.jpg';
import uno from '../images/uno.jpg';
import dos from '../images/dos.jpg';
import tris from '../images/tris.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavBar from './../components/navbar';
import Footer from './../components/footer';

const Places = () => {
  return (
    <>
      <NavBar />
      <div className='h-50vh relative text-white'>
        <img src={places} alt='sea' className='w-full h-50vh' />
        <div className='absolute top-0 left-0 text-center w-full h-full grid grid-cols-5'>
          <div className='col-start-2 col-span-3 my-auto glass p-5 rounded'>
            <h1 className='text-3xl font-semibold adventure-font tracking-wide italic'>
              IT IS NICE FINDING THAT PLACE WHERE YOU CAN JUST GO, ENJOY AND
              RELAX
            </h1>
            <form className='py-5'>
              <input
                type='text'
                placeholder='Search. . .'
                className='w-4/6 py-1 text-lg align-middle rounded-tl rounded-bl indent text-black outline-none focus:border-blue-500 border-2'
              />
              <button className='bg-blue-500 text-sm py-2 px-8 align-middle rounded-tr rounded-br hover:bg-blue-600 cursor-pointer border-2 border-blue-500'>
                <FontAwesomeIcon icon={faSearch} className='text-lg' />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='py-2'>
        <h1 className='border border-t-4 border-blue-600'></h1>
      </div>

      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <img src={uno} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={dos} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={tris} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={uno} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={dos} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={tris} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={uno} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={dos} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={tris} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={uno} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={dos} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={tris} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={uno} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={dos} alt='img' className='bg-gray-200 w-full' />
          </div>
          <div>
            <img src={tris} alt='img' className='bg-gray-200 w-full' />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Places;
