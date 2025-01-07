import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

import MoneyFormatter from "../../../utility/MoneyFormatter";
import { ISalesLog } from "../salesLog.d";



const SalesLogTableComponent = () => {

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
			registrant: 'Angela',
			method: 'NEQUI',
			file: ''
		}]

		setSales(response)

	}, [])

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							id
						</th>
						<th scope="col" className="px-6 py-3">
							Descripcion
						</th>
						<th scope="col" className="px-6 py-3">
							Precio
						</th>
						<th scope="col" className="px-6 py-3">
							Cantidad
						</th>
						<th scope="col" className="px-6 py-3">
							Precion final
						</th>
						<th scope="col" className="px-6 py-3">
							Fecha de registro
						</th>
						<th scope="col" className="px-6 py-3">
							Registrante
						</th>
						<th scope="col" className="px-6 py-3">
							Metodo de pago
						</th>
						<th scope="col" className="px-6 py-3">
							Comprobante
						</th>
					</tr>
				</thead>

				<tbody>
					{sales?.map(data => <RowComponent sale={data} />)}
				</tbody>

			</table>
		</div>
	)
}

const RowComponent = (props: {sale: ISalesLog}) => {
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

const ColumnComponent = (props: {children?: React.ReactNode, title: string}) => {
	return (
		<td scope="col" className="px-6 py-3 text-center">
			{props.title}
			{props.children}
		</td>
	)
}

export default SalesLogTableComponent