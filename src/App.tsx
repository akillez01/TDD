// App.tsx
import './App.css'

import Form from './components/Form'
import Title from './components/Title'

function App() {
  return (
    <div id="root">
      <Title className="title">Validador de CPF</Title>
      <Form className="form" />
    </div>
  )
}

export default App
