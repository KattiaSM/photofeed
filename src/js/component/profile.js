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
						<button type="button" className="btn btn-light btn-md">
							<a href="../home.js">
								<i className="far fa-object-group"></i>
							</a>
						</button>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-header">
							<h4 className="titulo">Preparando el suelo</h4>
							<small className="text-muted">
								Today 7:21 am - 25.04.2021
							</small>
							<div className="dropdown">
								<button
									className="dropdown-toggle btn btn-link"
									type="button"
									data-toggle="dropdown"></button>
								<ul className="dropdown-menu m-t-xs">
									<li>
										<a href="#">
											<i className="fas fa-pencil-alt"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-trash-alt"></i>
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
								<h4 className="titulo">Mis chiles</h4>
								<small className="text-muted">
									11:12 pm - 12.11.2020
								</small>
								<div className="dropdown">
									<button
										className="dropdown-toggle btn btn-link"
										type="button"
										data-toggle="dropdown"></button>
									<ul className="dropdown-menu m-t-xs">
										<li>
											<a href="#">
												<i className="fas fa-pencil-alt"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fas fa-trash-alt"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<img
								src="https://http2.mlstatic.com/D_NQ_NP_745405-MLM25008365055_082016-O.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">23 Likes</h5>
								<p className="card-text">
									Preparar el suelo antes de sembrar tu huerta
									permitira una siembra eficiente. Quitar la
									maleza, allanar y abonar son los pasos
									basicos para iniciar a plantar. #hortalizas
									#organico #hechoencasa.
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
									<small className="text-muted">
										4:21 pm - 12.06.2014
									</small>
									<div className="dropdown">
										<button
											className="dropdown-toggle btn btn-link"
											type="button"
											data-toggle="dropdown"></button>
										<ul className="dropdown-menu m-t-xs">
											<li>
												<a href="#">
													<i className="fas fa-pencil-alt"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fas fa-trash-alt"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<img
									src="https://undergreen.net/wp-content/uploads/sites/6/2019/05/sukkulenten-kakteen-pflege-2-540x540.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">23 Likes</h5>
									<p className="card-text">
										Preparar el suelo antes de sembrar tu
										huerta permitira una siembra eficiente.
										Quitar la maleza, allanar y abonar son
										los pasos basicos para iniciar a
										plantar. #hortalizas #organico
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
