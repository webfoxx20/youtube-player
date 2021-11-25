import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <form className=" mt-6 lg:text-center" onSubmit={onInputSubmit}>
      <input
        type="text"
        placeholder="Input city"
        className="w-full  lg:w-1/2 shadow-sm rounded-l py-2.5 border border-gray-400 px-4"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      ></input>

      <button className="bg-primaryColor rounded-r py-2.5 w-full  lg:w-1/6   border border-primaryColor text-white ">
        Search
      </button>
      <div className="text-primaryColor lg:pl-7  lg:w-1/2"></div>
    </form>
  );
};

export default SearchBar;
