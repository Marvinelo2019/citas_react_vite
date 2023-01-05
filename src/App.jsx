
import {useState, useEffect} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Validar en localstorage si inicia lleno
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  //Sincroniza datos 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  //Eliminando registros del listado 
  const eliminandoPacientee = id => {
   const pacientesActualizados = pacientes.filter( paciente => (paciente.id !== id))
   setPacientes(pacientesActualizados)
  }

  return (
   <div className="container mx-12 mt-3" >
  <Header 

  />
  <div className="mt-12 md:flex" >
      <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminandoPacientee={eliminandoPacientee}
      />
  </div>
  
   </div>
  )
}
export default App