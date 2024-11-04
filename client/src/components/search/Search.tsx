import { SearchBar } from "./SearchBar";
import Categories from "./Categories";

export const Search = ({ setSearchItem }) => {
  return (
    <>
      <div className="search">
        <SearchBar setSearchItem={setSearchItem} />
        <Categories />
      </div>
    </>
  );
};
