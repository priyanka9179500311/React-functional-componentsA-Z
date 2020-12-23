//import area
//import something from 'somelibrary';

import React from 'react';
import {B} from './B';

function A(){
    return(
        <React.Fragment>
            <h1>Hello A<B/></h1>

            <button>Click Me</button>
        </React.Fragment> 
    );
}

export default A;