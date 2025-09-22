"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faFile, faChartSimple, faCircleQuestion, faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import { BellNotifications } from "./components/notifications";
import { SetStateAction, useState } from "react";
import Inicio  from "./telas/inicio"; 
import Flashcards from "./telas/flashcards";
import Mapa from "./telas/mapa";
import Estatisticas from "./telas/estatisticas";
import Questoes from "./telas/questoes";
import { TypeTelaAtiva } from "./types";

export default function MobileLayout() {
  const [telaAtiva, setTelaAtiva] = useState<TypeTelaAtiva>("inicio");

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      <header className="flex items-center justify-between w-full px-4 py-2 bg-[#1C2634] border-b border-gray-700 max-h-[60.28px]">
        <img src="/logo.png" alt="" width={120} height={120} />

        <div className="flex items-center gap-6">
          <BellNotifications />
          <button className="text-gray-300 text-xl hover:text-white transition">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </header>

      
      {telaAtiva === 'inicio' && <Inicio setTelaAtiva={setTelaAtiva} />}
      {telaAtiva == 'flashcards' && <Flashcards setTelaAtiva={ setTelaAtiva } telaAtiva={telaAtiva} />}
      {telaAtiva == 'mapa' && <Mapa setTelaAtiva={ setTelaAtiva }  />}
      {telaAtiva == 'estatisticas' && <Estatisticas setTelaAtiva={ setTelaAtiva } />}
      {telaAtiva == 'questoes' && <Questoes setTelaAtiva={ setTelaAtiva } />}
    </div>
  );
}
