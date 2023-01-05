
import Paciente from "./Paciente" 

const ListadoPacientes = ({pacientes, setPaciente, eliminandoPacientee}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >

        {pacientes && pacientes.length ? (
            <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10 " >
                        Administra tus {''} 
                    <span className="text-blue-600 font-bold" >Pacientes y citas</span>
                    </p>  
            
                { pacientes.map( (paciente) =>(
                    <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminandoPacientee={eliminandoPacientee}
                        
                    />
                ))}
             </>
        )  : (
            <>
                 <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10 " >
                       Comienza agergando pacientes {''} 
                    <span className="text-blue-600 font-bold" >y apareceran en este lugar</span>
                </p>  
            
            </>

        ) }

       
    
    </div>
  
  )
}

export default ListadoPacientes