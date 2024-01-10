import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 max-w-screen-lg w-full">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 md:mr-4">
            <h2 className="text-4xl font-bold text-black">About US</h2>
            <p className="text-gray-500">
              Welcome to Spider Interiors, where every space tells a unique story of design and innovation.
            </p>
          </div>
          <img
            src="/Images/spiderr.jpg"  // Replace with your image source
            alt="About Spider Interiors"
            className="w-full md:w-40 h-45 rounded-2xl sm:rounded mb-4 md:mb-0 object-cover mt-4 ml-auto" // added ml-auto
          />
        </div>
        <p className="text-gray-700 leading-relaxed">
        At Spider Interiors, we believe in turning spaces into experiences. Our journey is marked by a passion for interior design, a commitment to excellence, and a dedication to creating environments that resonate with our clients' visions.
          <br />
          <br />
          From residential projects that reflect the warmth of home to commercial spaces that inspire productivity, we curate designs that go beyond aesthetics — they tell a story.
          <br />
          <br />
          Our success is measured not only by the beauty of our designs but also by the satisfaction of our clients. We take pride in our happy clients who have entrusted us with their spaces and witnessed their visions come to life.
          <br />
          <br />
          Join us at Spider Interiors, where we bring dreams to reality, one space at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
