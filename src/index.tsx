import { KeyboardEvent, useRef } from 'react';
import './OTPComponent.css'

interface IPropsOTP {
  boxNumber: number;
  boxSeparator: number; // split regarding the boxNumber
  classContainer: string;
  classOTP: string;
  onlyNumbers: boolean;
  onValue: (e: string) => void;
}

const OTPComponent = ({ boxNumber, boxSeparator, classContainer, classOTP, onlyNumbers, onValue }: IPropsOTP) => {
  const buildElementsDynamically = Array(boxNumber)
    .fill(1)
    .map((n, i) => n + i);
  const inputRef = useRef<{ [key: string]: HTMLInputElement }>({});

  const getOddNumbers = buildElementsDynamically.reduce((acc, i) => {
    if (i % boxSeparator === 0) {
      acc = [...acc, i];
    }
    return acc;
  }, []);

  // 234567
  const nextBox = (event: KeyboardEvent<HTMLInputElement>, i: number) => {
    const backSpace: boolean = event.key === 'Backspace';
    const getNextFocus: number = i + 1;
    const lastInput = boxNumber;
    if (onlyNumbers && !/[0-9]/.test(event.key)) {
      return event.preventDefault();
    }
    if (inputRef && inputRef.current && !backSpace && event.key) {
      onValue(event.key);
      getNextFocus <= boxNumber
        ? inputRef.current[getNextFocus.toString()].focus()
        : inputRef.current[lastInput.toString()].blur();
    }
  };

  return (
    <div className={`container-confirmation ${classContainer}`}>
      {buildElementsDynamically.map((v) => (
        <input
          key={`${v}-x`}
          name={`otp-${v}`}
          type='text'
          maxLength={1}
          onKeyPress={e =>
            onlyNumbers && !/[0-9]/.test(e.key) && e.preventDefault()
          }
          onKeyUpCapture={event => nextBox(event, v)}
          ref={refElement =>
            (inputRef.current = {
              ...inputRef.current,
              [v.toString()]: refElement,
            })
          }
          className={`otp-confirmation ${classOTP} ${
            getOddNumbers.includes(v) ? `separator-${v}` : ''
          }`}
          onPaste={(event) => {
            // autocomplete inputs
          }}
        />
      ))}
    </div>
  );
};
export default OTPComponent;
