import {
	domain,
	jsonHeaders,
	handleJsonResponse,
	getInitStateFromStorage,
	asyncInitialState,
	asyncCases,
	createActions,
	createReducer
} from "./helpers";

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

export const reducers = {
	createUser: createReducer(
		getInitStateFromStorage("createUser", asyncInitialState),
		{
			...asyncCases(CREATE_USER),
			[CREATE_USER.SUCCESS.toString()]: (state, action) => asyncInitialState
		}
	)
};

export default createUser;
