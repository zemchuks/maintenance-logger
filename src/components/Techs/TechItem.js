import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../redux/ActionCreators'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = () => {
        deleteTech(tech.id)
        M.toast({ html: 'Technician Deleted' })
    }
    return (
        <li className='collection-item'>
            <div className="">
                {tech.fistName} {tech.lastName}
                <a href="#!" onClick={onDelete} className='secondary-content'>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}
export default connect(null, { deleteTech })(TechItem)