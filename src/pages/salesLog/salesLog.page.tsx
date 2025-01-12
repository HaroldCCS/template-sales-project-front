import { useState } from "react";
import SalesLogRegisterComponent from "../../modules/salesLog/salesLogRegister/salesLogRegister.component";
import SalesLogTableComponent from "../../modules/salesLog/salesLogTable/salesLogTable.component";



const SalesLogPage = () => {
	const [isShort, setIsShort] = useState(true)

	return (
		<>
			<h1 className="flex w-full justify-center mb-5"> Ventas </h1>

			<div className="flex justify-between">
				<SalesLogRegisterComponent />
				<button onClick={() => setIsShort(prev => !prev)}
					className=" mb-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					type="button"
				>
					{!isShort ? 'mostrar menos información' : 'mostrar mas información'}
				</button>
			</div>

			<SalesLogTableComponent isShort={isShort} />
		</>
	)
}


export default SalesLogPage