import { Fragment } from "react";
import { BrowserRouter, Route, Routes, ROutes  } from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";


const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route exact path="/home" element={<Private Item={Home}></Private>}></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
}

export default RoutesApp