import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./NewsItemDetails.css";

const NewsItemDetails = () => {
	let [filteredData, setFilteredData] = useState([]);
	let { title } = useParams();

	console.log("FilteredData: ", filteredData);

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=Apple&from=2022-12-01&sortBy=popularity&apiKey=b8d33b7d31d34342aec20ede3cec37d8"
		)
			.then((response) => response.json())
			.then((json) => setFilteredData(json.articles));
	}, []);

	let filterDetail = filteredData.filter((elt) => {
		return (
			elt.title.toString().toLowerCase() === title.toString().toLowerCase()
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
				</div>
			))}
		</div>
	);
};

export default NewsItemDetails;
