import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsOverview.css";

const NewsOverview = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/everything?q=apple&from=2023-03-22&to=2023-03-22&sortBy=popularity&apiKey=${API_KEY}`
		)
			.then((res) => res.json())
			.then((json) => setNews(json.articles));
		console.log(news);
	}, []);

	return (
		<section className="grid">
			<h1>This is News Overwiev</h1>
			{news.map((elt, index) => (
				<NewsItem
					key={index + elt}
					image={elt.urlToImage}
					title={elt.title}
					description={elt.content}
					date={new Date(elt.publishedAt).toLocaleString("de-DE", {
						dateStyle: "medium",
					})}
					url={elt.url}
				/>
			))}
		</section>
	);
};

export default NewsOverview;
