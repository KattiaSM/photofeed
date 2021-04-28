import React from "react";

//create your first component
export function Profile() {
	return (
		<div className="panel">
			<div className="panel-body">
				<textarea
					className="form-control"
					rows="2"
					placeholder="What are you thinking?"></textarea>
				<div className="mar-top clearfix">
					<button
						className="btn btn-sm btn-primary pull-right"
						type="submit">
						<i className="fa fa-pencil fa-fw"></i>Share
					</button>
					<a
						className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
						href="#"
						data-original-tittle="Add Photo"
						data-toggle="tooltip"></a>
				</div>
			</div>

			<div className="container">
				<div className="card">
					<div className="card-header">
						<h4 className="titulo">Juntos</h4>
						<button type="button" className="btn btn-link">
							12/14
						</button>
					</div>
					<img
						src="https://2img.net/h/oi41.tinypic.com/6f9nv7.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">23 Likes</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque non elit ornare, interdum libero id,
							ultrices sem. Duis molestie elementum ipsum et
							eleifend. Nunc porta.
						</p>
						<button type="button" className="btn btn-light btn-sm">
							<i className="far fa-heart"></i>
						</button>
						<input
							type="text"
							className="form-control comentario"
							id="recipient-name"
							value="Escriba un comentario..."
						/>
						<button type="button" className="btn btn-light btn-sm">
							<i className="fas fa-ellipsis-v"></i>
						</button>
					</div>
					<div className="card">
						<div className="card-header">
							<h4 className="titulo">Cocinando</h4>
							<button type="button" className="btn btn-link">
								03/15
							</button>
						</div>
						<img
							src="https://i.pinimg.com/originals/f5/b9/14/f5b914792c704ea5c7e22f8dea44f901.png"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">20 Likes</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Quisque non elit ornare,
								interdum libero id, ultrices sem. Duis molestie
								elementum ipsum et eleifend. Nunc porta.
							</p>
							<button
								type="button"
								className="btn btn-light btn-sm">
								<i className="far fa-heart"></i>
							</button>
							<input
								type="text"
								className="form-control comentario"
								id="recipient-name"
								value="Escriba un comentario..."
							/>
							<button
								type="button"
								className="btn btn-light btn-sm">
								<i className="fas fa-ellipsis-v"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
