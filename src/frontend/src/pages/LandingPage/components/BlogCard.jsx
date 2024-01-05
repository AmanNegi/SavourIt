import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export function BlogCard({ name, description, image }) {
  var navigate = useNavigate();

  return (
    <>
      <div className="rounded-lg relative w-[100%] h-[50vh] bg-base-100 trendingCard overflow-hidden p-3">
        <div className="flex flex-col h-full ">
          {/* Give me a random image url */}
          <img className='rounded-lg h-[27vh] w-full object-contain' src={image} alt="" />
          <h2 className='mt-2 font-bold'>{name}</h2>
          <p className='text-slate-500'>
            {description}
          </p>

          <div className='flex-1'></div>
          <p className='text-sm'> ~ Aster Joules</p>
        </div>
        <div className="absolute bottom-2 right-2">
          <button onClick={() => {
            navigate("/blogDetail");
          }} className="btn btn-outline">Read More</button>
        </div>
      </div >
    </>
  );
}
BlogCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};