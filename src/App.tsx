import { ApolloProvider } from "@apollo/client"
import { UserContext } from "./context/userContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"


function App() {

  return (
    <UserContext>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </UserContext>
  )
}

export default App
