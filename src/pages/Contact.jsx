import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [success, setSuccess] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return alert('Campos obligatorios')
    setSuccess(true)
    setForm({ name: '', email: '', msg: '' })
  }

  return (
    <div className="col-md-6 mx-auto">
      <h2>Contacto</h2>

      {success && <div className="alert alert-success">Mensaje enviado</div>}

      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea className="form-control mbFormulario validado 


-3" placeholder="Mensaje" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
        <button className="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  )
}
