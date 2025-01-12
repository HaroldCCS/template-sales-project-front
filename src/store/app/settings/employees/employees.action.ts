import { createAction } from '@reduxjs/toolkit'
import { IEmployee } from '../../../../interfaces/employees.d'
const fn_name = 'employees'

//Many
const setAll = createAction<IEmployee[]>(`${fn_name}/setAll`)
const dropAll = createAction(`${fn_name}/dropAll`)

//Unit
const addOne = createAction<IEmployee>(`${fn_name}/addOne`)
const dropOne = createAction<number>(`${fn_name}/dropOne`)
const editOne = createAction<IEmployee>(`${fn_name}/editOne`)

export default {
  setAll,
  dropAll,

  addOne,
  dropOne,
  editOne
}