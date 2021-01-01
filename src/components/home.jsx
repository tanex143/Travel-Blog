import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faCalendarAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import bgImg from '../images/indayBG.jpg';
import inday from '../images/inday.png';
import mountains from '../images/mountains.jpg';
import seas from '../images/seas.jpg';
import falls from '../images/falls.jpg';

const Home = () => {
  return (
    <>
      <div className='relative'>
        <img src={bgImg} alt='img' className='h-100vh w-full' />

        <div className='absolute top-0 left-0 w-full h-full'>
          <h1 className='adventure-font lg:mt-72 mt-48 lg:text-8xl text-4xl text-gray-100 text-center'>
            Welcome to
          </h1>
          <img
            src={inday}
            alt='img'
            className='mx-auto transform scale-75 2xl:scale-95'
          />
          <div className='w-full flex justify-center'>
            <button className='lg:py-3 py-2 px-4 lg:px-8 rounded bg-blue-600 text-white lg:text-2xl'>
              EXPLORE
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className='ml-3 text-2xl'
              />
            </button>
          </div>
        </div>
      </div>

      {/* /////////////////BELOW HEADER///////////////////////// */}
      <section className='py-20'>
        <div className='container mx-auto'>
          <h1 className='text-center text-gray-600 md:text-6xl text-3xl adventure-font py-3 uppercase'>
            Destinations
          </h1>
          <div className='w-full relative'>
            <img src={mountains} alt='mt' className='w-full h-50vh' />
            <div className='absolute top-0 left-0 text-center w-full h-full grid grid-cols-3'>
              <div className='col-start-2 my-auto'>
                <h1 className='text-3xl font-semibold adventure-font tracking-wide'>
                  Mountains Overview
                </h1>
                <p className='py-2 italic'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam, vitae praesentium. Ex id architecto error ducimus cum
                  aspernatur consectetur accusamus?
                </p>
                <button className='py-1 px-8 border border-blue-600 rounded text-white hover:bg-blue-600 transition-all duration-300 ease-in'>
                  View
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className='ml-3 text-sm'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='h-50vh relative'>
              <img src={seas} alt='sea' className='w-full h-50vh' />
              <div className='absolute top-0 left-0 text-center w-full h-full grid grid-cols-5'>
                <div className='col-start-2 col-span-3 my-auto'>
                  <h1 className='text-3xl font-semibold adventure-font tracking-wide'>
                    Seas Overview
                  </h1>
                  <p className='py-2 italic'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam, vitae praesentium. Ex id architecto error ducimus
                    cum aspernatur consectetur accusamus?
                  </p>
                  <button className='py-1 px-8 border border-blue-600 rounded text-white hover:bg-blue-600 transition-all duration-300 ease-in'>
                    View
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className='ml-3 text-sm'
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className='h-50vh relative text-white'>
              <img src={falls} alt='falls' className='w-full h-50vh' />
              <div className='absolute top-0 left-0 text-center w-full h-full grid grid-cols-5'>
                <div className='col-start-2 col-span-3 my-auto'>
                  <h1 className='text-3xl font-semibold adventure-font tracking-wide'>
                    Falls & Cold Spring Overview
                  </h1>
                  <p className='py-2 italic'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam, vitae praesentium. Ex id architecto error ducimus
                    cum aspernatur consectetur accusamus?
                  </p>
                  <button className='py-1 px-8 border border-blue-600 rounded text-white hover:bg-blue-600 transition-all duration-300 ease-in'>
                    View
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className='ml-3 text-sm'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='container mx-auto'>
          <div className='pb-10 w-full'>
            <h1 className='text-4xl font-semibold'>Latest Posts</h1>
            <p className='border-t-4 border-blue-400 w-full'></p>
          </div>
          <div className='shadow-xl rounded p-5 blue-gray'>
            <h1 className='text-3xl font-semibold'>Sebu's Haven</h1>
            <div className='py-3 flex gap-10'>
              <p className='italic'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
                Tagoloan, Misamis Oriental
              </p>
              <p className='italic'>
                <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' />
                January 1, 2020
              </p>
            </div>
            <div className='grid grid-cols-2'>
              <img src={mountains} alt='img' className='w-full' />
              <img src={mountains} alt='img' className='w-full' />
            </div>
            <div className='grid grid-cols-3'>
              <img src={mountains} alt='img' className='w-full' />
              <img src={mountains} alt='img' className='w-full' />
              <img src={mountains} alt='img' className='w-full' />
            </div>
            <p className='italic py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              fugit nulla voluptatibus eligendi eum quidem nisi perspiciatis?
              Ipsa nobis corporis quam reprehenderit laudantium dolore quaerat
              consequuntur. Incidunt odit autem harum ad iste, ex tenetur
              doloribus aut blanditiis maiores mollitia obcaecati in illum qui,
              exercitationem unde ullam? Illo et facilis earum.
            </p>
            <div className='py-2'>
              <button className='py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out '>
                View More
                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
