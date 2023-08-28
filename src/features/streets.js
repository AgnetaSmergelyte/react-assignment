import {createSlice} from "@reduxjs/toolkit";

export const streetsSlice = createSlice({
    name: "streets",
    initialState: {
        playerFigure: '',
        money: 200,
        streets: [
            {
                id: 2,
                name: 'V.Krėvės pr.',
                color: '#e772cb',
                price: 99,
                bought: false
            },
            {
                id: 3,
                name: 'Savanorių pr.',
                color: '#c68fe1',
                price: 83,
                bought: false
            },
            {
                id: 4,
                name: 'Taikos pr',
                color: '#9471ef',
                price: 60,
                bought: false
            },
            {
                id: 5,
                name: 'Pramonės pr.',
                color: '#7c46ff',
                price: 55,
                bought: false
            },
            {
                id: 6,
                name: 'Draugystės g.',
                color: '#5770e8',
                price: 67,
                bought: false
            },
            {
                id: 7,
                name: 'Šiaurės pr.',
                color: '#5cbffd',
                price: 70,
                bought: false
            },
            {
                id: 8,
                name: 'Baltų pr.',
                color: '#54ccc2',
                price: 61,
                bought: false
            },
            {
                id: 9,
                name: 'Vilniaus g.',
                color: '#158f94',
                price: 100,
                bought: false
            },
            {
                id: 10,
                name: 'Laisvės al.',
                color: '#05835c',
                price: 150,
                bought: false
            },            {
                id: 11,
                name: 'Radvilėnų pl.',
                color: '#129612',
                price: 75,
                bought: false
            },
            {
                id: 12,
                name: 'Sporto g.',
                color: '#8ede20',
                price: 66,
                bought: false
            },
            {
                id: 13,
                name: 'Kęstučio g.',
                color: '#e3e30f',
                price: 70,
                bought: false
            },            {
                id: 14,
                name: 'Gedimino pr.',
                color: '#c2b521',
                price: 76,
                bought: false
            },            {
                id: 15,
                name: 'Studentų g.',
                color: '#e79916',
                price: 67,
                bought: false
            },            {
                id: 16,
                name: 'M. Jankaus g.',
                color: '#cb7010',
                price: 45,
                bought: false
            },            {
                id: 17,
                name: 'Kauko al.',
                color: '#d34b10',
                price: 53,
                bought: false
            },
            {
                id: 18,
                name: 'Partizanų g.',
                color: '#f12da3',
                price: 55,
                bought: false
            },
        ],
        boughtStreets: [],
        error: ''
    },
    reducers: {
        chooseFigure: (state, action) => {
            state.playerFigure = action.payload;
        },
        updateMoney: (state, action) => {
            state.money = action.payload;
        },
        buyNewStreet: (state, action) => {
            state.streets.map(x => {
                if (x.id === action.payload) {
                    x.bought = true;
                    state.boughtStreets.push(x);
                }
            })
        },
        removeStreet: (state, action) => {
            state.streets.map(x => {
                if (x.id === action.payload) {
                    x.bought = false;
                }
            })
            state.boughtStreets = state.boughtStreets.filter(x => x.id !== action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {chooseFigure, updateMoney, buyNewStreet, removeStreet, setError} = streetsSlice.actions;
export default streetsSlice.reducer;