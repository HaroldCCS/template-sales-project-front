import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"



const ReportBarComponent = () => {
	const [statistics, setStatistics] = useState<any>({
		labels: [],
		datasets: [],
	})
	useEffect(() => {

		setStatistics({
			labels: ["HOLI", "CHAO"],
			datasets: [
				{
					label: 'Datos',
					data: [7, 2],
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				}
			],
		})

	}, [])
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
						text: 'Estadisticas de encuestas: preguntas que han sido contestadas por beneficiarios',
					},
				},
			}}
			data={statistics}
		/>


	)
}

export default ReportBarComponent