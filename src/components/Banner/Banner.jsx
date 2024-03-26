import { Link } from 'react-router-dom';
import bannerImage from '../../assets/pngwing1.png'

const Banner = () => {
    return (
        <div className="md:h-[450px] w-full bg-[#59C6D2] rounded-lg my-10">
            <div className='md:flex md:flex-row items-center w-4/5 mx-auto pt-16'>
                <div className='w- 2/4 mx-auto space-y-'>
                    <h1 className='text-5xl font-bold mb-4'>Books to freshen up your bookshelf</h1>
                    <Link to='/listed-books'><button className='bg-[#23BE0A] text-white btn border-none font-bold'>View The List</button></Link>
                </div>
                <div className='w-2/4 mx-auto mt-5 mb-5'>
                    <img src={bannerImage} alt="" className='w-[300px] md:h-[300px]' />
                </div>
            </div>
        </div>
    );
};

export default Banner;