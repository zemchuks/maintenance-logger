import React from 'react'
import Moment  from 'react-moment'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../redux/ActionCreators'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {

    // Delete log method
    const onDelete = () => {
        deleteLog(log.id)
        M.toast({ html: 'Log Deleted' })
    }
    
    return (
        <li className='collection-item'>
            <div className="">
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>
                    {log.message}</a>
                <br/>

                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by {''}
                    <span className='black-text'> 
                    {log.tech}</span> on <Moment format='MMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, { deleteLog, setCurrent })(LogItem)