import './App.css';
import {Routes, Route} from "react-router-dom";
import StartGame from "./pages/StartGame";
import GameBoard from "./pages/GameBoard";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartGame/>}/>
                <Route path="/game" element={<GameBoard/>}/>
            </Routes>
        </>
    );
}

export default App;
