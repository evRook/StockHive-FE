import React from 'react';

export const GetUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}