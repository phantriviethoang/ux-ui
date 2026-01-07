export default function IndexLogin() {
	return (
		<div className="h-full">
			<div className="bg-blue-100 flex flex-col w-full justify-center items-center h-60">
				<span className="font-bold text-xl py-5">
					Chao mung ban den voi LingGo!!!
				</span>
				<span className="font-semibold text-lg w-3/4 pb-10 flex flex-col justify-center items-center">
					Chuc ban co trai nghiem hoc tap hieu qua voi LingGo.
					<span className="">Hay bat dau hoc tap ngay hom nay</span>
				</span>
			</div>

			<div>
				<div className="flex justify-center flex-col items-center">
					<div className="font-lg font-semibold py-5">Khoa hoc Online noi bat</div>
					<div className="grid grid-cols-3 gap-10">
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
