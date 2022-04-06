import { createSelector } from "reselect";

//initial selector
const selectCategoriesReducer = (state) => state.categories;

//memoized selector: only runs when the categoriesSlice received from the initial selector is different
export const selectCategories = createSelector(
  [selectCategoriesReducer], //input selectors needed to produce the output
  (categoriesSlice) => categoriesSlice.categories //output selector
);

//runs only when categories change
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, [])
);
