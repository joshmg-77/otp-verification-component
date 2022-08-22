import React, { useRef } from 'react'

const OTPComponent = (props) => {
  // props
  /*const props = {
    boxNumber: 6,
    division: 2, // split regarding the boxNumber
    classContainer: "",
    classOTP: "",
    onlyNumbers: false,
    onValue: null,
  }*/

  const buildElementsDynamically = Array(props.boxNumber).fill(1).map((n, i) => n + i)
  const refs = useRef()
  const division = props.division

  const getOddNumbers = () => {
    const getOdds = buildElementsDynamically.reduce((acc, i) => {
      if (i % props.division === 0) {
        acc = [...acc, i]
      }
      return acc
    }, [])
    return getOdds
  }

  const boxSeparator = getOddNumbers()
  // 234567
  const stepNextBox = (event, i) => {
    const backSpace = event.key === 'Backspace' || event.keyCode === 8
    const getNextFocus = i + 1
    const lastInput = props.boxNumber
    if (props.onlyNumbers && !/[0-9]/.test(event.key)) {
      return event.preventDefault()
    }
    if (refs && refs.current && !backSpace && event.key && event.target.value) {
      props.onValue(event.key)
      getNextFocus <= props.boxNumber ?
        refs.current[getNextFocus.toString()].focus() :
        refs.current[lastInput.toString()].blur()
    }
  }

  return (
    <div className={`container-confirmation ${props.classContainer}`}>
      {buildElementsDynamically.map(v => (
        <input
          key={`${v}-x`}
          name={`otp-${v}`}
          type="text"
          maxLength="1"
          onKeyPress={e => (props.onlyNumbers && !/[0-9]/.test(e.key)) && e.preventDefault()}
          onKeyUpCapture={event => stepNextBox(event, v)}
          ref={refElement => refs.current = { ...refs.current, [v.toString()]: refElement }}
          className={`otp-confirmation ${props.classOTP} ${boxSeparator.includes(v) ? `separator-${v}` : ''}`}
          onPaste={(event) => {
            // autocomplete inputs 
          }}
        />
      )
      )}
    </div>
  )
}
export default OTPComponent