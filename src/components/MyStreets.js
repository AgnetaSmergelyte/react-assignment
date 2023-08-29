import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeStreet, updateMoney, setError} from "../features/streets";

const MyStreets = () => {
    const money = useSelector(state => state.money);
    const boughtStreets = useSelector(state => state.boughtStreets);
    const dispatch = useDispatch();

    function sellStreet(id) {
        const price = boughtStreets.find(x => x.id === id).price;
        const newMoney = money + (price / 2);
        dispatch(setError(''));
        dispatch(updateMoney(newMoney));
        dispatch(removeStreet(id));
    }

    return (
        <div className="street-list">
            {boughtStreets.map(x =>
                <div key={x.id}>
                    <div className="street-name" style={{backgroundColor: x.color}}>{x.name}</div>
                    <button onClick={() => sellStreet(x.id)}>SELL (+{x.price / 2}$)</button>
                </div>)}
        </div>
    );
};

export default MyStreets;