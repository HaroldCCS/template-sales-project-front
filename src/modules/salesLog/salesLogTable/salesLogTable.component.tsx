import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

import MoneyFormatter from "../../../utility/MoneyFormatter";
import { ISalesLog } from "../../../interfaces/salesLog";



const SalesLogTableComponent = ({ isShort }: { isShort: boolean }) => {

	const [sales, setSales] = useState<ISalesLog[]>([])

	useEffect(() => {

		//peticion al back
		const response: ISalesLog[] = [{
			id: 1,
			description: 'Camiseta',
			price: 10000,
			quantity: 2,
			finalPrice: 20000,
			date: new Date(),
			registrant: 'Sofia',
			method: 'NEQUI',
			file: ''
		}]

		setSales(response)

	}, [])

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					{isShort ? <TableHeaderShortComponent /> : <TableHeaderCompleteComponent />}
				</thead>

				<tbody>
					{sales?.map(data => isShort ? <RowShortComponent sale={data} /> : <RowCompleteComponent sale={data} />)}
				</tbody>

			</table>
		</div>
	)
}

const TableHeaderShortComponent = () => {
	return (
		<tr>
			<th scope="col" className="px-6 py-3 text-center">
				id
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Descripcion
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Precion final
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Fecha de registro
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Metodo de pago
			</th>
		</tr>
	)
}

const TableHeaderCompleteComponent = () => {
	return (
		<tr>
			<th scope="col" className="px-6 py-3 text-center">
				id
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Descripcion
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Precio
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Cantidad
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Precion final
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Fecha de registro
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Registrante
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Metodo de pago
			</th>
			<th scope="col" className="px-6 py-3 text-center">
				Comprobante
			</th>
		</tr>
	)
}

const RowShortComponent = (props: { sale: ISalesLog }) => {
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<ColumnComponent title={props.sale.id?.toString()}> </ColumnComponent>
			<ColumnComponent title={props.sale.description}> </ColumnComponent>
			<ColumnComponent title={MoneyFormatter(props.sale.finalPrice)}> </ColumnComponent>
			<ColumnComponent title={new Date(props.sale.date)?.toLocaleString()}> </ColumnComponent>
			<ColumnComponent title={props.sale.method}> </ColumnComponent>
		</tr>
	)
}

const RowCompleteComponent = (props: { sale: ISalesLog }) => {
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<ColumnComponent title={props.sale.id?.toString()}> </ColumnComponent>
			<ColumnComponent title={props.sale.description}> </ColumnComponent>
			<ColumnComponent title={MoneyFormatter(props.sale.price)}> </ColumnComponent>
			<ColumnComponent title={props.sale.quantity?.toString()}> </ColumnComponent>
			<ColumnComponent title={MoneyFormatter(props.sale.finalPrice)}> </ColumnComponent>
			<ColumnComponent title={new Date(props.sale.date)?.toLocaleString()}> </ColumnComponent>
			<ColumnComponent title={props.sale.registrant}> </ColumnComponent>
			<ColumnComponent title={props.sale.method}> </ColumnComponent>
			<ColumnComponent title={''}>
				<FaEye size={20} className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer flex w-full items-center justify-center" />
			</ColumnComponent>
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

export default SalesLogTableComponent