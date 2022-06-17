import useInput from '../hooks/use-input'

const Form = (props) => {
    let formIsValid = false
    const{
        enteredInput:enteredName,
        isEnteredInputValid: isEnteredNameValid,
        hasError: nameInputHasError,
        inputChangeHandler:nameChangeHandler,
        inputBlurHandler:nameBlurHandler,
        reset: resetEnteredName
    }=useInput(name=> name.trim().length !== 0)

    const{
        enteredInput:enteredEmail,
        isEnteredInputValid: isEnteredEmailValid,
        hasError: emailInputHasError,
        inputChangeHandler:emailChangeHandler,
        inputBlurHandler:emailBlurHandler,
        reset: resetEnteredEmail
    }=useInput(email=> email.trim().length !== 0 && email.includes('@'))

    if(isEnteredNameValid && isEnteredEmailValid){
        formIsValid = true
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        props.displayModal()
        resetEnteredName()
        resetEnteredEmail()
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-wrapper">

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={enteredName} id='name' onChange={nameChangeHandler} onBlur = {nameBlurHandler}
                    />
                    {nameInputHasError && <div className="error">
                        Enter valid input
                    </div> }
                </div>
                <div className="form-control">
                    <label htmlFor="name">Email</label>
                    <input type="text" name='name' value={enteredEmail} id='name' onChange={emailChangeHandler} onBlur = {emailBlurHandler}
                    />
                    {emailInputHasError && <div className="error">
                        Email must include @
                    </div> }
                </div>

                <div className="button-wrapper">
                    <button type="submit" disabled={!formIsValid} className='button'>Submit</button>
                </div>
            </div>

        </form>
    )
}

export default Form