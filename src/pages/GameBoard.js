import React from 'react';
import Board from "../components/Board";
import {useSelector} from "react-redux";
import MyStreets from "../components/MyStreets";

const GameBoard = () => {
    const money = useSelector(state => state.money)

    return (
        <div className="container">
            <h1>Money: {money} $</h1>
            <div className="board-wrap">
                <Board/>
                <MyStreets/>
            </div>
        </div>
    );
};

export default GameBoard;