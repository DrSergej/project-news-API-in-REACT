import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NewsOverview from "./pages/NewsOverview";
import NewsItemDetails from "./pages/NewsItemDetails";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<NewsOverview />}></Route>
					<Route path="/article/:title" element={<NewsItemDetails />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
