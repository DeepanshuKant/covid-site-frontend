// import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Legend, Tooltip } from 'recharts'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Title } from 'chart.js'
import './Graph.css'
function Graph() {

    Chart.register(
        ArcElement,
        Title,
        Tooltip
    )

    const [allData, setAllData] = useState({})
    const reduxGlobal = useSelector((store) => store.global)
    const reduxCountry = useSelector((store) => store.countryReducer)

    useEffect(() => {
        function fetchData() {
            if (Object.keys(reduxCountry.country).length === 0 && reduxCountry.constructor === Object) {
                reduxGlobal.global && setAllData(reduxGlobal.global)
                // console.log(allData.NewConfirmed)
            }
            else {
                reduxCountry.country && setAllData(reduxCountry.country)
            }
        }
        fetchData();
    }, [reduxGlobal.global, reduxCountry.country]);


    const newData = {
        labels: [
            'Total Confirmed',
            'TotalDeaths',
            'TotalRecovered'
        ],
        datasets: [{
            label: 'Covid Data',
            data: [allData.TotalConfirmed, allData.TotalDeaths, allData.TotalRecovered],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }

    const config = {
        type: 'doghnut',
        data: newData,
    };


    return (
        <>
            <div className="graph__main__container"  >
                <Doughnut data={newData} className='doughnut' />
            </div>
        </>
    )
}

export default Graph