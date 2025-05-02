"use client"

import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


export default function ProgressBar({parcentage} : {parcentage : number}) {
    return (
        <div className='flex justify-center p-10'>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: parcentage >= 100 ? '#DC2626' : '#F59E0B',
                    trailColor: '#E1E1E1',
                    textColor: parcentage >= 100 ? '#DC2626' : '#F59E0B',
                    textSize: 8
                })}
                text={`${parcentage}% Gastado`}
                value={parcentage}

            />
        </div>
    )
}