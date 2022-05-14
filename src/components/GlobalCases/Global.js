
import './Global.css'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import axios from 'axios'

function Global() {

    const [allData, setAllData] = useState({});

    const reduxStore = useSelector((store) => store.global)
    useEffect(() => {
        async function fetchData() {
            reduxStore.global && setAllData(reduxStore.global)
            // setAllData(reduxStore.global)
            // console.log(allData)
        }
        fetchData();
    }, [reduxStore.global]);

    return (
        <>
            <div className="main__parent">
                <div className="cases__box">
                    <h1>Global Active</h1>
                    <span>{allData.TotalConfirmed}</span>
                </div>

                <div className="cases__box">
                    <h1>Global Recovered</h1>
                    <span>{allData.TotalRecovered}</span>
                </div>

                <div className="cases__box">
                    <h1>Global Deceased</h1>
                    <span>{allData.TotalDeaths}</span>
                </div>
            </div>
        </>
    )
}


export default Global;