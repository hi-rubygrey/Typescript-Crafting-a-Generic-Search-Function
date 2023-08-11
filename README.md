It can be used on the existing widgetFilterProperties instead of trying to set the new state with just widgetFilterProperties.add(property).This is because, in React, the state variable should never be mutated directly. It’s important to keep this in mind when calling any state setter function in React components.
test config
