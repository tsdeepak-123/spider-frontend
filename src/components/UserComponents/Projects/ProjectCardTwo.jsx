import React from 'react'

function ProjectCardTwo({image}) {
  return (
    <div className='flex items-center justify-start mx-10'>
            <div className='flex-shrink-0 w-96'>
      <img
        className='w-full h-80 object-cover object-center rounded-lg shadow-lg'
        src={image}
        alt="Featured Project"
      />
    </div>
    <div className='max-w-md pl-14'>
      <h2 className='text-3xl font-bold text-gray-900 mb-4'>Project Title</h2>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper neque eu lectus.
      </p>
    </div>
  </div>
  )
}

export default ProjectCardTwo