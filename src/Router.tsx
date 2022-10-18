import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import { Event } from './pages/Event';
import { Lesson } from './pages/Lesson';
import { Subscriber } from './pages/Subscriber';

export function Router() {
  const { user } = useUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Subscriber />} />
        <Route path='/event' element={ true ? <Event /> : <Subscriber />}/>
        <Route path='/lesson/:slug' element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  )
}