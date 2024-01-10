import React from 'react'

function ProjectCard({image}) {
  return (
    <div className='flex items-center justify-end mx-10'>
    <div className='max-w-md pr-8'>
      <h2 className='text-3xl font-bold text-gray-900 mb-4'>Project Title</h2>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper neque eu lectus.
      </p>
    </div>
    <div className='flex-shrink-0 w-96'>
      <img
        className='w-full h-80 object-cover object-center rounded-lg shadow-lg'
        src={image}
        alt="Featured Project"
      />
    </div>
  </div>
  )
}

export default ProjectCard