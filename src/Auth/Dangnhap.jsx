import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dangnhap() {
	return (
		<div className="">
			<Header />
			<div className="h-screen flex flex-col items-center justify-center bg-blue-100">
				<div className="bg-white w-80 h-80">
					<h1 className="text-2xl text-center py-2">Dang nhap</h1>
					<div className="flex">
						<img
							className="w-25 pl-3 object-contain"
							src="logo.png"
							alt=""
						/>
						<div className="mt-2 flex flex-col pl-4 space-y-3 mx-auto">
							<label htmlFor="email">
								<input
									name="email"
									type="text"
									placeholder="Taikhoan"
								/>
							</label>
							<label htmlFor="password">
								<input
									name="password"
									type="password"
									placeholder="******"
								/>
							</label>
							<button className="bg-blue-400 rounded-full border-2 border-gray-500 w-30 mx-auto">
								Dang nhap
							</button>
							<div className="flex  font-normal text-xs space-x-3 pt-5">
								<a href="#">Dang ky tai khoan</a>
								<a href="#">Quen mat khau?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
