import React from 'react';
import './404page.css';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div className='error'>
            <div className="img">
                <img src="/error.jpg" alt="" />
            </div>
            <div className="text">
                <p>{error?.message}</p>
            </div>
            <Link to='/' className='btn-primary'>Back to Homepage</Link>
        </div>
    );
};

export default ErrorPage;