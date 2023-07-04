import { EditNoteProps } from "../Types"
import useNote from "../hooks/useNote"
import Title from "../components/Title"
import NoteForm from "../components/newPage/NoteForm"
import { useEffect } from "react"

export default function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote()

  useEffect(() => {
    document.title = "Edit Note"
  }, [])

  return (
    <>
      <Title content='Edit Note' />
      <NoteForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} title={note.title} markdown={note.markdown} tags={note.tags}/>
    </>
  )
}
