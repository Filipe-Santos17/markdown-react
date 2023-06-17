import { Navigate, Outlet, useParams } from "react-router-dom"
import { NoteListProps } from "../Types"

export default function NoteLayout({ notes }: NoteListProps) {
  const {id} = useParams()
  const noteById = notes.find(n => n.id === id)

  if(noteById === null){
    return <Navigate to={"/"} replace/>
  }

  return <Outlet context={noteById}/>
}
