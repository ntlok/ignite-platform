import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useUser } from "../hooks/useUser";



interface ParamsProps {
  [slug: string]: string 
}

export function Lesson() {

  const { user } = useUser()

  console.log(user)

  const { slug } = useParams<ParamsProps>()

  // console.log(slug)

  // const slug = true
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        { slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  )
}