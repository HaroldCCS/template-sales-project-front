import { createAction } from '@reduxjs/toolkit'
import { IPaymentMethod } from '../../../../interfaces/paymentMethods'
const fn_name = 'paymentMethods'

//Many
const setAll = createAction<IPaymentMethod[]>(`${fn_name}/setAll`)
const dropAll = createAction(`${fn_name}/dropAll`)

//Unit
const addOne = createAction<IPaymentMethod>(`${fn_name}/addOne`)
const dropOne = createAction<number>(`${fn_name}/dropOne`)
const editOne = createAction<IPaymentMethod>(`${fn_name}/editOne`)

export default {
  setAll,
  dropAll,

  addOne,
  dropOne,
  editOne
}