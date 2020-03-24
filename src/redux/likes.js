import {
	domain,
	jsonHeaders,
	handleJsonResponse,
	asyncInitialState,
	asyncCases,
	createActions,
	createReducer
} from "./helpers";
import { getMessages } from "./messages";

const url = domain + "/likes";

const TOGGLE_LIKE = createActions("toggleLike");
export const toggleLike = (messageId) => (dispatch, getState) => {
	const username = getState().auth.login.result.username
	const messages = getState().messages.getMessages.result.messages
	const message = messages.find(message => message.id === messageId)
	const likes = message.likes
	const likeUsernames = likes.map(like => like.username)
	if (likeUsernames.some(likeUsernames => likeUsernames === username)) {
		console.log(likes)
			return dispatch(removeLike(likes.indexOf(username).id))
				}
		else {
			dispatch(addLike(messageId, username))
		}
	}
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
		.then(result => {dispatch(ADD_LIKE.SUCCESS(result))
		dispatch(getMessages())})
        .catch(err => Promise.reject(dispatch(ADD_LIKE.FAIL(err))));
}

const REMOVE_LIKE = createActions("removeLike");
export const removeLike = (likeId) => (dispatch, getState) =>{
	dispatch(REMOVE_LIKE.START);
	const token = getState().auth.login.result.token;
		return fetch(url, `/${likeId}`, {
		method: "DELETE",
		headers: { ...jsonHeaders, Authorization: "Bearer " + token}})
	.then(handleJsonResponse)
	.then(result => {dispatch(REMOVE_LIKE.SUCCESS(result))
	dispatch(getMessages())})
	.catch(err => Promise.reject(dispatch(REMOVE_LIKE.FAIL(err))));
}

export const reducers = {
    addLike: createReducer(asyncInitialState, {
        ...asyncCases(ADD_LIKE)
	}),
	removeLike: createReducer(asyncInitialState, {
        ...asyncCases(REMOVE_LIKE)
	}),
	toggleLike: createReducer(asyncInitialState, {
        ...asyncCases(TOGGLE_LIKE)
	}),
};