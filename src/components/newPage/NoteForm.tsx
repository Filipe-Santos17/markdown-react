import InputForm from './InputForm'
import SelectForm from './SelectForm'
import TextAreaForm from './TextAreaForm'
import Button from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useRef, useState } from 'react'
import { NewNoteProps, Tag } from "../../Types"

export default function NoteForm({ onSubmit, onAddTag, availableTags, title="", markdown="", tags=[] }: NewNoteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: inputRef.current?.value ? inputRef.current.value : '', //NOT-NULL
      markdown: textAreaRef.current?.value ? textAreaRef.current.value : '',
      tags: selectedTags
    })

    navigate('/')
  }

  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <section className='grid gap-4 items-center grid-cols-2 mb-4'>
        <InputForm 
          labelName="Title" 
          nameId="title-note" 
          type="text" 
          isRequired={true} 
          setRef={inputRef} 
          defVal={title}
        />
        <SelectForm 
          labelName="Tags" 
          isRequired={false} 
          value={selectedTags} 
          onChange={setSelectedTags} 
          onAddTag={onAddTag} 
          availableTags={availableTags}
        />
        <TextAreaForm 
          labelName="Body" 
          nameId='body-note' 
          isRequired={true} 
          setRef={textAreaRef} 
          defVal={markdown}
        />
      </section>
      <div className='flex items-center justify-start gap-4'>
        <Button styletype='primary' type="submit">Save</Button>
        <Link to="/">
          <Button styletype='secondary' type="button">Not Save</Button>
        </Link>
      </div>
    </form>
  )
}
