import React from 'react'

export const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-3 modal-trigger tooltipped" data-position="left" data-tooltip="Add a log" >
            <i className="large material-icons">add</i>
            </a>
           <ul>
               <li><a href="#tech-list-modal" className="btn-floating green modal-trigger tooltipped" data-position="left" data-tooltip="Tech List" >
                   <i className="material-icons">person</i></a>
                </li>
               <li><a href="#add-tech-modal" className="btn-floating red modal-trigger tooltipped" data-position="left" data-tooltip="Add a tech" >
                   <i className="material-icons">person_add</i></a>
                </li>
           </ul>
        </div>
    )
}
export default AddBtn