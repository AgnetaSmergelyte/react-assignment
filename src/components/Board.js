import React, {useEffect, useState} from 'react';
import {findAllByDisplayValue} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {buyNewStreet, updateMoney, setError} from "../features/streets";

const Board = () => {
    const figure = useSelector(state => state.playerFigure);
    const streets = useSelector(state => state.streets);
    const boughtStreets = useSelector(state => state.boughtStreets);
    const money = useSelector(state => state.money);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();
    const nav = useNavigate();
    const [playerPosition, setPlayerPosition] = useState(1);
    const [rolled, setRolled] = useState(6);

    useEffect(() => {
        if (!figure) nav("/");
    }, [])

    const gameMap = [
        1, 2, 3, 4, 5, 6,
        18, 0, 0, 0, 0, 7,
        17, 0, 0, 0, 0, 8,
        16, 0, 0, 0, 0, 9,
        15, 14, 13, 12, 11, 10
    ]
    const dice = [
        ['', '', '', '', 'dot', '', '', '', ''],
        ['', '', 'dot', '', '', '', 'dot', '', ''],
        ['', '', 'dot', '', 'dot', '', 'dot', '', ''],
        ['dot', '', 'dot', '', '', '', 'dot', '', 'dot'],
        ['dot', '', 'dot', '', 'dot', '', 'dot', '', 'dot'],
        ['dot', '', 'dot', 'dot', '', 'dot', 'dot', '', 'dot'],
    ]

    function rollDice() {
        dispatch(setError(''));
        const rnd = Math.floor(Math.random() * 6) + 1;
        setRolled(rnd);
        const position = playerPosition + rnd;
        if (position > 18) {
            setPlayerPosition(position - 18);
            const newMoney = money + 200;
            dispatch(updateMoney(newMoney));
        } else {
            setPlayerPosition(position);
        }
    }

    function buyStreet(id) {
        const price = streets.find(x => x.id === id).price;
        if (money >= price) {
            dispatch(buyNewStreet(id));
            dispatch(updateMoney(money - price));
        } else {
            dispatch(setError('NOT ENOUGH MONEY'));
        }
    }

    return (
        <div className="board">
            {gameMap.map((x, i) => (
                <div key={i} className={x !== 0 ? "card" : ""}>
                    {x === 1 && <div className="card">
                        <h3>Start</h3>
                        {x === playerPosition ? <div className={"spot " + figure}></div> : <div className="spot"></div>}
                    </div>}
                    {x > 1 && streets.map(y => y.id === x && <div className="card" key={y.id}>
                        <div className="street-name" style={{backgroundColor: y.color}}>{y.name}</div>
                        <div className="card-label">
                            <em>Price: {y.price}$</em>
                            {x === playerPosition && <div className={"spot " + figure}></div>}
                        </div>
                        {!y.bought && x === playerPosition ?
                            <button onClick={() => buyStreet(y.id)}>BUY</button> :
                            !y.bought && <div className="fake-btn">BUY</div>}
                        {y.bought && <b className="text-dark">BOUGHT</b>}
                    </div>)
                    }
                </div>
            ))}
            <div className="dice">
                {dice[rolled - 1].map((x, i) => <div key={i} className={x}></div>)}
            </div>
            <div className="btn-roll" onClick={rollDice}>ROLL DICE</div>
            <div className="error-msg-big">{error}</div>
        </div>
    );
};

export default Board;