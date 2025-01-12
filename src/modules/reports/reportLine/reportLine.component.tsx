import { useEffect } from "react";
import { Line } from "react-chartjs-2";



const ReportLineComponent = ({ title, data, label_name }: { title: string, data: { label: string[], data: number[] }, label_name?: string }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title ,
      },
    },
  };

  return <Line options={options} data={{
    labels: data.label,
    datasets: [
      {
        label: 'Dataset 1',
        data: data.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }} />

}

export default ReportLineComponent;