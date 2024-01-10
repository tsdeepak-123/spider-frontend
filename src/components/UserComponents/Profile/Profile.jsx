import React from 'react';


function Profile() {
  return (
    <div className="max-w-screen-lg mx-auto mt-8 px-6 py-4 bg-white rounded-md shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src="/Images/kuttan.jpg" 
          alt="Nitheesh Kavumpuram - Founder"
          className="w-60 h-60 rounded-full mr-4 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-Black">NITHEESH</h2>
          <p className="text-gray-400">Founder, Spider Interiors</p>
        </div>
      </div>
      <p className="text-black">
        Hi, I'm Nitheesh Kavumpuram, the founder of Spider Interiors. With a passion for interior design, I've successfully completed numerous construction and interior projects in Kozhikode. Now, I'm expanding my horizons to other districts and states.

        I take pride in being a versatile and detail-oriented interior designer. My focus and dedication to my career drive me to create spaces that are not only aesthetically pleasing but also functional. Let's turn your vision into reality!
      </p>
    </div>
  );
}

export default Profile;
