import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleCountry } from '../redux/feature/CountrySlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/loading/Spinner';

const CountryDetail = () => {
    const [modifiedCountry, setModifiedCountry] = useState([]);
    const {loading, country} = useSelector((state) => ({...state.app}));
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(fetchSingleCountry({id}));
    },[dispatch,id]);

    useEffect(() => {
        if(country.length > 0) {
            setModifiedCountry(country);
        }else {
            setModifiedCountry([]);
        }
    },[id, country]);

    if(!modifiedCountry) {
        return <h2>No Such Country Found !</h2>
    }else {
        return (
            <>
              {loading ? (<Spinner/>) : (
                modifiedCountry.map((item, index) => {
                    return (
                        <div className='container mt-4' key={index}>
                            <Link to='/' className='btn btn-info'>Go back</Link>
                            <div className='row mt-4'>
                                <div className='col md-5'>
                                    <img className='mt-5 mb-5' src={item.flags.png} alt={item.name.common} />
                                </div>
                                <div className='col md-5 mt-5'>
                                    <h3>Country : {item.name.common}</h3>
                                    <p className='mt-2'>Population : {item.population}</p>
                                    <p>Border Share With : {!item.borders ? (<p>No such country found</p>) : (
                                        item.borders[0]+" "+item.borders[1]+" "+item.borders[2]+" "+item.borders[3]+" "+item.borders[4]
                                    )}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
              )}
            </>
          )
    }
}

export default CountryDetail
