import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import NoteLayout from "./pages/NoteLayout";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";

import { NoteData, RawNote, Tag } from "./Types";
import useLocalStorage from "./hooks/useLocalStorage";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWihtTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagsIds.includes(tag.id)) }
    })
  }, [tags, notes])

  function onCreateNotes({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [ 
        ...prevNotes, 
        {...data, id: uuidv4(), tagsIds: tags.map(tag => tag.id)}
      ]
    })
  }

  function onDeleteNote(id: string){
    setNotes(previuosNotes => {
      return previuosNotes.filter(note => note.id !== id)
    })
  }

  function onUpdatedNotes(id: string,{tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return prevNotes.map(note =>{
        if(note.id === id){
          return {...note, ...data, id: uuidv4(), tagsIds: tags.map(tag => tag.id)}
        } else {
          return note
        }
      })
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function updateTag(id: string, label: string){
    setTags(previuosTags => {
      return previuosTags.map(tag => {
        if(tag.id === id){
          return {...tag, label}
        } else {
          return tag
        }
      })
    })
  }

  function deleteTag(id: string){
    setTags(previuosTags => {
      return previuosTags.filter(tag => tag.id !== id)
    })
  }

  return (
    <section className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home  
              availableTags={tags} 
              notes={notesWihtTags} 
              updateTags={updateTag} 
              deleteTags={deleteTag}
            />
          } />
          <Route path="/new" element={
            <NewNote 
              onSubmit={onCreateNotes} 
              onAddTag={addTag} 
              availableTags={tags} 
            />} 
          />
          <Route path=":id" element={<NoteLayout notes={notesWihtTags}/>}>
            <Route index element={<ViewNote onDel={onDeleteNote}/>}/>
            <Route path="edit" element={<EditNote onSubmit={onUpdatedNotes} onAddTag={addTag} availableTags={tags}/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
