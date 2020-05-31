import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Term from './Term'
const routesData = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/about',
        name: 'About us',
        component: About
    },
    {
        path: '/term',
        name: 'Terms & Condition',
        component: Term
    },
]

export default routesData;