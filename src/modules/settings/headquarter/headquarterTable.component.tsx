

import { IHeadquarter } from "./headquarter.d";
import useHeadquarters from "../../../hooks/useHeadquarters.hook";


const HeadquarterTableComponent = () => {

  const { headquarters } = useHeadquarters()


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
            <th scope="col" className="px-6 py-3 text-center">
              color
            </th>
          </tr>
        </thead>

        <tbody>
          {headquarters?.map(data => <RowComponent data={data} />)}
        </tbody>

      </table>
    </div>
  )
}

const RowComponent = (props: { data: IHeadquarter }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <ColumnComponent title={props.data.id?.toString()}> </ColumnComponent>
      <ColumnComponent title={props.data.name?.toString()}> </ColumnComponent>
      <td scope="col" className="px-6 py-3 text-center flex justify-center">
        <div className=" w-4 h-4" style={{ backgroundColor: props.data.color }}></div>
      </td>
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

export default HeadquarterTableComponent