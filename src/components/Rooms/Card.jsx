import { useNavigate } from "react-router-dom";
import HeartButton from "../Button/HeartButton";

const Card = ({ room }) => {
  const { category, price, dateRange, image, location } = room;

  const navigate = useNavigate();

  const viewRoomDetails = () => {
    navigate(`/room/${1}`);
  };

  return (
    <div onClick={viewRoomDetails} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={image}
            alt="Room"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">{location}</div>
        <div className="font-light text-neutral-500">{dateRange}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
