import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faFile,
  faChartSimple,
  faCircleQuestion,
  faBell,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonCard } from './components/GridButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MobileLayout() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between w-full px-4 py-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-lg font-semibold text-white">
          Trajetória Concursos
        </h1>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 text-xl hover:text-white transition">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="text-gray-300 text-xl hover:text-white transition">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </header>

      {/* GRID DE BOTÕES */}
      <div className="p-4 grid grid-cols-2 gap-3">
        <ButtonCard
          icon={faBrain}
          text="Mapa Mental"
          fromColor="from-gray-700"
          toColor="to-gray-800"
          iconColor="text-gray-200"
        />
        <ButtonCard
          icon={faFile}
          text="Flashcards"
          fromColor="from-sky-700"
          toColor="to-sky-900"
          iconColor="text-sky-200"
        />
        <ButtonCard
          icon={faChartSimple}
          text="Estatísticas"
          fromColor="from-emerald-700"
          toColor="to-emerald-900"
          iconColor="text-emerald-200"
        />
        <ButtonCard
          icon={faCircleQuestion}
          text="Questões"
          fromColor="from-indigo-700"
          toColor="to-indigo-900"
          iconColor="text-indigo-200"
        />
      </div>

      {/* PROGRESSO */}
      <div className="px-4 flex flex-col mt-4">
        <h1 className="text-white text-lg mb-2">Seu Progresso</h1>
        <div className="bg-gray-800 w-full min-h-16 mt-2 rounded-lg p-4 flex flex-row gap-6 items-center justify-between">
          <div className="w-20 h-20">
            <CircularProgressbar
              value={65}
              text={`${65}%`}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: '#FACC15', // amarelo dourado
                trailColor: '#374151', // cinza discreto
                textColor: '#FFFFFF',
                textSize: '22px',
              })}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-lg font-bold">10</h1>
            <p className="text-gray-400 text-xs mt-1 text-center">
              Mapas <br /> Revisados
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-lg font-bold">0</h1>
            <p className="text-gray-400 text-xs mt-1 text-center">
              Revisões <br /> Diárias
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-lg font-bold">0</h1>
            <p className="text-gray-400 text-xs mt-1 text-center">
              Flashcards <br /> Respondidos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
