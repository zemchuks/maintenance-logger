import React, { useEffect } from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import { getTechs } from '../../redux/ActionCreators'

const TechListModal = ({ tech: { loading, techs }, getTechs }) => {

    useEffect(() => {
        getTechs()
        // eslint-disable-next-line
    }, [])

    return (
        <div id='tech-list-modal' className='modal'>
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className='collection'>
                    {!loading && techs !== null && techs.map(tech => (
                        <TechItem key={tech.id} tech={tech} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTechs })(TechListModal)