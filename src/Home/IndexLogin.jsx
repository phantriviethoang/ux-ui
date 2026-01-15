import { mockData } from "../../data/mock-data";

export default function IndexLogin() {
    console.log(mockData)

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

                    {/* Grid Map dữ liệu */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {mockData.khocHocs.map((khoaHoc) => (
                            <div
                                key={khoaHoc.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden flex flex-col"
                            >
                                {/* Thumbnail giả định */}
                                <div className="h-3 bg-blue-300 w-full"></div>

                                <div className="p-6 flex flex-col grow">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2 min-h-14">
                                        {khoaHoc.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 grow">
                                        {khoaHoc.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                                            {khoaHoc.duration}
                                        </span>
                                        <span className={`text-xs font-semibold ${khoaHoc.status === 'Chua sẵn sàng' ? 'text-red-500' : 'text-green-600'}`}>
                                            {khoaHoc.status}
                                        </span>
                                    </div>

                                    <button
                                        disabled={khoaHoc.status === 'Chua sẵn sàng'}
                                        className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors ${khoaHoc.status === 'Chua sẵn sàng'
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-green-500 text-white hover:bg-green-700'
                                            }`}
                                    >
                                        Luyện tập ngay
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
