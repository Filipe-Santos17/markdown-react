import NoteForm from '../components/newPage/NoteForm'
import Title from '../components/Title'
import { NewNoteProps } from '../Types'


export default function NewNote({onSubmit, onAddTag, availableTags}: NewNoteProps) {  
  return (
    <>
      <Title content='New Note'/>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  )
}
