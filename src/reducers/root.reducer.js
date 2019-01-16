import { combineReducers } from "redux";
import globalReducer from "./global.reducer";
import projectsReducer from "./projects.reducer";

const rootReducer = combineReducers({
  global: globalReducer,
  projects: projectsReducer,
});

export default rootReducer;
