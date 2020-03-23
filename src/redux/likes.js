import {
	domain,
	jsonHeaders,
	handleJsonResponse,
	asyncInitialState,
	asyncCases,
	createActions,
	createReducer
} from "./helpers";


const url = domain + "/likes";

const ADD_LIKE = createActions("addLike");
export const addLike = (messageId) => (dispatch, getState) => {
    dispatch(ADD_LIKE.START);
	const token = getState().auth.login.result.token;
	const messageBody = {
		messageId: messageId
	}
	const newMessagePayload = {
		method: "POST",
		headers: { ...jsonHeaders, Authorization: "Bearer " + token},
		body: JSON.stringify(messageBody)

	}
	return fetch(url, newMessagePayload)
		.then(handleJsonResponse)
        .then(result => dispatch(ADD_LIKE.SUCCESS(result)))
        .catch(err => Promise.reject(dispatch(ADD_LIKE.FAIL(err))));
}

export const reducers = {
    addLike: createReducer(asyncInitialState, {
        ...asyncCases(ADD_LIKE)
    })
};