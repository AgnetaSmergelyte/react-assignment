import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {chooseFigure} from "../features/streets";

const StartGame = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const currentFigure = useSelector(state => state.playerFigure);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const [allFigures, setAllFigures] = useState([{figure: 'dog', selected: ''},
        {figure: 'car', selected: ''},
        {figure: 'ship', selected: ''},
        {figure: 'shoe', selected: ''}]);

    function selectFigure(figure, index) {
        dispatch(chooseFigure(figure));
        const tempArr = [...allFigures];
        tempArr.map(x => x.selected = '');
        tempArr[index].selected = 'selected';
        setAllFigures(tempArr);
    }

    function startGame() {
        if (currentFigure) {
            setErrorMsg('');
            nav("/game");
        } else {
            setErrorMsg('Choose players figure!');
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="player-figures">
                    {allFigures.map((x, i) => <div key={i} className={x.figure + ' ' + x.selected}
                                                   onClick={() => selectFigure(x.figure, i)}></div>)}
                </div>
                <b className="error-msg">{errorMsg}</b>
                <button className="btn-start" onClick={startGame}>START GAME</button>
            </div>
        </div>
    );
};

export default StartGame;