import { KeyboardEventHandler, useState } from "react";
import { SearchBar } from "./SearchBar";

export const Search = ({ setSearchItem }) => {
  //   console.log(setSearchItem);
  return (
    <>
      <div>
        <SearchBar setSearchItem={setSearchItem} />
      </div>
    </>
  );
};
