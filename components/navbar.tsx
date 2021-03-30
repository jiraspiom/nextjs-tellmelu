import Link from "next/link";
import AdicionarSegredo from "./adicionarSegredo";

export default function NavBar() {
	return (
		<div>
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
					<AdicionarSegredo/>
					</div>
				</nav>
			</div>
		</div>
	)
}
