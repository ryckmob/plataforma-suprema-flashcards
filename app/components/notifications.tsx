import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export function BellNotifications() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-300 text-xl hover:text-white transition relative"
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
          3
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-900 rounded-xl shadow-xl border border-gray-700 z-50 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-gray-800">
          <h2 className="text-white font-semibold text-sm">Notificações</h2>
          <button
            className="text-gray-400 hover:text-white transition text-sm"
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>
            </div>
            <ul className="divide-y divide-gray-700">
            <li className="px-4 py-3 hover:bg-gray-800 transition cursor-pointer">
                <p className="text-gray-200 text-sm font-medium">Você tem uma revisão pendente</p>
                <span className="text-gray-400 text-xs">2 minutos atrás</span>
            </li>
            <li className="px-4 py-3 hover:bg-gray-800 transition cursor-pointer">
                <p className="text-gray-200 text-sm font-medium">5 novas questões disponíveis</p>
                <span className="text-gray-400 text-xs">10 minutos atrás</span>
            </li>
            <li className="px-4 py-3 hover:bg-gray-800 transition cursor-pointer">
                <p className="text-gray-200 text-sm font-medium">Seu progresso foi atualizado</p>
                <span className="text-gray-400 text-xs">30 minutos atrás</span>
            </li>
            </ul>
        </div>
      
      )}
    </div>
  )
}
