import React from 'react'

const LogItem = ({ log }) => {
    return (
        <li className='collection-item'>
            <div className="">
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention === true ? 'red-text' : 'blue-text'}`}>{log.message}</a>
            </div>
        </li>
    )
}

export default LogItem