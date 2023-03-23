import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./NewsItemDetails.css";

const NewsItemDetails = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;
	let [filteredData, setFilteredData] = useState([]);
	let { title } = useParams();

	console.log("FilteredData: ", filteredData);

	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/everything?q=apple&from=2023-03-22&to=2023-03-22&sortBy=popularity&apiKey=${API_KEY}`
		)
			.then((response) => response.json())
			.then((json) => setFilteredData(json.articles));
	}, []);

	let filterDetail = filteredData.filter((elt) => {
		return (
			elt.title.toString().toLowerCase() ===
			title.toString().toLowerCase()
		);
	});

	console.log("Filterdetail: ", filterDetail);

	return (
		<div className="filtered-article">
			{filterDetail.map((elt, index) => (
				<div key={index + elt}>
					<h1>{elt.title}</h1>
					<p>{elt.publishedAt}</p>
					<img src={elt.urlToImage} alt="" />
					<p>{elt.description}</p>
					<p>{elt.content}</p>
				</div>
			))}
		</div>
	);
};

export default NewsItemDetails;
