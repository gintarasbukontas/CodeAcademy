import { useReducer, createContext, useContext } from "react";

const initialState = {
  id: null,
  name: null,
  hex: null,
  palette: [],
};

export const ACTION_TYPES = {
  ADD_COLOR: "add-color",
  REMOVE_COLOR: "remove-color",
  EDIT_COLOR: "edit-color",
};

const ColorStateContext = createContext();

function colorStateReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_COLOR:
      return { ...state, palette: [...state.palette, action.payload] };
    case ACTION_TYPES.REMOVE_COLOR:
      return {
        ...state,
        palette: state.palette.filter((color) => color.id !== action.payload),
      }; // kai dispatch padaro REMOVE_COLOR requesta tada pasiimamas visas palette array ir jame filtruoja kiekviena spalvos objekta pagal spalvos id ir jeigu spalvos id ne toks koks payload id tada prideda ta spalva atgal i array, o ta kuri sutapo jos neprideda ir po to returnina array be tos spalvos kuria norejom istrint
    case ACTION_TYPES.EDIT_COLOR:
      return {
        ...state,
        palette: state.palette.map((color) =>
          color.id === action.payload.id
            ? { ...color, name: action.payload.name, hex: action.payload.hex }
            : color
        ),
      }; // jeigu teisingai suprantu kai dispatch pasiuncia EDIT_COLOR requesta tada pramapinamas visas spalvu array ir jame tikrina kiekviena spalvos objekta ir jeigu sutampa spalvos id su gautu id is payload tada tos spalvos objekta isspreadina ir overwritina name ir hex gautais is payload, o ten kur id nesutampa (lyginant id gauna false) tada tiesiog i nauja array prideda ta pacia spalva be pakeitimu
    default:
      return state;
  }
}

export function ColorPalleteProvider({ children }) {
  const [state, dispatch] = useReducer(colorStateReducer, initialState);

  return (
    <ColorStateContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorStateContext.Provider>
  );
}

export function useColorContext() {
  const context = useContext(ColorStateContext);

  if (!context) {
    throw new Error("useAppContext must be inside an ColorPalleteProvider");
  }

  return context;
}
