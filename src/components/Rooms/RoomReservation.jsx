import React from "react";
import Calendars from "./Calendar";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden col-span-3 order-first md:order-last">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <div>
        <Calendars />
        <hr />
        <div className="p-4">
          <Button label="Reserve" />
        </div>
        <div className="p-4 flex items-center justify-between text-lg font-semibold">
          <p>Total</p>
          <p>$ 300</p>
        </div>
      </div>
    </div>
  );
};

export default RoomReservation;
