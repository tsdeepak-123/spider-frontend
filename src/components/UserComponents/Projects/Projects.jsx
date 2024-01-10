import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardTwo from './ProjectCardTwo';
import EastIcon from '@mui/icons-material/East';
import { Button } from '@mui/material';

function Projects() {
  const buttonStyles = {
    backgroundColor: 'black',
    marginLeft: '100px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'darkgray',
    },
  };
  
  return (
    <div>
      <div className='container mx-auto mt-14'>
        <div className='flex justify-center mb-8'>
          <h1 className='sm:text-4xl text-2xl font-extrabold text-gray-800 tracking-wider'>
            Explore Our Projects
          </h1>
        </div>
        <div>
          <div className='mb-6 sm:mb-0'>
            <ProjectCard image='/Images/two.jpg' />
          </div>
          <div className='mb-6 sm:mb-0'>
            <ProjectCardTwo image='/Images/two.jpg' />
          </div>
          <div className='mb-6 sm:mb-0'>
            <ProjectCard image='/Images/three.jpg' />
          </div>
          <div className='mb-6 sm:mb-0'>
            <ProjectCardTwo image='/Images/four.jpg' />
          </div>
        </div>
      </div>
      <div className='mx-6 mt-4 sm:flex sm:justify-end'>
        <Button variant='contained' style={buttonStyles}>
          Show all <EastIcon />
        </Button>
      </div>
    </div>
  );
}

export default Projects;
