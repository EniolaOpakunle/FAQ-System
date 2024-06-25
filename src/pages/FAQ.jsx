import React, { useEffect,useState } from 'react';
import { generateData, loading} from './actions/index';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/icon-star.svg'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'

function FAQ() {
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null);
    // const [data, setdata] = useState([])
    useEffect(() => {
        dispatch(generateData())
    }, [dispatch]);

    const {isloading ,data, error} = useSelector(state => state.fagsReducers);

    const onItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
  return (
    <div className='faq'>
        <div className='d-flex div1'>
            <div className='w-50 p-5 accordion'>
                <p className='title'><img src={logo} alt="" /> <span>FAQs</span></p>
                <div>
                {data.map((val, index) => (
                    <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={() => onItemClick(index)}>
                    {val.question}
                    <img src={activeIndex === index ? minus : plus} alt="" className='accordion-icon' />
                    </div>
                    {activeIndex === index && (
                    <div className="accordion-content">
                        <p>{val.answer}</p>
                    </div>
                    )}
                </div>
                ))}
                </div>
            </div>  
        </div>
        <div className='div2'>

        </div>
    </div>
  )
}


export default FAQ;