import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLog } from '../../redux/ActionCreators'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    // set the form data to the current data
    useEffect(() => {
        if(current !== null) {
            setMessage(current.message) 
            setTech(current.tech)
            setAttention(current.attention)
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and a tech'})
        } else {
            //  update the log state
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }  
            updateLog(updLog)
            M.toast({  html: `Log updated by ${tech}`})
            // Clear fields
            setMessage('') 
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}> 
            <div className="modal-content">
                {/* Log message input field */}
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                       
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
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}
// bring in the 'current value' to fill the form with the current data 
const mapStateToProps = state => ({
    // bring the log in t he state and then the current data
    current: state.log.current
})
export default connect(mapStateToProps, { updateLog })(EditLogModal) 