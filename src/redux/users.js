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

const DELETE_USER = createActions("deleteUser");
export const deleteUser = () => (dispatch, getState) => {
	dispatch(DELETE_USER.START());
	dispatch(logout());
	const token = getState().auth.login.result.token;
	const username = getState().auth.login.result.username;
	return fetch(url + `/${username}`, {
		method: "DELETE",
		headers: { Authorization: "Bearer " + token, ...jsonHeaders }
	})
		.then(handleJsonResponse)
		.then(result => dispatch(DELETE_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(DELETE_USER.FAIL(err))));
};

const UPDATE_USER = createActions("updateUser");
export const updateUser = updateData => (dispatch, getState) => {
	dispatch(UPDATE_USER.START());
	const token = getState().auth.login.result.token;
	const username = getState().auth.login.result.username;
	return fetch(url + `/${username}`, {
		method: "PATCH",
		headers: { Authorization: "Bearer " + token, ...jsonHeaders },
		body: JSON.stringify(updateData)
	})
		.then(handleJsonResponse)
		.then(result => dispatch(UPDATE_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};

const GET_USER_LIST = createActions("getUserList");
export const getUserList = () => dispatch => {
	dispatch(GET_USER_LIST.START());
	return fetch(url + "?limit=20", {
		method: "GET",
		headers: jsonHeaders
	})
		.then(handleJsonResponse)
		.then(result => dispatch(GET_USER_LIST.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(GET_USER_LIST.FAIL(err))));
};

const GET_USER = createActions("getUser");
export const getUser = () => (dispatch, getState) => {
	dispatch(GET_USER.START);
	const username = getState().auth.login.result.username;
	return fetch(url + `/${username}`, {
		method: "GET",
		headers: jsonHeaders
	})
		.then(handleJsonResponse)
		.then(result => dispatch(GET_USER.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

export const reducers = {
	createUser: createReducer(asyncInitialState, {
		...asyncCases(CREATE_USER)
	}),
	deleteUser: createReducer(asyncInitialState, {
		...asyncCases(DELETE_USER)
	}),
	updateUser: createReducer(asyncInitialState, {
		...asyncCases(UPDATE_USER)
	}),
	getUserList: createReducer(asyncInitialState, {
		...asyncCases(GET_USER_LIST)
	}),
	getUser: createReducer(asyncInitialState, {
		...asyncCases(GET_USER)
	})
};
