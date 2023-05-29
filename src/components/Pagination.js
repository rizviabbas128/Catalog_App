import React, { useState ,useEffect } from 'react'

const Pagination = ({showPerPage, onPagination, total}) => {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const value = showPerPage * counter;
        onPagination(value - showPerPage, value);
    },[counter])

    const onButtonClick = (type) => {
        if(type === 'prev') {
            if(counter === 1) {
                setCounter(Math.ceil(total/showPerPage));
            }else {
                setCounter(counter - 1);
            }
        }else if(type === 'next') {
            if(Math.ceil(total/showPerPage) === counter) {
                setCounter(1);
            }else {
                setCounter(counter + 1);
            }
        }
    }
  return (
    <div className='d-flex gap-4 justify-content-center mb-3'>
        <button className='btn btn-secondary' onClick={() => onButtonClick("prev")}>Previous</button>
        <button className='btn btn-secondary'onClick={() => onButtonClick("next")}>Next</button>
    </div>
  )
}

export default Pagination
