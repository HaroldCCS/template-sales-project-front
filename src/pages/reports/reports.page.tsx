

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

	return (
		<>
			<ReportLineComponent />

			<hr className='my-5' />

			<ReportBarComponent />
		</>

	)
}

export default ReportsPage