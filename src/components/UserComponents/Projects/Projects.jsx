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
    <div className=''>
    <div className='container mx-auto mt-14'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-4xl font-extrabold text-gray-800 tracking-wider'>Explore Our Projects</h1>
      </div>
       <ProjectCard image="/Images/two.jpg"/>
       <ProjectCardTwo image="/Images/two.jpg"/>
       <ProjectCard image="/Images/three.jpg"/>
       <ProjectCardTwo image="/Images/four.jpg"/>
    </div>
      <div className='flex justify-end mx-14'>
      <Button variant="contained" style={buttonStyles}>
      Show all <EastIcon />
    </Button>
     </div>
    </div>
  );
}

export default Projects;
