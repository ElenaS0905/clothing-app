import { createContext, useEffect, useReducer, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase-utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// export const CATEGORY_ACTIONS_TYPES = {
//   SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
// };
//
// const categoryReducer = (state, action) => {
//   const { type, payload } = action;
//
//   switch (type) {
//     case CATEGORY_ACTIONS_TYPES.SET_CATEGORIES_MAP: {
//       return {
//         ...state,
//         categoriesMap: payload,
//       };
//     }
//     default:
//       throw new Error(`unhandled type ${type} in CategoryReducer`);
//   }
// };
//
// const INITIAL_STATE = {
//   categoriesMap: {},
// };

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // const [{ categoriesMap }, dispatch] = useReducer(
  //   categoryReducer,
  //   INITIAL_STATE
  // );

  // const setCategoriesMap = (categoryMap) => {
  //   dispatch({
  //     type: CATEGORY_ACTIONS_TYPES.SET_CATEGORIES_MAP,
  //     paylaod: categoryMap,
  //   });
  // };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
