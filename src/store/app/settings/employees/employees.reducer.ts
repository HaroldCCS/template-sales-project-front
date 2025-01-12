import { createReducer } from '@reduxjs/toolkit'

import ACTIONS from './employees.action'
import { IEmployee } from '../../../../interfaces/employees.d'

import env from '../../../../settings/env'
import mock from './data.json'

const name_storage = 'employees'
interface IReducer { [name_storage]: IEmployee[] }


const initialState: IReducer = { [name_storage]: env.DATA_MOCK ? mock : [] }

const employeeReducer = createReducer<IReducer>(initialState, (builder) => {
    builder.addCase(ACTIONS.setAll, (state, action) => {
        state[name_storage] = action.payload 
    })

    builder.addCase(ACTIONS.dropAll, (state) => {
        state[name_storage] = []
    })

    builder.addCase(ACTIONS.addOne, (state, action) => {
        state[name_storage].push(action.payload)
    })

    builder.addCase(ACTIONS.dropOne, (state, action) => {
        state[name_storage] = state[name_storage].filter(item => item.id !== action.payload)
    })

    builder.addCase(ACTIONS.editOne, (state, action) => {
        state[name_storage] = state[name_storage].map(item => item.id === action.payload.id ? action.payload : item)
    })
})

export default employeeReducer
