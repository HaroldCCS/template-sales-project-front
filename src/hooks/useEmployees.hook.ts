import { IEmployee } from '../interfaces/employees.d';
import { useAppDispatch, useAppSelector } from '../store';
import employeesAction from '../store/app/settings/employees/employees.action';

function useEmployees() {
  const data = useAppSelector(state => state?.employees.employees);
  const dispatch = useAppDispatch();

  const addOne = async (data: IEmployee) => {
    dispatch(employeesAction.addOne(data));
  }

  const editOne = async (data: IEmployee) => {
    dispatch(employeesAction.editOne(data));
  }

  const dropOne = async (id: number) => {
    dispatch(employeesAction.dropOne(id));
  }

  return {
    addOne,
    editOne,
    dropOne,
    employees: data
  };
}

export default useEmployees;