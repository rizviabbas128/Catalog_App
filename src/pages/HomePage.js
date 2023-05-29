import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/feature/CountrySlice';
import Spinner from '../components/loading/Spinner';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';


const HomePage = () => {
    const [modifiedCatalog, setModifiedCatalog] = useState([]);
    const [showPerPage, setShowPerPage] = useState(1);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    })
    const { loading, countrys, error } = useSelector((state) => ({
        ...state.app,
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountry());
    }, []);

    useEffect(() => {
        if (countrys) {
            setModifiedCatalog(countrys);
        } else {
            setModifiedCatalog([])
        }
    }, [countrys]);

    const onPagination = (start, end) => {
        setPagination({ start: start, end: end });
    }
    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!countrys) {
        return (
            <h2>No Country Found !</h2>
        )
    }

    const text = ["Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."];
    return (
        <>
            <div className='container mt-2 m-2'>
                <div className='cotainer'>
                    {modifiedCatalog.length > 0 && modifiedCatalog.slice(pagination.start, pagination.end).map((item, index) => {
                        return (
                            <div className='container' style={{display: 'flex'}}>
                                <div className="card m-1" style={{ width: '400rem' }} key={index} >
                                    <img src={item.flags.png} className="card-img-top" alt={item.name.common} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.common}</h5>
                                    <p className="card-text">Continents: {item.continents}</p>
                                    <p>{text}</p>
                                    <Link to={`/country/${item.ccn3}`} className="btn btn-primary">Details</Link>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <Pagination showPerPage={showPerPage} onPagination={onPagination} total={modifiedCatalog.length} />
        </>
    )
}

export default HomePage
