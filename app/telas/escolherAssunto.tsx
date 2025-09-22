import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import { TypeTelaAtiva } from "../types";

interface Item {
  tipo: string;
  nome: string;
  filhos?: Item[];
}

interface EscolhaAssuntoProps {
  setTelaAtiva: Dispatch<SetStateAction<TypeTelaAtiva>>;
}

// Mantendo o require do mesmo host
const data: Item[] = require("/codigo_penal.json");

export default function EscolhaAssunto({ setTelaAtiva }: EscolhaAssuntoProps) {
  const [selectedFirstLevel, setSelectedFirstLevel] = useState<string | null>(null);
  const [selectedSecondLevel, setSelectedSecondLevel] = useState<string[]>([]);

  const handleFirstLevelSelect = (name: string) => {
    setSelectedFirstLevel(name);
    setSelectedSecondLevel([]);
  };

  const handleSecondLevelToggle = (name: string) => {
    if (selectedSecondLevel.includes(name)) {
      setSelectedSecondLevel(selectedSecondLevel.filter((n) => n !== name));
    } else {
      setSelectedSecondLevel([...selectedSecondLevel, name]);
    }
  };

  const firstLevelTitles = data.map((item) => item.nome);

  const secondLevelTitles =
    selectedFirstLevel &&
    data.find((item) => item.nome === selectedFirstLevel)?.filhos?.map((t) => t.nome);

  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      
      <header className="flex items-center px-4 py-2 bg-[#1C2634] border-b border-gray-700 max-h-[60.28px]">
        <button
          onClick={() => setTelaAtiva("inicio")}
          className="text-yellow-400 text-xl hover:text-yellow-500 transition mr-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="text-white text-lg font-bold">Assuntos para Estudar</h1>
      </header>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-6">
          {firstLevelTitles.map((title) => (
            <label
              key={title}
              className="flex items-center mb-2 p-2 bg-gray-800 rounded cursor-pointer"
            >
              <input
                type="radio"
                name="firstLevel"
                className="mr-3 accent-green-500"
                checked={selectedFirstLevel === title}
                onChange={() => handleFirstLevelSelect(title)}
              />
              {title}
            </label>
          ))}
        </div>

        {secondLevelTitles && (
          <div className="mb-6">
            {secondLevelTitles.map((title) => (
              <label
                key={title}
                className="flex items-center mb-2 p-2 bg-gray-800 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-3 accent-green-500"
                  checked={selectedSecondLevel.includes(title)}
                  onChange={() => handleSecondLevelToggle(title)}
                />
                {title}
              </label>
            ))}
          </div>
        )}

        <button className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500">
          Iniciar Estudo
        </button>
      </div>
    </div>
  );
}
