import * as React from "react";
import { useDebounce } from "../hooks/useDebounce";
import { log } from "console";
import { eventNames } from "process";
export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const { setSearchQuery } = props;
  const setSearchQueryDebounced = useDebounce((event) => {
    console.log("Firing!");
    setSearchQuery(event.target.value);
  }, 250);
  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search here 
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => {
          console.log(event.target.value);
          setSearchQueryDebounced(event)
        }}
      />
    </>
  );
}