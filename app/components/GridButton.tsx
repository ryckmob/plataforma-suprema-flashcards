import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ButtonCardProps {
  icon: IconDefinition;
  text: string;
  fromColor: string;
  toColor: string;
  iconColor: string;
}

export function ButtonCard({
  icon,
  text,
  fromColor,
  toColor,
  iconColor,
}: ButtonCardProps) {
  return (
    <div
      className={`bg-gradient-to-b ${fromColor} ${toColor} text-white p-4 rounded-lg flex flex-row gap-3 items-center`}
    >
      <FontAwesomeIcon icon={icon} className={`text-base ${iconColor}`} />
      <span className="text-base">{text}</span>
    </div>
  );
}
