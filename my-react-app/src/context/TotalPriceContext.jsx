import React, { createContext, useContext, useReducer } from "react";

// untuk menyimpan state
const TotalPriceContext = createContext(null);

// untuk menyimpan action-actionnya
const TotalPriceDispatchContext = createContext(null);

const TotalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unkwon action: " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(TotalPriceReducer, { total: 0 });
  return (
    // untuk menyimpan state
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
