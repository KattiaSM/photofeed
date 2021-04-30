import React from "react";

//create your first component
export function Prueba() {
	return (
		<div className="col-md-7 col-md-offset-2">
			<div className="panel">
				<div className="panel-body">
					<textarea
						className="form-control"
						rows="2"
						placeholder="What do you want to plant?"></textarea>
					<div className="mar-top">
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
						<button
							className="btn btn-primary btn-md-end"
							type="submit">
							Share
						</button>
					</div>
					<div className="card mb-3">
						<img
							src="https://undergreen.net/wp-content/uploads/sites/6/2019/05/sukkulenten-kakteen-pflege-2-540x540.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="https://http2.mlstatic.com/D_NQ_NP_745405-MLM25008365055_082016-O.jpg"
							className="card-img-bottom"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
