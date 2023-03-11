import React from 'react'
import HW10 from '../../hw10/HW10'
import HW11 from '../../hw11/HW11'
import HW12 from '../../hw12/HW12'
import HW13 from '../../hw13/HW13'
import {Provider} from "react-redux";
import store from "../../hw10/bll/store";
import HW14 from "../../hw14/HW14";
import HW15 from "../../hw15/HW15";


function JuniorPlus() {
    return (
        <div id={'hw5-page-junior-plus'}>
            <Provider store={store}>
                <HW10/>
                <HW11/>
                <HW12/>
                <HW13/>
                <HW14/>
                <HW15/>
            </Provider>
        </div>
    )
}

export default JuniorPlus
