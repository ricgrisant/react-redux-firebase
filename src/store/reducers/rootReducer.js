import { firestoreReducer } from "redux-firestore";

const { default: authReducer } = require("./authReducer")
const { default: projectReducer } = require("./projectReducer")
const { combineReducers } = require("redux")


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer


