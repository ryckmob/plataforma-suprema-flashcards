import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import { TypeTelaAtiva } from "../types";

interface MapaProps {
  setTelaAtiva: Dispatch<SetStateAction<TypeTelaAtiva>>;
}

export default function Mapa({ setTelaAtiva }: MapaProps) {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      
      <header className="flex items-center px-4 py-2 bg-[#1C2634] border-b border-gray-700 max-h-[60.28px]">
        <button
          onClick={() => setTelaAtiva("inicio")}
          className="text-yellow-400 text-xl hover:text-yellow-500 transition mr-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="text-white text-lg font-bold">
          Início
        </h1>
      </header>

      
      <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
      Área de Mapas Mentais (vazia)
      </div>
    </div>
  );
}
