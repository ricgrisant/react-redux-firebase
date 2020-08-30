const { default: authReducer } = require("./authReducer")
const { default: projectReducer } = require("./projectReducer")
const { combineReducers } = require("redux")

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer


