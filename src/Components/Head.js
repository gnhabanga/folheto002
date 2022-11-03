import React from "react";

function Head({ title }) {
  return (
    <div className="w-full bg-black lg:h-32 relative overflow-hidden rounded-md">
      {/*<img 
		src={require('../images/head.png')} 
		alt="aboutus"
		className="w-full h-full object-cover"	
	/>*/}
      <div className="absolute lg:top-16 top-16 w-full flex-colo">
        <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
          {" "}
          {title && title}{" "}
        </h1>
      </div>
    </div>
  );
}

export default Head;
