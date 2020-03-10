import {
	domain,
	jsonHeaders,
	handleJsonResponse,
	asyncInitialState,
	asyncCases,
	createActions,
    createReducer
} from "./helpers";
// import { url } from "inspector";
const url = domain + "/messages";


const CREATE_MESSAGE = createActions("createMessage");
export const createMessage = messageData => dispatch => {
	dispatch({type: CREATE_MESSAGE.START});
        const newMessagePayload = {
            method: "POST",
            headers: { ...jsonHeaders, Authorization: "Bearer " + JSON.parse(localStorage.login).result.token},
            body: JSON.stringify(messageData)

        }
        console.log(newMessagePayload)
    return fetch(url, newMessagePayload)
		.then(handleJsonResponse)
		.then(result => dispatch(CREATE_MESSAGE.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(CREATE_MESSAGE.FAIL(err))))
};

const GET_MESSAGES = createActions("getMessages");
export const getMessages = () => dispatch => {
	dispatch({type: GET_MESSAGES.START});
    return fetch(url + `?limit=100&offset=0`)
		.then(handleJsonResponse)
		.then(result => dispatch(GET_MESSAGES.SUCCESS(result)))
		.catch(err => Promise.reject(dispatch(GET_MESSAGES.FAIL(err))))
};




export const reducers = {
    createMessage: createReducer(asyncInitialState, {
      ...asyncCases(CREATE_MESSAGE) 
    }),
    getMessages: createReducer(asyncInitialState, {
        ...asyncCases(GET_MESSAGES)
    })
  };

