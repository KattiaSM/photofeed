import React from "react";

//create your first component
export function Profile() {
	return (
		<div className="col-md-7 col-md-offset-2">
			<div className="panel">
				<div className="panel-body">
					<textarea
						className="form-control"
						rows="2"
						placeholder="What are you thinking?"></textarea>
					<div className="mar-top clearfix">
						<button
							className="btn btn-md btn-primary pull-right"
							type="submit">
							Share
						</button>
						<button type="button" className="btn btn-light btn-md">
							<i className="fas fa-camera"></i>
						</button>
						<button type="button" className="btn btn-light btn-md">
							<i className="far fa-file-image"></i>
						</button>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-header">
							<h4 className="titulo">Preparando el suelo</h4>
							<button type="button" className="btn btn-link">
								1/3
							</button>
						</div>
						<img
							src="https://casaydiseno.com/wp-content/uploads/2016/05/tierra-fertil-abononatural.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">23 Likes</h5>
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
							<button
								type="button"
								className="btn btn-light btn-sm">
								<i className="far fa-comment-alt"></i>
							</button>
							<input
								type="text"
								className="form-control comentario"
								id="recipient-name"
								value="Escriba un comentario..."
							/>
						</div>
						<div className="card">
							<div className="card-header">
								<h4 className="titulo">Mis chiles jalapeños</h4>
								<button type="button" className="btn btn-link">
									2/3
								</button>
							</div>
							<img
								src="https://http2.mlstatic.com/D_NQ_NP_745405-MLM25008365055_082016-O.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">20 Likes</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Quisque non elit ornare,
									interdum libero id, ultrices sem. Duis
									molestie elementum ipsum et eleifend. Nunc
									porta.
								</p>
								<button
									type="button"
									className="btn btn-light btn-sm">
									<i className="far fa-heart"></i>
								</button>
								<button
									type="button"
									className="btn btn-light btn-sm">
									<i className="far fa-comment-alt"></i>
								</button>
								<input
									type="text"
									className="form-control comentario"
									id="recipient-name"
									value="Escriba un comentario..."
								/>
							</div>
							<div className="card">
								<div className="card-header">
									<h4 className="titulo">Suculentas</h4>
									<button
										type="button"
										className="btn btn-link">
										3/3
									</button>
								</div>
								<img
									src="https://undergreen.net/wp-content/uploads/sites/6/2019/05/sukkulenten-kakteen-pflege-2-540x540.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">20 Likes</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque non elit
										ornare, interdum libero id, ultrices
										sem. Duis molestie elementum ipsum et
										eleifend. Nunc porta.
									</p>
									<button
										type="button"
										className="btn btn-light btn-sm">
										<i className="far fa-heart"></i>
									</button>
									<button
										type="button"
										className="btn btn-light btn-sm">
										<i className="far fa-comment-alt"></i>
									</button>
									<input
										type="text"
										className="form-control comentario"
										id="recipient-name"
										value="Escriba un comentario..."
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
