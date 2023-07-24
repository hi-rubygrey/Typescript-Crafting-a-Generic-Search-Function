import * as React from "react";
import { useState } from "react";
import { widgets } from "./mock-data/widgets";
import { people } from "./mock-data/people";
import { Sorters } from "./components/Sorters";
import { IPerson } from "./interfaces/IPerson";
import { IWidget } from "./interfaces/IWidget";
import { ISortProperty } from "./interfaces/ISortProperty";
import { genericSort } from "./utils/genericSort";
import { WidgetRenderer } from "./components/renderers/WidgetRenderer";
import { PersonRenderer } from "./components/renderers/PersonRenderer";

export default function App() {
  // note that the initial values also need an 'isDescending' value!
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    ISortProperty<IWidget>
  >({ property: "title", isDescending: false });
  const [personSortProperty, setPersonSortProperty] = useState<
    ISortProperty<IPerson>
  >({ property: "firstName", isDescending: false });

  return (
    <>
      <h2>Widgets:</h2>
      <Sorters
        setSortProperty={(property) => setWidgetSortProperty(property)}
        object={widgets[0]}
      />
      {widgets
        .sort((a, b) =>
          genericSort(
            a,
            b,
            widgetSortProperty.property,
            widgetSortProperty.isDescending
          )
        )
        .map((widget) => {
          return <WidgetRenderer {...widget} />;
        })}
      <h2>People:</h2>
      <Sorters
        setSortProperty={(property) => setPersonSortProperty(property)}
        object={people[0]}
      />
      {people
        .sort((a, b) =>
          genericSort(
            a,
            b,
            personSortProperty.property,
            personSortProperty.isDescending
          )
        )
        .map((person) => {
          return <PersonRenderer {...person} />;
        })}
    </>
  );
}
