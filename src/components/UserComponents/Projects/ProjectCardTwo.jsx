import React from 'react';

function ProjectCardTwo({ image }) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-start mx-4 md:mx-10'>
      <div className='flex-shrink-0 w-full md:w-96'>
        <img
          className='w-full h-80 md:h-auto object-cover object-center rounded-lg shadow-lg'
          src={image}
          alt='Featured Project'
        />
      </div>
      <div className='max-w-md md:pl-14 mt-4 md:mt-0 md:text-left text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Project Title</h2>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper neque eu lectus.
        </p>
      </div>
    </div>
  );
}

export default ProjectCardTwo;
