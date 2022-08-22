import './App.css'
import OTPComponent from './OTPComponent'

export default function App() {

  const props = {
    boxNumber: 6,
    division: 2, // split regarding the boxNumber
    classContainer: "test-class-container",
    classOTP: "test-class-otp",
    onlyNumbers: false,
    onValue: (e) => console.log("getValue", e),
  }

  return (
    <>
      <h1>React ⚛️ + Vite ⚡ + Replit 🌀</h1>
      <OTPComponent {...props} />
    </>
  )
}
