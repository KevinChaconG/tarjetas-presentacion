import { Persona } from "./Modelos/Persona";
import Tarjeta from "./Components/tarjeta";
import HookUseState from "./Components/HookUseState";
import FormularioContador from "./Components/FormularioContador";

export default function Home() {


  let listaPersonas: Persona[] = [{

    id: 1,
    nombre: 'Kevin',
    apellido: 'Chacon',
    ocupacion: 'Administrador de Sistema',
    pais: 'Honduras'
  },
  {

    id: 2,
    nombre: 'Mario',
    apellido: 'Valladares',
    ocupacion: 'Técnico Eléctrico',
    pais: 'Brasil'

  },
{
    id: 3,
    nombre: 'Alejandra',
    apellido: 'Erazo',
    ocupacion: 'Agente de Seguros',
    pais: 'Estados Unidos'
},
{
    id: 4,
    nombre: 'Digna',
    apellido: 'Jimenez',
    ocupacion: 'Niñera',
    pais: 'España'
},
{
    id: 5,
    nombre: 'Laura',
    apellido: 'Martinez',
    ocupacion: 'Reclutadora',
    pais: 'Honduras'
}]


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1>Tarjetas Presentación</h1>

        {
          listaPersonas.map((item:Persona)=>(

            <Tarjeta key={item.id}
            id={item.id}
            nombre={item.nombre}
            apellido={item.apellido}
            ocupacion={item.ocupacion}
            pais={item.pais}>

            </Tarjeta>

            
            
          ))

          
          
        }

        <HookUseState></HookUseState>

        <FormularioContador></FormularioContador>


      </main>

    </div>
  );
}
