import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Legend, Tooltip } from 'recharts'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Graph() {

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

    let newData = [
        {
            case: "TotalConfirmed",
            value: allData.TotalConfirmed
            // value: 20
        },
        {
            case: "TotalDeaths",
            value: allData.TotalDeaths
            // value: 25
        },
        {
            case: "TotalRecovered",
            value: allData.TotalRecovered
            // value: 15
        }
    ]
    return (
        <>
            <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Data Representation</h1>
            {/* <ResponsiveContainer width="90%" aspect={3}>
                    <LineChart data={newData}>
                        <XAxis dataKey="case" interval={'preserveStartEnd'} />
                        <YAxis dataKey="value" />
                        <Legend />
                        <Line dataKey="value" stroke='red' />
                    </LineChart>
                </ResponsivedContainer> */}

            <div className="graph__main__container">
                <ResponsiveContainer aspect={3} >
                    <BarChart data={newData} margin={{
                        top: 5,
                        right: 50,
                        left: 50,
                        bottom: 5,
                    }}>
                        <XAxis dataKey="case" fontSize="16px" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                        <Legend dataKey="value" />
                        <Bar dataKey="value" fill="rgb(0, 106, 255)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default Graph