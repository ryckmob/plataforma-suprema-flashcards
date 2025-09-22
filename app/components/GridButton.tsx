import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { TypeTelaAtiva } from "../types";

interface ButtonCardProps {
  icon: IconDefinition;
  text: string;
  fromColor: string;
  toColor: string;
  iconColor: string;
  setTelaAtiva: Dispatch<SetStateAction<TypeTelaAtiva>>;
  tela: TypeTelaAtiva;
}

export function ButtonCard({
  icon,
  text,
  fromColor,
  toColor,
  iconColor,
  setTelaAtiva,
  tela,
}: ButtonCardProps) {
  return (
    <div
      onClick={() => setTelaAtiva(tela)}
      className={`bg-gradient-to-b ${fromColor} ${toColor} text-white p-5 rounded-lg flex flex-row gap-3 items-center cursor-pointer hover:brightness-110 transition`}
    >
      <FontAwesomeIcon icon={icon} className={`text-base ${iconColor}`} />
      <span className="text-md">{text}</span>
    </div>
  );
}
