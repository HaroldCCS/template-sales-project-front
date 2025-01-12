import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"



const ReportBarComponent = ({ title, data, label_name }: {title: string, data: {label: string[], data: number[]}, label_name?: string}) => {
	const [statistics, setStatistics] = useState<any>({
		labels: [],
		datasets: [],
	})
	useEffect(() => {

		setStatistics({
			labels: data.label,
			datasets: [
				{
					label: label_name || 'Datos',
					data: data.data,
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				}
			],
		})

	}, [data])
	return (
		<Bar
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
			data={statistics}
		/>


	)
}

export default ReportBarComponent