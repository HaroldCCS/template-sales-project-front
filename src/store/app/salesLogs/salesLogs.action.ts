import { createAction } from '@reduxjs/toolkit'
import { ISalesLog } from '../../../interfaces/salesLog'
const fn_name = 'salesLogs'

//Many
const setAll = createAction<ISalesLog[]>(`${fn_name}/setAll`)
const dropAll = createAction(`${fn_name}/dropAll`)

//Unit
const addOne = createAction<ISalesLog>(`${fn_name}/addOne`)
const dropOne = createAction<number>(`${fn_name}/dropOne`)
const editOne = createAction<ISalesLog>(`${fn_name}/editOne`)

export default {
  setAll,
  dropAll,

  addOne,
  dropOne,
  editOne
}