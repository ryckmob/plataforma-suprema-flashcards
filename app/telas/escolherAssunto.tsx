// app/components/UserChoice.tsx
"use client";

import { useEffect, useState } from "react";

interface Nodo {
  tipo: string;
  nome: string;
  filhos: Nodo[];
}

export default function UserChoice() {
  const [partes, setPartes] = useState<Nodo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/codigo_penal.json");
        const data: Nodo[] = await res.json();
        setPartes(data.filter((n) => n.tipo === "titulo"));
      } catch (err) {
        console.error("Erro ao carregar JSON", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-gray-300">Carregando...</p>;

  return (
    <div className="p-4 w-full h-[calc(100%-105.08px)] flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Assuntos para Estudar
      </h2>
      <div className="flex-1 overflow-y-auto space-y-3">
        {partes.map((parte, idx) => (
          <div
            key={idx}
            className="p-4 text-md rounded-xl bg-[#1f2937] text-gray-200 cursor-pointer hover:bg-neutral-800 transition"
          >
            {parte.nome}
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500">
        Iniciar Estudo
      </button>
    </div>
  );
}
