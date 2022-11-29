import { useState, useEffect, useCallback } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart({ dataSet }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    setData(() => {
      let arr = []
      for (let label in dataSet) {
        arr.push(dataSet[label])
      }
      return arr
    })
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [dataSet])

  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="">Loading...</div>
      ) : (
        <div className='flex-[0.55]' >
          <Doughnut data={{
            labels: Object.keys(dataSet),
            datasets: [{
              label: '# population',
              data: data,
              backgroundColor: ['#52D726', '#FFEC00', '#FF7300', '#FF0000', '#007ED6', '#7CDDDD', '#80198C', '#BA0072', '#DB2950', '#E55D2C', '#002E96', '#BFB800'],
              borderColor: ['#52D726', '#FFEC00', '#FF7300', '#FF0000', '#007ED6', '#7CDDDD', '#80198C', '#BA0072', '#DB2950', '#E55D2C', '#002E96', '#BFB800'],
              borderWidth: 1,
            }]
          }} />
        </div>
      )}
    </div>
  );
}

export default DoughnutChart;