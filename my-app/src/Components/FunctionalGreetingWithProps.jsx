import React from "react";

export default function FunctionalGreetingWithProps(props) {
  return (
    <div>
      <h1>
        Hello, {props.greeting} {props.name} {props.age}
      </h1>
    </div>
  );
}
