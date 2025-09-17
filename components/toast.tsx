"use client"

type ToastProps = {
  message: string
  type?: "success" | "error"
  onClose: () => void
}

const Toast = ({ message, type = "success", onClose }: ToastProps) => {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button
        type="button"
        aria-label="Close toast"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  )
}

export default Toast
