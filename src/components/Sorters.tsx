import * as React from "react";
import { ISortProperty } from "../interfaces/ISortProperty";
export interface ISortersProps<T> {
  object: T;
  setSortProperty: (propertyType: ISortProperty<T>) => void;
}
export function Sorters<T>(props: ISortersProps<T>) {
  const { object, setSortProperty } = props;
  return (
    <>
      <label htmlFor="sorters" className="mt-3">
        Sorters! Try us too!
      </label>
      <select
        id="sorters"
        onChange={(event) => {
          const values = event.target.value.split("-");
          if (values.length === 2) {
            setSortProperty({
              property: values[0] as any,
              isDescending: values[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by '{key}' descending!
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by '{key}' ascending!
              </option>
            </>
          );
        })}
      </select>
    </>
  );
}
