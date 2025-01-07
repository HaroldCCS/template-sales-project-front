import SalesLogRegisterComponent from "../../modules/salesLog/salesLogRegister/salesLogRegister.component";
import SalesLogTableComponent from "../../modules/salesLog/salesLogTable/salesLogTable.component";



const SalesLogPage = () => {

	return (
		<>
			<h1 className="flex w-full justify-center mb-5"> Ventas </h1>

			<SalesLogRegisterComponent />
			<SalesLogTableComponent />
		</>
	)
}


export default SalesLogPage