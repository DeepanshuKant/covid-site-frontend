import './Search.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../../redux/reducer/country/country.action'
import axios from 'axios'



function Search() {

    const [countryName, setCountryName] = useState("")
    const dispatch = useDispatch();
    async function DataSet() {

        if (!countryName == "") {
            // window.location  = "/cases/country/" + countryName;
            dispatch(getCountry(countryName));
        }
        else {
            window.location.href = "/"
        }

    }

    return (
        <>
            <div className="parent__search">
                <div className="inner__search">
                    <div className="search__box">
                        <input type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder='search for any country' className='search__bar' />
                    </div>
                    <div className="search__box">
                        <button className='search__button' onClick={DataSet}><BsSearch /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;