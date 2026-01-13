import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dangnhap from "./Auth/Dangnhap";
import Dangky from "./Auth/Dangky";
import Quenmatkhau from "./Auth/Quenmatkhau";
import IndexUnLogin from "./Home/IndexUnLogin";
import Chonthe from "./Flashcard/Chonthe";
import Flashcard from "./Flashcard/Flashcard";
import Dethi from "./Dethi/Dethi";
import Lamdethi from "./Dethi/Lamdethi";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/index"
                element={<IndexUnLogin />}
            />
            <Route
                path="/chonthe"
                element={<Chonthe />}
            />
            <Route
                path="/flashcard"
                element={<Flashcard />}
            />
            <Route
                path="/dethi"
                element={<Dethi />}
            />
            <Route
                path="/lamdethi"
                element={<Lamdethi />}
            />
            <Route
                path="/dangnhap"
                element={<Dangnhap />}
            />
            <Route
                path="/dangky"
                element={<Dangky />}
            />
            <Route
                path="/quenmatkhau"
                element={<Quenmatkhau />}
            />
        </Routes>
    );
}

export default App;
