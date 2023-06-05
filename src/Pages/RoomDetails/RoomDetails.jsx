import React from "react";
import Headers from "../../components/Rooms/Headers";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <Headers />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo />
            <RoomReservation />
          </div>
          <div>Reservaiton</div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
