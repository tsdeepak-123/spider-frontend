import React from 'react';

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 max-w-screen-lg w-full">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src="/Images/kuttan.jpg"
            alt="Nitheesh Kavumpuram - Founder"
            className="w-full md:w-60 h-60 rounded-2xl sm:rounded-full mb-4 md:mb-0 md:mr-4 object-cover"
          />
          <div className="md:ml-auto"> {/* added md:ml-auto */}
            <h2 className="text-4xl font-bold text-black">NITHEESH</h2>
            <p className="text-gray-500">Founder, Spider Interiors</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Hi, I'm Nitheesh, the founder of Spider Interiors. With a passion for interior design, I've successfully completed numerous construction and interior projects in Kozhikode. Now, I'm expanding my horizons to other districts and states.
          <br />
          <br />
          I take pride in being a versatile and detail-oriented interior designer. My focus and dedication to my career drive me to create spaces that are not only aesthetically pleasing but also functional. Let's turn your vision into reality!
        </p>
      </div>
    </div>
  );
}

export default Profile;
