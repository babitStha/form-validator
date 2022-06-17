import React from 'react'
import classes from "./Modal.module.css"
const BackDrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}
function Modal(props) {
  return (
    <React.Fragment>
        <BackDrop onClick={props.onClick}/>
            <div className={classes.modal}>
                <div className={classes['modal-body']}>
                    <p>
                    Your form has been submitted.

                    </p>
                    <button onClick={props.onClick}>Close</button>

                </div>
            </div>
    </React.Fragment>
  )
}

export default Modal