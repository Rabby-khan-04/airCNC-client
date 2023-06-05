import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 text-neutral-500 border-transparent hover:border-neutral-300 cursor-pointer"
    >
      <Icon size={26} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
