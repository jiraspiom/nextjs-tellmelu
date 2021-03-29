export default function AdicionarSegredo() {

	return (
		<div>
			<div className="fixed-action-btn click-to-toggle">
				<a href="/" className="btn-floating btn-large green-blue"> <i className="material-icons">add</i> </a>
			</div>

			<div className="row">
				<div className="col s12 m3"></div>
				<form className="col s12 m6" action="/" method="POST">
					<div className="card  blue-grey darken-2">
						<div className="card-content white-text">
							<span className="card-title"></span>
							<textarea name="segredo" id="segredo" placeholder="you need help..."
								className="materialize-textarea white-text" required ></textarea>
							<button className="btn waves-effect waves-light pulse" >tellme</button>
						</div>
					</div>
				</form>
				<div className="col s12 m3"></div>
			</div>
		</div>
	)
}
