import {createStore} from 'redux';
import storeReducer from './reducers/index';


const store = createStore(storeReducer);

export default store;