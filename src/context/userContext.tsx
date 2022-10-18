import { Children, createContext, ReactChild, useState } from "react";

interface UserProps {
  children: ReactChild
}

interface GetUserProps {
  name: string;
  email: string;
  id?: string;
}

interface UserContextProps {
  name: string | undefined;
  GetUser: (name: string, email: string) => void;
  user?: GetUserProps;
}

export const contextUser = createContext({} as UserContextProps);


export function UserContext(props : UserProps) {
  const [name, setName ] = useState<string>('estamos na atividade');
  const [email, setEmail ] = useState<string>('estamos na atividade');
  const [user, setUser ] = useState<GetUserProps>();

  function GetUser(name: string, email: string) {
    setName(name)
    setEmail(email)
    setUser({
      name,
      email
    })
  }

  return (
    <contextUser.Provider
      value={{
        name,
        GetUser,
        user
      }}
    >
      {props.children}
    </contextUser.Provider>
  )
}