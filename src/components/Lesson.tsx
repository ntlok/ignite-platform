import { CheckCircle, Lock } from 'phosphor-react';
import { isPast } from 'date-fns';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, type, availableAt, slug }: LessonProps) {

  const isLessonAvaileble = isPast(availableAt);

  return (
    <Link to={`/event/lesson/${slug}`}>
      <span className="text-gray-300">
        Terça • 22 de junho • 19h00
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvaileble ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ): (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em Breve
            </span>
          )}
          <span className="uppercase text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === 'live' ? 'ao vivo' : 'aula prática'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {/* Aula 02 - Titulo aula ignite labs */}
          {title}
        </strong>
      </div>
    </Link>
  )
}
