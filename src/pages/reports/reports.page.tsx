

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import ReportLineComponent from '../../modules/reports/reportLine/reportLine.component';
import ReportBarComponent from '../../modules/reports/reportBar/reportBar.component';
import useSalesLogs from '../../hooks/useSalesLogs.hook';
import useHeadquarters from '../../hooks/useHeadquarters.hook';
import usePaymentMethods from '../../hooks/usePaymentMethods.hook';
import { useEffect, useState } from 'react';
import useEmployees from '../../hooks/useEmployees.hook';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);


const ReportsPage = () => {
	const { salesLogs } = useSalesLogs()
	const { headquarters } = useHeadquarters()
	const { paymentMethods } = usePaymentMethods()
	const { employees } = useEmployees()

	const [dataBarRegistrantSells, setDataBarRegistrantSells] = useState<{label: string[], data: number[]}>({
		label: [],
		data: []
	})

	useEffect(() => {

		const registrants: {[registrant: string]: {
			sells: number
		}} =  {};
		for (const log of salesLogs) {
			if (!registrants[log.registrant]) {
				registrants[log.registrant] = {
					sells: 0
				}
			}
			registrants[log.registrant].sells += 1
		}
		setDataBarRegistrantSells({
			label: Object.keys(registrants)?.map(e => employees?.find(_e => _e?.id == Number(e))?.name || ''),
			data: Object.values(registrants).map(e => e.sells)
		})
	}, [])

	return (
		<>
			<ReportLineComponent title="Ventas por empleado" data={dataBarRegistrantSells} label_name='Cantidad de ventas' />

			<hr className='my-5' />

			<ReportBarComponent title="Ventas por empleado" data={dataBarRegistrantSells} label_name='Cantidad de ventas' />
		</>

	)
}

export default ReportsPage