import React from 'react'; 

function Home() {
  return (
    <div className="relative">
      <img
        src="/Images/spider_background.jpg"
        alt="Background"
        className="w-full h-64 md:h-screen object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2>Welcome to Our Interior Design World!</h2>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default Home;
