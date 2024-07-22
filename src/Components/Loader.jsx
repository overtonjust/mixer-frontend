// Dependencies
import React, { useEffect, useState } from 'react';
import '../Styles/Loader.css'

const Loader = () => {
    const [loadingIcon, setLoadingIcon] = useState('fa-volume-off');
    const iconChanger = (loadingIcon) => {
        switch (loadingIcon) {
            case 'fa-volume-off':
                setLoadingIcon((prevState) => 'fa-volume-low')
                break;
            case 'fa-volume-low':
                setLoadingIcon((prevState) => 'fa-volume-high')
                break;
            case 'fa-volume-high':
                setLoadingIcon((prevState) => 'fa-volume-off')
                break;
        }
        return;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            iconChanger(loadingIcon)
        },500)
        return () => clearInterval(timer)
    },[loadingIcon])


    return (
        <div className='loader-box'>
            <p className='loader-text'>Loading...</p>
            <i className={`loader-icon fa-solid ${loadingIcon}`}/>
        </div>
    );
};

export default Loader;