import Form from '../components/Form'

const NewSegredo = () => {
  const segredoForm = {
    segredo: '',
    cor: '',
    dataAt: ''
  }
  return <Form formId="add-segredo-form" segredoForm={segredoForm} />
}

export default NewSegredo
