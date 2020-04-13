import { createStore } from "redux";
import React from "react";
import { Counter } from "./factory/counterByUseState";
import styled from "styled-components";

////////when it is made through redux////////////////////
//createStore = where data is gethered.
//createStore(reducer) = reducer's role is modify my stored data
//Note! ONLY reducer can modify the stored data.
//so, it is like "hey, createStore with the data that is returned from countModifier()"
//To get the stored Data, I can use .getState()
const countModifier = () => {
  return { hello: "great" };
};
const countStore = createStore(countModifier);
console.log(countStore.getState());

////////////////////////////////////////////////////////////

const App = () => {
  const { state, increase, decrease } = Counter();
  return (
    <Div>
      <div>
        <button onClick={increase}>increment</button>
        <span>{state}</span>
        <button onClick={state > 0 ? decrease : undefined}>decrement</button>
      </div>

      <div>
        <button>there</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: block;
`;

export default App;
