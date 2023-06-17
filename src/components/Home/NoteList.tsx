import { useMemo, useState } from "react";
import ReactSelect from "react-select"
import LabelForm from "../newPage/LabelForm";
import { Tag, NoteListProps } from "../../Types";
import NoteCard from "./NoteCard";

export default function NoteList({ availableTags, notes }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [title, setTitle] = useState<string>('')

  function handleTitle({ currentTarget }: InputEvent){
    return setTitle(currentTarget ? currentTarget?.value : '')
  }

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      return (
        (title === "" || note.title.toLowerCase().includes(title.toLowerCase()))
        && (
          selectedTags.length === 0 || 
          selectedTags.every(tag => 
            note.tags.some(noteTag => noteTag.id === tag.id)
          )
        ))
    })
  }, [title, selectedTags, notes])

  return (
    <>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <div className="box-form-child">
          <LabelForm nameId={'title-search'} labelName={'Title'}/>
          <input className="input-text" type={'text'} name={'title-search'} id={'title-search'} required={false} value={title} onChange={handleTitle}/>
        </div>
        <div className="box-form-child">
          <LabelForm nameId={""} labelName={"Tags"} />
          <ReactSelect
            isMulti
            className="w-full h-full"
            required={false}
            value={selectedTags.map(item => {
              return { label: item.label, value: item.id }
            })}
            onChange={tags => {
              setSelectedTags(tags.map(tag => {
                return { label: tag.label, id: tag.value }
              }))
            }}
            options={availableTags.map(tag => {
              return { label: tag.label, value: tag.id }
            })}
          />
        </div>
      </form>
      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
        {filteredNotes.map(item => (
          <NoteCard key={item.id} id={item.id} title={item.title} tags={item.tags}/>
        ))}
      </section>
    </>
  )
}
