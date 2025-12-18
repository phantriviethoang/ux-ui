import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="pt-1 pl-1 flex justify-between w-full items-center border border-b-2 border-b-gray-500">
			<img
				src="/logo.png"
				alt="Logo"
				className="w-10 h-10"
			/>
			<nav className="flex space-x-6 ml-auto mr-3">
				<span>De thi online</span>
				<span>Flashcards</span>
				<Link to="/dangnhap">Dang nhap</Link>
				<span>Dang ky</span>
			</nav>
			<hr />
		</div>
	);
}
