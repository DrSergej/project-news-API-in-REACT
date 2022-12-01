import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = (props) => {
	return (
		<div>
			<img src={props.image} alt="" />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<p>{props.date}</p>
			<a href={props.url} target="_blank">
				Read original article
			</a>
			<Link to={`/article/${props.title}`}>Read article</Link>
		</div>
	);
};

export default NewsItem;
