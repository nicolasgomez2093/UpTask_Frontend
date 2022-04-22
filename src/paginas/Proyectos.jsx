import {  useEffect } from "react";
import Alerta from "../components/Alerta";
import PreviewProyecto from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyectos";
// import io from 'socket.io-client'

// let socket

function Proyectos() {
  const { proyectos, alerta } = useProyectos();

  // useEffect(() => {
  //   // Conectamos el front con el back
  //   socket = io(import.meta.env.VITE_BACKEND_URL)
  //   // Emit emite un evento hacia el socket identificado con un string

  // }, [])

  const {msg} = alerta

  return (
    <>
      <h1 className="text-4xl font-black">PROYECTOS</h1>

      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map(proyecto => (<PreviewProyecto proyecto={proyecto} key={proyecto._id}/>))
        ) : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>
        )}
      </div>
    </>
  );
}
export default Proyectos;
