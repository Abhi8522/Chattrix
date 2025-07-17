import { Routes, Route } from 'react-router-dom'
import OnBoardingScreen from '../pages/onBoardingScreen'

const RoutesJsx = () => {
  return (
    <Routes>
      <Route path='/' element={<OnBoardingScreen />} />
    </Routes>
  )
}

export default RoutesJsx
