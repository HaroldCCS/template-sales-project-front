

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
import ReportBarComponent from '../../modules/reports/reportBar/reportBar.component';
import useSalesLogs from '../../hooks/useSalesLogs.hook';
import { useEffect, useState } from 'react';
import useEmployees from '../../hooks/useEmployees.hook';
import useHeadquarters from '../../hooks/useHeadquarters.hook';
import usePaymentMethods from '../../hooks/usePaymentMethods.hook';


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
	const { employees } = useEmployees()
	const { paymentMethods } = usePaymentMethods()
	const { headquarters } = useHeadquarters()

	const [dataBarRegistrantSells, setDataBarRegistrantSells] = useState<{ label: string[], data: number[] }>({
		label: [],
		data: []
	})

	const [dataBarHeadquarterSells, setDataBarHeadquarterSells] = useState<{ label: string[], data: number[], backgroundColor: string | string[] }>({
		label: [],
		data: [],
		backgroundColor: []
	})

	const [dataBarPaymentMethodsSells, setDataBarPaymentMethodsSells] = useState<{ label: string[], data: number[], backgroundColor: string | string[] }>({
		label: [],
		data: [],
		backgroundColor: []
	})

	useEffect(() => {

		const paymentMethodsData: {
			[paymentMethod: string]: {
				sells: number
				finalPrice: number
			}
		} = {}
		const headquartersData: {
			[headquarter: string]: {
				sells: number
				finalPrice: number
			}
		} = {}
		const registrants: {
			[registrant: string]: {
				sells: number
				finalPrice: number
			}
		} = {};
		for (const log of salesLogs) {
			const headquarter = log.headquarter || 'No definido'
			if (!registrants[log.registrant]) {
				registrants[log.registrant] = {
					sells: 0,
					finalPrice: 0
				}
			}

			if (!headquartersData[headquarter]) headquartersData[headquarter] = {
				sells: 0,
				finalPrice: 0
			}

			if (!paymentMethodsData[log.method]) paymentMethodsData[log.method] = {
				sells: 0,
				finalPrice: 0
			}

			paymentMethodsData[log.method].sells += 1
			paymentMethodsData[log.method].finalPrice += log.finalPrice

			headquartersData[headquarter].sells += 1
			headquartersData[headquarter].finalPrice += log.finalPrice

			registrants[log.registrant].sells += 1
			registrants[log.registrant].finalPrice += log.finalPrice
		}


		setDataBarRegistrantSells({
			label: Object.keys(registrants)?.map(e => employees?.find(_e => _e?.id == Number(e))?.name || e),
			data: Object.values(registrants).map(e => e.sells)
		})

		setDataBarHeadquarterSells({
			label: Object.keys(headquartersData)?.map(e => headquarters?.find(_e => _e?.id == Number(e))?.name || e),
			data: Object.values(headquartersData).map(e => e.sells),
			backgroundColor: Object.keys(headquartersData)?.map(e => headquarters?.find(_e => _e?.id == Number(e))?.color || '')
		})

		setDataBarPaymentMethodsSells({
			label: Object.keys(paymentMethodsData)?.map(e => paymentMethods?.find(_e => _e?.id == Number(e))?.name || e),
			data: Object.values(paymentMethodsData).map(e => e.sells),
			backgroundColor: Object.keys(paymentMethodsData)?.map(e => paymentMethods?.find(_e => _e?.id == Number(e))?.color || '')
		})
	}, [])

	return (
		<>
			<ReportBarComponent title="Ventas por empleado" data={dataBarRegistrantSells} label_name='Vendedor' />
			<ReportBarComponent title="Ventas por sede" data={dataBarHeadquarterSells} label_name='Sede' />
			<ReportBarComponent title="Ventas por medio de pago" data={dataBarPaymentMethodsSells} label_name='medio de pago' />
		</>
	)
}

export default ReportsPage