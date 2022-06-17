import {useState} from 'react'

const useInput = (validate) => {
    const [enteredInput, setEnteredInput] = useState('')
    const [isInputTouched, setIsInputTouched] = useState(false)
    const isEnteredInputValid = validate(enteredInput)
    const hasError = !isEnteredInputValid  && isInputTouched
    const inputChangeHandler = event => {
        setIsInputTouched(true)
        setEnteredInput(event.target.value)
    }
    const inputBlurHandler =() =>{
        setIsInputTouched(true)
    }
    const reset = () => {
        setEnteredInput('')
        setIsInputTouched(false)
    }
  return (
    {
        enteredInput,
        isInputTouched,
        isEnteredInputValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }
  )
}

export default useInput