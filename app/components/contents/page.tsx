import Image from 'next/image';
import man from "../../../public/asset/img/man.jpg";

function Content() {
  return (
    <div className='bg-yellow-500 h-[400px] md:h-[700px] w-screen block md:flex justify-between box-border'>
      <div className=' w-full h-[0%] md:w-[50%] md:h-full  justify-center items-end box-border hidden md:flex '>
        <Image src={man} alt="Man" width={500} height={500} className=' ' />
      </div>
      <div className='  w-full h-[100%] md:w-[50%] md:h-full  text-start p-14 md:p-0'>
          <h1 className='text-3xl md:text-6xl font-serif font-bold mt-0 md:mt-[200px]'>Listen to the</h1> <br />
          <span className='text-3xl md:text-6xl font-serif font-bold text-blue-700'>amazing</span>  <span className='ml-5 text-3xl md:text-6xl font-serif font-bold'>    music</span>
          <h1 className='text-3xl md:text-6xl font-serif font-bold mt-2 mb-3'>sound.</h1>
          <p className='text-lg'>Experience music like never before</p>
          <button className='w-[180px] h-[50px] bg-black rounded-lg text-white mt-4 hover:bg-white hover:text-black'>Shopping now</button>
      </div>
    </div>
  );
}

export default Content;
