import {
	domain,
	jsonHeaders,
	handleJsonResponse,
	asyncInitialState,
	asyncCases,
	createActions,
	createReducer
} from "./helpers";
import { logout } from "./auth";

const url = domain + "/users";

const CREATE_USER = createActions("createUser");
export const createUser = newLoginData => dispatch => {
	dispatch(CREATE_USER.START());

	return fetch(url, {
		method: "POST",
		headers: jsonHeaders,
		body: JSON.stringify(newLoginData)
	})
		.then(handleJsonResponse)
		.then(result => dispatch(CREATE_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(CREATE_USER.FAIL(err))));
};

const DELETEUSER = createActions("deleteuser");
export const deleteUser = () => (dispatch, getState) => {
	dispatch(DELETEUSER.START());
	dispatch(logout());
	const token = getState().auth.login.result.token;
	const username = getState().auth.login.result.username;
	return fetch(url + "/" + username, {
		method: "DELETE",
		headers: { Authorization: "Bearer " + token, ...jsonHeaders }
	})
		.then(handleJsonResponse)
		.then(result => dispatch(DELETEUSER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(DELETEUSER.FAIL(err))));
};

const UPDATE_USER = createActions("updateUser");
export const updateUser = () => (dispatch, getState) => {
	dispatch(UPDATE_USER.START());
	dispatch(logout());
	const token = getState().auth.login.result.token;
	const username = getState().auth.login.result.username;
	return fetch(url + `/${username}`, {
		method: "PATCH",
		headers: { Authorization: "Bearer " + token, ...jsonHeaders }
	})
		.then(handleJsonResponse)
		.then(result => dispatch(UPDATE_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};

const GET_USER = createActions("getUser");
export const getUser = getUserInfo => (dispatch, getState) => {
	dispatch(GET_USER.START());

	// const token = getState().auth.login.result.token;
	const username = getUserInfo.username;

	return fetch(url + `/${username}`, {
		method: "GET"
		// headers: jsonHeaders
	})
		.then(handleJsonResponse)
		.then(result => dispatch(GET_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

export const reducers = {
	createUser: createReducer(asyncInitialState, {
		...asyncCases(CREATE_USER)
	}),
	getUser: createReducer(asyncInitialState, {
		...asyncCases(GET_USER)
	}),
	updateUser: createReducer(asyncInitialState, {
		...asyncCases(UPDATE_USER)
	})
};
