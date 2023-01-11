import { Reducer, useReducer } from "react";
import "./App.css";

type State = {
  names: Array<string>;
  name: string;
};

enum ActionKind {
  SetName = "SET_NAME",
  AddName = "ADD_NAME",
}

type Action = {
  type: ActionKind;
  payload: string;
};

function NameList() {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case ActionKind.SetName:
          return { ...state, name: action.payload };
        case ActionKind.AddName:
          return {
            ...state,
            names: [...state.names, action.payload],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div className="App">
      {state.names.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: ActionKind.SetName, payload: e.target.value })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: ActionKind.AddName, payload: state.name })
        }
      >
        Add name
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <NameList />
    </div>
  );
};
export default App;
