import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dangnhap from "./Auth/Dangnhap";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/dangnhap"
				element={<Dangnhap />}
			/>
		</Routes>
	);
}

export default App;
