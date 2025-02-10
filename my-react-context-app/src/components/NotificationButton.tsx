import { useNotification } from "../hooks/useNotification"

const NotificationButton = () => {
  const { showNotification } = useNotification();

  return (
    <button onClick={() => showNotification("✅ Transaccion completada!")}>
      Confirmar Transaccion
    </button>
  )
}

export default NotificationButton
