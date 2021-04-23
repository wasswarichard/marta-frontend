import {createStore} from "redux";
import reducer from "../reducer/reducer";
const initialState = {
    status: ["SELECTION", "PROPOSITION", "CONTRACT_SIGNATURES", "DONE"]
}
const store = createStore(reducer, initialState,window.devToolsExtension && window.devToolsExtension());
export default store;