import { Line } from "react-chartjs-2";



const ReportLineComponent = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          1,
          3,
          3,
          3,
          15,
          12,
          23,
          6,
          5,
          4,
          11,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />

}

export default ReportLineComponent;