import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
// import productReducer from './productReducer';
// import userReducer from './userReducer';

export default combineReducers({
	categories: categoryReducer
	// products: productReducer,
	// users: userReducer
});