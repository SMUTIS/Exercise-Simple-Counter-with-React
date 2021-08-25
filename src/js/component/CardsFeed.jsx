import React from "react";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//create your third component
const Card = () => {
	return (
		<div className="card-group container-fluid">
			<div className="card border m-4 rounded">
				<img
					src="http://placekitten.com/g/500/325"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text text-justify">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-4 border rounded ">
				<img
					src="http://placekitten.com/g/500/325"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text text-justify">
						This card has supporting text below as a natural lead-in
						to additional content.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-4 border rounded">
				<img
					src="http://placekitten.com/g/500/325"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text text-justify">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-4 border rounded">
				<img
					src="http://placekitten.com/g/500/325"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text text-justify">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};
export default Card;
