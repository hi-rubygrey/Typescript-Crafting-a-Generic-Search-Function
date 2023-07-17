import * as React from "react";
import widgets from './mock-data/widgets';
import people from './mock-data/people';
import genericSearch from './utils/genericSearch'
function App() {
  return (
    <>
      {widgets.filter((widget) => genericSearch(widget, "title", query)).map(widget => {
      return (
          <h3>{widget.title}</h3>
      )
      })}
      <h2>Widgets:</h2>
      {widgets.map(widget => {
        return (
          <h3 key={widget.id}>{widget.title}</h3>
        )
      })}
      <h2>People:</h2>
      {people.map((person, index) => {
        return (
          <h3 key={index}>{person.firstName} {person.lastName}</h3>
        )
      })}
    </>
  );
}

export default App;