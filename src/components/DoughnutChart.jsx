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
              backgroundColor: ['red', 'green', 'blue', 'yellow'],
              borderColor: ['red', 'green', 'blue', 'yellow'],
              borderWidth: 1,
            }]
          }} />
        </div>
      )}
    </div>
  );
}

export default DoughnutChart;