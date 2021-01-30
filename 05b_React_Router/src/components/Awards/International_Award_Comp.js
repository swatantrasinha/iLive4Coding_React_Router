import React from 'react';
import { useLocation } from 'react-router-dom';
 function International_Award_Comp(props) {
    
    const myQuery = new URLSearchParams(useLocation().search);
    const lang = myQuery.get('language');
    console.log('language is  : ' , lang);

    return (
        <div>  
            <h1>  This is list of International Awards for language :{lang} </h1>
     </div>
    )
}
export default International_Award_Comp;
