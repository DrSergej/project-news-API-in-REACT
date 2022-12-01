import { useState, useEffect } from "react";
import "./NewsOverview.css";
import NewsItem from "./NewsItem";

const NewsOverview = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=Apple&from=2022-12-01&sortBy=popularity&apiKey=b8d33b7d31d34342aec20ede3cec37d8"
		)
			.then((res) => res.json())
			.then((json) => setNews(json.articles));
	}, []);
	console.log(news);

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
