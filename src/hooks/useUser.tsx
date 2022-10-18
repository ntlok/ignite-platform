import { useContext } from "react";
import { contextUser } from "../context/userContext";


export function useUser() {
  return useContext(contextUser)
}