import { gql, useMutation, useQuery } from "@apollo/client"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../components/Logo"
import { useCreateSubscriberUserMutation, useGetLessonBySlugQuery, useGetLessonsQuery } from "../graphql/generated"
import { useUser } from "../hooks/useUser"

const CREATE_SUBSCRIBER = gql`
  query MyQuery($email: String) {
  subscriber(where: {email: $email}){
    id
  }
}`

const GET_LESSON = gql`
query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      videoId
      title
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
}`

export function Subscriber() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const navigate = useNavigate()

  const { GetUser } = useUser()

  // const {data} = useGetLessonsQuery()

  const { data } = useQuery(CREATE_SUBSCRIBER, {
    variables: {
      email
    }
  })





  console.log(data)


  const [createSubscriberMutation ] = useCreateSubscriberUserMutation()

  async function CreateUser(event: FormEvent) {
    event.preventDefault()


    if(!data.subscriber) {
      
      const result =  await createSubscriberMutation({
        variables: {
          email,
          name
        }
      })
  
      GetUser(name, email)
      console.log(result.data)
      

      navigate('/event/lesson/aula-2')

      return
    }


    

    // data?.createSubscriber?.id

    
    GetUser(name, email)
    navigate('/event' )

  }

  return (
    <div className="flex min-h-screen items-center flex-col bg-blur bg-no-repeat bg-cover">
      <div className="flex flex-col gap-6 items-center justify-between max-w-[1100px] w-full p-6 md:flex-row">
        <div className="flex-1 max-w-[640px]">
          <Logo />
          <h1 className="text-[40px] leading-tight mt-6">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>
            , do zero, <strong className="text-blue-500">com React JS</strong>
          </h1>
          <p className="mt-4 max-w-[620px] leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas 
            e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="flex items-center w-full justify-center flex-col gap-4 p-6 bg-gray-950 border border-gray-500 rounded-[8px] md:w-auto">
          <span className="text-2xl">
            Increver-se gratuitamente
          </span>
          <form onSubmit={CreateUser} className="gap-2 flex flex-col w-full">
            <input 
              className="bg-gray-900 text-gray-300 p-3 rounded"
              type="text" 
              id="name" 
              placeholder="Digite seu nome" 
              onChange={(event) => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 text-gray-300 p-3 rounded"
              type="email" 
              id="name" 
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button 
              className="w-full bg-green-500 p-2 rounded mt-2 hover:bg-green-700 transition-colors"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/second-background.png" alt="" className="w-[90%] md:w-[70%]"/>
    </div>
  )
}