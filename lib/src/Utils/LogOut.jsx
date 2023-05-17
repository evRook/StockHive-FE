import React from 'react';

export const LogOut = () => {
   return localStorage.removeItem('user');
}
