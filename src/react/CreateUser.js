import React from "react";
import { Menu } from "./components";
import { CreateUserForm } from "./components";

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

export default CreateUser;
