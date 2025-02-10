import Notification from "./components/Notification"
import NotificationButton from "./components/NotificationButton"
import { NotificationProvider } from "./contexts/NotificationContext"

function App() {
  return (
    <NotificationProvider>
      <h1>💸 Transaccion casi lista 💸</h1>
      <p>Estas seguro de que deseas completar esta transaccion?</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  )
}

export default App
