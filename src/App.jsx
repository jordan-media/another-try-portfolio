// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import ProjectDetail from "./pages/ProjectDetail";
import Error from "./pages/Error";



const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/projects" element={<Projects/>} />
					<Route path="/projects/:projectId" element={<ProjectDetail/>} />
					<Route path="*" element={<Error />}/>
					{/* 별은 주소가 틀릴경우 무조건 에러 페이지로 이동하게 해준다 */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
