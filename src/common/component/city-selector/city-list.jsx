import React,{memo, useCallback} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import CitySection from './city-section'
import AlphaIndex from './alpha-index'

const CityList = memo(function CityList(props) {
    const {
        sections = [],
        onSelect
    } = props

    const alphas = Array.from(new Array(26), (e, index) => {
        return String.fromCharCode(65 + index)
    })

    const listToAlpha = useCallback(
        alpha => {
            document.querySelector(`[city-cate='${alpha}']`).scrollIntoView()
        },[]
    )

    console.log(alphas)

    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map(section => {
                        return <CitySection key={section.title} title={section.title} cities={section.cities} onSelect={onSelect}/>
                    })
                }
            </div>
            <div className="city-index">
                { alphas.map(alpha => {
                    return <AlphaIndex key={alpha} alpha={alpha} onAlphaClick={alpha => listToAlpha(alpha)}/>
                }) }
            </div>
        </div>
    )
})

CityList.propTypes = {
    sections: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default CityList

