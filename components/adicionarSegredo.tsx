import api from "@/services/api"
import setCor from "@/services/cor"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { mutate } from "swr"

export default function AdicionarSegredo() {
	interface ISegredo {
		segredo: string,
		cor: string
	}

	const [model, setModel] = useState<ISegredo>({
		segredo: '',
		cor: setCor()
	})

	const handleChange = (event) => {
		const target = event.target

		setModel({
			...model,
			[target.name]: target.value,
		})
	}

	// const updateModel = (event: FormEvent<HTMLInputElement>) => {}
	// const onSubmit    = (event: FormEvent<HTMLFormElement>)=>{}

	const updateModel = async () => {
		await api.post('/api/segredos', model);
		
	}

	return (
		<div>
			<div className="fixed-action-btn click-to-toggle">
				<a href="/" className="btn-floating btn-large green-blue"> <i className="material-icons">add</i> </a>
			</div>

			<div className="row">
				<div className="col s12 m3 "></div>
				<div className="col s12 m6">
					<div className="card blue-grey darken-2">
						<div className="card-content white-text">
							<span className="card-title"></span>

							<textarea value={model.segredo} onChange={handleChange}
								name="segredo" id="segredo" placeholder="you need help..."
								className="materialize-textarea white-text" required >
							</textarea>

							<button onClick={updateModel}
								className="btn waves-effect waves-light right pulse" >tellme
							</button>

						</div>
					</div>
				</div>
				<div className="col s12 m3"></div>
			</div>

		</div>
	)
}
