


const SalesLogPage = () => {
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

					</tr>
				</thead>
				<tbody>
					<RowComponent></RowComponent>

				</tbody>
			</table>
		</div>

	)
}

const RowComponent = () => {
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<td className="px-6 py-4">
			2
			</td>
			<td className="px-6 py-4">
			Camiseta
			</td>
			<td className="px-6 py-4">
			45.000
			</td>
			<td className="px-6 py-4">
			2
			</td>
			<td className="px-6 py-4">
			90.000
			</td>
			<td className="px-6 py-4">
			1/6/2025
			</td>
			<td className="px-6 py-4">
			Angela
			</td>
			<td className="px-6 py-4">
			Efectivo
			</td>
		</tr>
	)
}

export default SalesLogPage