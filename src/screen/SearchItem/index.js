import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search, AntSpinload, SearchCardAPI } from "../../components";
import { getSearchItemAction } from "../../redux/actions";

export default function SearchItem() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.search);
  const { searchItem, searchloading } = searchResult;

  async function inputHandler(e) {
    setSearchInput(e.target.value);
    SearchHalder();
  }

  const SearchHalder = () => {
    dispatch(getSearchItemAction(searchInput));
  };

  return (
    <>
      <Search valueInput={searchInput} handler={inputHandler}></Search>
      {searchloading == false ? (
        <AntSpinload />
      ) : (
        searchInput !== "" && <SearchCardAPI data={searchItem} />
      )}
    </>
  );
}
