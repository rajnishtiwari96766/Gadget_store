import React from "react";

const Hero_sec = ({ myData }) => {
  const { intro } = myData;
  return (
    <div className="flex">
      <div className="p-16 pt-32">
        <h1 className="text-3xl font-bold text-gray-700 pb-2">{intro}</h1>
        <p className="w-full  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
          natus porro similique laudantium obcaecati nostrum dolore veritatis
          consequuntur ex unde asperiores esse? Hic eum dolores officia iure,
          illo veritatis est ipsa, necessitatibus enim rem maiores! Voluptates,
          eum temporibus. Adipisci, dolores.
        </p>
      </div>

      <img
        src="src/assets/Magnify your house with useful household gadgets.jpeg"
        alt="Loading"
        className="w-1/2 h-1/3 m-10 rounded-md shadow-lg"
      />
    </div>
  );
};

export default Hero_sec;
