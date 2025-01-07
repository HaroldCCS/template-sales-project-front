import { createReducer } from '@reduxjs/toolkit'

import ACTIONS from './paymentMethods.action'
import { IPaymentMethod } from '../../../../modules/settings/paymentMethods/paymentMethods'

const name_storage = 'paymentMethods'
interface IReducer { [name_storage]: IPaymentMethod[] }

const initialState: IReducer = { [name_storage]: [] }

const paymentMethodReducer = createReducer<IReducer>(initialState, (builder) => {
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

export default paymentMethodReducer
