import { Bar } from "react-chartjs-2"



const colorBar = 'rgba(255, 99, 132, 0.5)'
const ReportBarComponent = ({ title, data, label_name }: {title: string, data: {label: string[], data: number[], backgroundColor?: string | string[]}, label_name?: string}) => {

	return (
		<Bar
			className="my-5"
			options={{
				responsive: true,
				plugins: {
					legend: {
						position: 'top' as const,
					},
					title: {
						display: true,
						text: title,
					},
				},
			}}
			data={{
				labels: data.label,
				datasets: [
					{
						label: label_name || '',
						data: data.data,
						backgroundColor: data?.backgroundColor?.length ? data.backgroundColor : colorBar,
					}
				],
			}}
		/>


	)
}

export default ReportBarComponent