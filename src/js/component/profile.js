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
						placeholder="What do you want to plant?"></textarea>
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
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Dropdown button
								</button>
								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton1">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</div>
						</div>
						<img
							src="https://casaydiseno.com/wp-content/uploads/2016/05/tierra-fertil-abononatural.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">23 Likes</h5>
							<p className="card-text">
								Preparar el suelo antes de sembrar tu huerta
								permitira una siembra eficiente. Quitar la
								maleza, allanar y abonar son los pasos basicos
								para iniciar a plantar. #hortalizas #organico
								#hechoencasa.
							</p>
							<button
								type="button"
								className="btn btn-light btn-md">
								<i className="far fa-heart"></i>
							</button>
							<button
								type="button"
								className="btn btn-light btn-md">
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
									<i className="fas fa-caret-square-down"></i>
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
									className="btn btn-light btn-md">
									<i className="far fa-heart"></i>
								</button>
								<button
									type="button"
									className="btn btn-light btn-md">
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
										<i className="fas fa-caret-square-down"></i>
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
										className="btn btn-light btn-md">
										<i className="far fa-heart"></i>
									</button>
									<button
										type="button"
										className="btn btn-light btn-md">
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
