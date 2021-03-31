import React, { useState } from 'react'

const Form = ({ formId, segredoForm}) => {
  
  interface ISegredo {
    segredo: string,
    cor: string
  }

  const [form, setForm] = useState({
    segredo: segredoForm.segredo,
  })


  const handleChange = (event) => {
    const target = event.target

    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Segredo</label>

        <input
          type="text"
          name="segredo"
          value={form.segredo}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          tellme
        </button>
      </form>
    </>
  )
}

export default Form
