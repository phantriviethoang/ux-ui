import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="bg-white text-black font-hanken-grotesk">
            <div class="px-10">
                <nav class="flex items-center justify-between border-b border-white/10 py-4">
                    <div>
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-10 h-10"
                            />
                        </Link>
                    </div>
                    <div class="space-x-6 font-bold">
                        <Link className="hover:underline hover:text-gray-800" to="/dethi">De thi</Link>
                        <Link className="hover:underline hover:text-gray-800" to="/chonthe">FlashCard</Link>
                    </div>
                    <div class="space-x-6 font-bold flex">
                        {/* <form
							method="POST"
							action="/logout"
						>
							<button>Log Out</button>
						</form> */}
                        <Link className="hover:underline hover:text-gray-800" to="/">Log Out</Link>
                    </div>
                    <div class="space-x-6 font-bold">
                        <Link className="hover:underline hover:text-gray-800" to="/dangnhap">Sign Up</Link>
                        <Link className="hover:underline hover:text-gray-800" to="/dangky">Log In</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
