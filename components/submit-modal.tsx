"use client"

import { useState } from "react"
import "../styles/submitmodal.css"

type SubmitModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (form: { name: string; email: string; message: string }) => void
  isLoading: boolean
}

const SubmitModal = ({ isOpen, onClose, onSubmit, isLoading }: SubmitModalProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.")
      return
    }
    onSubmit(form)
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Submit Your Design</h2>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message or notes"
          value={form.message}
          onChange={handleChange}
          required
        />
        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitModal
