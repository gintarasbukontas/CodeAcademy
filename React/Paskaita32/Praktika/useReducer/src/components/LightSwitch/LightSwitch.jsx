import { useReducer } from "react";

const ACTION_TYPES = {
  TURN_ON: "turn-on",
  TURN_OFF: "turn-off",
  TOGGLE: "toggle",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.TURN_ON:
      return { isOn: true };
    case ACTION_TYPES.TURN_OFF:
      return { isOn: false };
    case ACTION_TYPES.TOGGLE:
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

export default function LightSwitch() {
  const [state, dispatch] = useReducer(reducer, { isOn: false });

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTION_TYPES.TURN_ON })}>
        TURN ON
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.TURN_OFF })}>
        TURN OFF
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE })}>
        TOGGLE
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ color: state.isOn ? "yellow" : "black" }}>
          Light: {state.isOn}
        </p>
        <input type="checkbox" checked={state.isOn} />
      </div>
    </div>
  );
}
