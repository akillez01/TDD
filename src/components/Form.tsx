import { FormEvent, useState } from "react";

import { validateCPF } from "../lib/validateCpf";

interface FormProps {
  className?: string;
}

const Form: React.FC<FormProps> = ({ className }) => {
  const [cpf, setCpf] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsValid(validateCPF(cpf))
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          placeholder="Digite seu CPF"/>
        <button type="submit">Validar</button>
      </form>
      { isValid ? <p>CPF válido</p> : <p>CPF inválido</p> }
    </div>
  )
}

export default Form
