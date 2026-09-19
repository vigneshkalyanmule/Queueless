import { forwardRef } from 'react'
import { AlertCircle, Check, Info, LoaderCircle, X } from 'lucide-react'

export const Button = forwardRef(function Button({ children, variant = 'primary', icon: Icon, loading = false, ...props }, ref) {
  return (
    <button ref={ref} className={`button button-${variant}`} disabled={loading || props.disabled} {...props}>
      {loading ? <LoaderCircle className="spin" size={17} aria-hidden="true" /> : Icon ? <Icon size={17} aria-hidden="true" /> : null}
      <span>{children}</span>
    </button>
  )
})

export function Card({ children, className = '', ...props }) {
  return <section className={`card ${className}`} {...props}>{children}</section>
}

const badgeIcons = { success: Check, warning: AlertCircle, error: X, info: Info }
export function Badge({ children, tone = 'info' }) {
  const Icon = badgeIcons[tone] || Info
  return <span className={`badge badge-${tone}`}><Icon size={14} aria-hidden="true" />{children}</span>
}

export function Modal({ open, title, children, onClose }) {
  if (!open) return null
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-header"><h2 id="modal-title">{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={onClose}><X size={18} /></button></div>
        {children}
      </div>
    </div>
  )
}

export function Toast({ message, tone = 'success', onClose }) {
  if (!message) return null
  const Icon = badgeIcons[tone] || Info
  return <div className={`toast toast-${tone}`} role="status"><Icon size={18} aria-hidden="true" /><span>{message}</span><button className="toast-close" aria-label="Dismiss notification" onClick={onClose}><X size={16} /></button></div>
}

export function Loading({ label = 'Loading' }) {
  return <div className="loading" role="status"><LoaderCircle className="spin" size={22} /><span>{label}</span></div>
}

export function EmptyState({ title, description }) {
  return <div className="empty-state"><Info size={22} aria-hidden="true" /><h2>{title}</h2><p>{description}</p></div>
}

export function ErrorState({ title = 'Something went wrong', description = 'Please try again.' }) {
  return <div className="empty-state error-state"><AlertCircle size={22} aria-hidden="true" /><h2>{title}</h2><p>{description}</p></div>
}
