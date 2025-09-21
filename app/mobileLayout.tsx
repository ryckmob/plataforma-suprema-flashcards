import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faFile,
  faChartSimple,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonCard } from './components/GridButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MobileLayout() {
  return (
    <div className="w-screen h-screen bg-gray-950 flex flex-col">
      <div className="flex text-white justify-center py-4">
        <h1 className="text-3xl px-4 pt-3">
          Plataforma Suprema de Revisão Penal
        </h1>
      </div>

      <div className="p-4 grid grid-cols-2 gap-2">
        <ButtonCard
          icon={faBrain}
          text="Mapa Mental"
          fromColor="from-fuchsia-600"
          toColor="to-fuchsia-900"
          iconColor="text-fuchsia-300"
        />
        <ButtonCard
          icon={faFile}
          text="Flashcards"
          fromColor="from-blue-500"
          toColor="to-blue-900"
          iconColor="text-blue-300"
        />
        <ButtonCard
          icon={faChartSimple}
          text="Estatísticas"
          fromColor="from-emerald-500"
          toColor="to-emerald-900"
          iconColor="text-emerald-300"
        />
        <ButtonCard
          icon={faCircleQuestion}
          text="Questões"
          fromColor="from-teal-500"
          toColor="to-teal-900"
          iconColor="text-teal-300"
        />
      </div>

      <div className="px-4 flex flex-col mt-4">
        <div>
          <h1 className="text-white text-lg mb-2">Seu Progresso</h1>
        </div>
        <div className="bg-gray-800 w-full min-h-16 mt-2 rounded-md p-4 flex flex-row gap-2 items-center justify-between">
          <div className="w-20 h-20">
            {' '}
            <CircularProgressbar
              value={65}
              text={`${65}%`}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: '#FFD700',
                trailColor: '#283547',
                textColor: '#FFFFFF',
                textSize: '25px',
              })}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-lg">
              <b>10</b>
            </h1>
            <p className="text-stone-300 text-xs mt-1">
              Mapas <br /> Revisados
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-lg">
              <b>0</b>
            </h1>
            <p className="text-stone-300 text-xs mt-1">
              Revisões <br /> Diárias
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-lg">
              <b>0</b>
            </h1>
            <p className="text-stone-300 text-xs mt-1">
              Flashcards <br /> Respondidos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
