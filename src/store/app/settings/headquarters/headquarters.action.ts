import { createAction } from '@reduxjs/toolkit'
import { IHeadquarter } from '../../../../modules/settings/headquarter/headquarter.d'
const fn_name = 'headquarters'

//Many
const setAll = createAction<IHeadquarter[]>(`${fn_name}/setAll`)
const dropAll = createAction(`${fn_name}/dropAll`)

//Unit
const addOne = createAction<IHeadquarter>(`${fn_name}/addOne`)
const dropOne = createAction<number>(`${fn_name}/dropOne`)
const editOne = createAction<IHeadquarter>(`${fn_name}/editOne`)

export default {
  setAll,
  dropAll,

  addOne,
  dropOne,
  editOne
}