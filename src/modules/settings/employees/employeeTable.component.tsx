import useEmployees from "../../../hooks/useEmployees.hook"
import { IEmployee } from "../../../interfaces/employees"




const EmployeeTableComponent = () => {

  const { employees } = useEmployees()


  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              nombre
            </th>
          </tr>
        </thead>

        <tbody>
          {employees?.map(data => <RowComponent key={data.id} data={data} />)}
        </tbody>

      </table>
    </div>
  )
}

const RowComponent = (props: { data: IEmployee }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <ColumnComponent title={props.data.id?.toString()}> </ColumnComponent>
      <ColumnComponent title={props.data.name?.toString()}> </ColumnComponent>
    </tr>
  )
}

const ColumnComponent = (props: { children?: React.ReactNode, title: string }) => {
  return (
    <td scope="col" className="px-6 py-3 text-center">
      {props.title}
      {props.children}
    </td>
  )
}

export default EmployeeTableComponent