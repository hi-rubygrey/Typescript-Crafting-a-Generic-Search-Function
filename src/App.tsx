import * as React from "react";
import { useState } from "react";
import { widgets } from "./mock-data/widgets";
import { people } from "./mock-data/people";
import { Sorters } from "./components/Sorters";
import { SearchInput } from "./components/SearchInput";
import { WidgetRenderer } from "./components/renderers/WidgetRenderer";
import { PersonRenderer } from "./components/renderers/PersonRenderer";
import { IPerson } from "./interfaces/IPerson";
import { IWidget } from "./interfaces/IWidget";
import { ISortProperty } from "./interfaces/ISortProperty";
import { genericSearch } from "./utils/genericSearch";
import { genericSort } from "./utils/genericSort";

export default function App() {
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    ISortProperty<IWidget>
  >({ property: "title" });
  const [widgetSearchQuery, setWidgetSearchQuery] = useState("");
  const [personSortProperty, setPersonSortProperty] = useState<
    ISortProperty<IPerson>
  >({ property: "firstName" });
  const [personSearchQuery, setPersonSearchQuery] = useState("");
  return (
    <>
      <h2>Widgets:</h2>
      <SearchInput setSearchQuery={setWidgetSearchQuery} />
      <Sorters
        setSortProperty={(property: keyof IWidget) =>
          setWidgetSortProperty({ property })
        }
        object={widgets[0]}
      />
      {widgets
        .filter((widget) =>
          genericSearch(
            widget,
            ["title", "description"],
            widgetSearchQuery,
            false
          )
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map((widget) => {
          // use our new WidgetRenderer component!
          return <WidgetRenderer key={widget.id} {...widget} />;
        })}
      <h2>People:</h2>
      <SearchInput setSearchQuery={setPersonSearchQuery} />
      <Sorters
        setSortProperty={(property: keyof IPerson) =>
          setPersonSortProperty({ property })
        }
        object={people[0]}
      />
      {people
        .filter((person) =>
          genericSearch(
            person,
            ["firstName", "lastName", "eyeColor"],
            personSearchQuery,
            false
          )
        )
        .sort((a, b) => genericSort(a, b, personSortProperty.property))
        .map((person, index) => {
          // use our new PersonRenderer component!
          return <PersonRenderer key={index} {...person} />;
        })}
    </>
  );
}
