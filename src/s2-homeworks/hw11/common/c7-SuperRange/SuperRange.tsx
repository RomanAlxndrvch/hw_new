import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',

                '& .MuiSlider-thumb': {
                    border: '1px solid #00CC22',
                    color: '#FFFFFF',
                    '&:before': {
                        height: '6px',
                        width: '6px',
                        backgroundColor: '#00CC22',
                        boxShadow: 'none'
                    }
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)

        />
    )
}

export default SuperRange
