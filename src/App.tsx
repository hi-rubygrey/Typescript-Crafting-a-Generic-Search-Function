import * as React from "react";
import { useState } from "react";
import widgets from "./mock-data/widgets";
import people from "./mock-data/people";
import { IPerson } from "./interfaces/IPerson";
import { IWidget } from "./interfaces/IWidget";
import { ISortProperty } from "./interfaces/ISortProperty";
import genericSearch from "./utils/genericSearch";
import { SearchInput } from "./components/SearchInput";
import { Sorters } from "./components/Sorters";
import { genericSort } from "./utils/genericSort";

function App() {
  const [query, setQuery] = useState("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    ISortProperty<IWidget>
  >({ property: "title" });
  const [personSortProperty, setPersonSortProperty] = useState<
    ISortProperty<IPerson>
  >({ property: "firstName" });
  return (
    <>
      <SearchInput setSearchQuery={setQuery} />
      <h2>Widgets:</h2>
      <Sorters
        setSortProperty={(property) => setWidgetSortProperty({ property })}
        object={widgets[0]}
      />
      {widgets
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map((widget) => {
          return <h3>{widget.title}</h3>;
        })}
      <h2>People:</h2>
      <Sorters
        setSortProperty={(property) => setPersonSortProperty({ property })}
        object={people[0]}
      />
      {people
        .sort((a, b) => genericSort(a, b, personSortProperty.property))
        .map((person) => {
          return <h3>{person.firstName}</h3>;
        })}
      <h2>Widgets:</h2>
      {widgets.map((widget) => {
        return <h3 key={widget.id}>{widget.title}</h3>;
      })}
      <h2>People:</h2>
      {people.map((person, index) => {
        return (
          <h3 key={index}>
            {person.firstName} {person.lastName}
          </h3>
        );
      })}
    </>
  );
}

export default App;
