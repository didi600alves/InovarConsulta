import { useState } from "react";

export default function Home() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "João Silva", turma: "10A", horario: "08:00 - 13:00", notas: {}, faltas: {} },
    { id: 2, nome: "Maria Santos", turma: "10B", horario: "13:30 - 18:30", notas: {}, faltas: {} },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Gestão Escolar</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Alunos</h2>
        <ul>
          {alunos.map((aluno) => (
            <li key={aluno.id} className="mt-2 p-2 border rounded-lg">
              {aluno.nome} - {aluno.turma} ({aluno.horario})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
