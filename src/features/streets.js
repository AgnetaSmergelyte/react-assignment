import {createSlice} from "@reduxjs/toolkit";

export const streetsSlice = createSlice({
    name: "streets",
    initialState: {
        playerFigure: '',
        money: 200,
        streets: [
            {
                id: 2,
                name: 'Partizanų g.',
                color: '#e772cb',
                price: 30,
                bought: false
            },
            {
                id: 3,
                name: 'Draugystės g.',
                color: '#c68fe1',
                price: 40,
                bought: false
            },
            {
                id: 4,
                name: 'Taikos pr',
                color: '#9471ef',
                price: 50,
                bought: false
            },
            {
                id: 5,
                name: 'Pramonės pr.',
                color: '#7c46ff',
                price: 60,
                bought: false
            },
            {
                id: 6,
                name: 'Savanorių pr.',
                color: '#5770e8',
                price: 70,
                bought: false
            },
            {
                id: 7,
                name: 'Šiaurės pr.',
                color: '#5cbffd',
                price: 80,
                bought: false
            },
            {
                id: 8,
                name: 'Baltų pr.',
                color: '#54ccc2',
                price: 90,
                bought: false
            },
            {
                id: 9,
                name: 'V.Krėvės pr.',
                color: '#158f94',
                price: 100,
                bought: false
            },
            {
                id: 10,
                name: 'Studentų g.',
                color: '#05835c',
                price: 110,
                bought: false
            },            {
                id: 11,
                name: 'Kauko al.',
                color: '#129612',
                price: 120,
                bought: false
            },
            {
                id: 12,
                name: 'Sporto g.',
                color: '#8ede20',
                price: 130,
                bought: false
            },
            {
                id: 13,
                name: 'M. Jankaus g.',
                color: '#e3e30f',
                price: 140,
                bought: false
            },            {
                id: 14,
                name: 'Radvilėnų pl.',
                color: '#c2b521',
                price: 150,
                bought: false
            },            {
                id: 15,
                name: 'Gedimino pr.',
                color: '#e79916',
                price: 160,
                bought: false
            },            {
                id: 16,
                name: 'Kęstučio g.',
                color: '#cb7010',
                price: 170,
                bought: false
            },            {
                id: 17,
                name: 'Vilniaus g.',
                color: '#d34b10',
                price: 180,
                bought: false
            },
            {
                id: 18,
                name: 'Laisvės al.',
                color: '#f12da3',
                price: 190,
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