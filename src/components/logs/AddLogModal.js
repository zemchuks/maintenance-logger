import React, { useState } from 'react'

export const AddLogModal = () => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () => {
        console.log(message, tech, attention);
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}> 
            <div className="modal-content">
                {/* Log message input field */}
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className='active'>Log Message</label>
                    </div>
                </div>
                {/* Select Technician field input */}
                <div className="row">
                    <div className="input-field">
                        <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                        <option value="" disabled>Select Technician</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Sam Smith">Sam Smith</option>
                        <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>
               {/* Attention Field */}
               <div className="row">
                   <div className="input-field">
                   <p>
                    <label>
                        <input type="checkbox" className='filled-in' checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
                        <span>Needs Attention</span>
                    </label>
                    </p>
                   </div>
               </div>
            </div>
            <div class="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal