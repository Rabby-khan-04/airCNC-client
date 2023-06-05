import React from "react";
import Heading from "../Heading/Heading";

const Headers = () => {
  return (
    <>
      <Heading
        title="No Rooms Available In This Category"
        subtitle="Please Select Other Categories"
        center={false}
      />

      <div className="w-full md:h-[50vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full object-center"
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Headers;
