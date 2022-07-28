import React from 'react'

function Days({min, max, weatherCondition, weatherIconKey}) {
    return (
        <div>
            <div>
                <img
                    alt='weatherCondition'
                    src={`https://developer.accuweather.com/sites/default/files/${weatherIconKey}-s.png`}
                />
            </div>
            <div>min: {min} Max{max}</div>
        </div>
  )
}

export default Days