import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                width: 150,
                height: 4,
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#01CB22',
                },
                '& .MuiSlider-track': {
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                    height: 4,
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
