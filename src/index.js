import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
var i, fact=1;
function factorial(num)
{
    for(i=1;i<=num;i++)
    {
      fact=fact*i;
    }
    return fact;
}
root.render(
<div><p>{factorial(7)}</p></div>
);
reportWebVitals();
