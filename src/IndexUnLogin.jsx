import Footer from "./components/Footer";
import Header from "./components/Header";

export default function IndexUnLogin() {
    return (
        <>
            <Header />

            <div className="min-h-screen flex flex-col">
                <div className="bg-gray-200 pt-10 pb-50">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-2xl">
                            LUYỆN ĐỀ THI KHÔNG GIỚI HẠN
                        </h2>

                        <ul className="mt-4 list-disc">
                            <li>Kho đề thi phong phú: IELTS, TOEIC, HKS, ...</li>
                            <li>
                                Giao diện đơn giản, dễ thao tác, phù hợp cho việc
                                học từ vựng.
                            </li>
                            <li>
                                Nội dung đa dạng, từ cơ bản đến nâng cao.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <button className="bg-blue-500 py-3 px-6 rounded-full text-white cursor-pointer">
                        Tham gia ngay!
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
