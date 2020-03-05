import React from "react";
import { CreateUserForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";

class CreateUser extends React.Component {
	render() {
		return (
			<>
				<Menu />
				<CreateUserForm />
			</>
		);
	}
}

export default userIsNotAuthenticated(CreateUser);
