import * as S from './App.styled'
import './App.css'
import AppRoutes from './routes'
import database from './Firebase'

function App() {
  console.log(database)
  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  )
}

export default App
