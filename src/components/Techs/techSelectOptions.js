import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../redux/ActionCreators'

const TechSelectOptions = ({ getTechs, tech: { techs, loading }}) => {
    useEffect(() => {
        getTechs()
        // eslint-disable-next-line
    }, [])

    return (
        !loading && techs !== null && techs.map(t => 
            <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
               {t.firstName} {t.lastName}
            </option> 
        )
    )
}
const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTechs })(TechSelectOptions)