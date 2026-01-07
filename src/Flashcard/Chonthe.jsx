import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Chonthe() {
    return (
        <div className="">
            <Header />
            <div className="mx-auto">
                <div className="mx-auto">
                    <div className="bg-gray-200 pt-10 pb-20">
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold text-2xl">Flashcards</h2>

                            <div className="mt-4 list-disc">
                                <p>Lựa chọn lĩnh vực từ vựng mà bạn cần</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3">
                        <div className="flex space-y-7 flex-col mx-5 my-15 border px-7 py-20 rounded-3xl text-center">
                            <div className="mb-15">Tu vung ve van phong</div>

                            <button className="border border-black rounded-4xl px-3 py-2 ">
                                Chi tiet
                            </button>
                        </div>

                        <div className="flex space-y-7 flex-col mx-5 my-15  border px-7 py-20 rounded-3xl text-center">
                            <div className="mb-15">Tu vung ve van phong</div>

                            <button className="border border-black rounded-4xl px-3 py-2">
                                Chi tiet
                            </button>
                        </div>

                        <div className="flex space-y-7 flex-col mx-5 my-15  border px-7 py-20 rounded-3xl text-center">
                            <div className="mb-15">Tu vung ve van phong</div>

                            <button className="border border-black rounded-4xl px-3 py-2">
                                Chi tiet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
