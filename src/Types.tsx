export type Note = {
  id: string,
} & NoteData

export type RawNoteData = {
  title: string,
  markdown: string,
  tagsIds: string[],
}

export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[],
}

export type Tag = {
  id: string,
  label: string,
}

export type RawNote = {
  id: string,
} & RawNoteData

export type NewNoteProps ={
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void, 
  availableTags: Tag[]
} & Partial<NoteData>

export type EditNoteProps ={
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void, 
  availableTags: Tag[]
}

export type SelectFormTypes = {
  labelName: string, 
  isRequired: boolean, 
  value: Tag[], 
  onChange: React.Dispatch<React.SetStateAction<Tag[]>> 
} & NewNoteProps

export type InputFormTypes = {
  labelName: string, 
  nameId: string, 
  type: string, 
  isRequired: boolean, 
  setRef: React.MutableRefObject<HTMLInputElement>,
  defVal: string,
}

export type TextAreaFormTypes = {
  nameId: string, 
  labelName: string, 
  isRequired: boolean, 
  setRef: React.MutableRefObject<HTMLTextAreaElement>,
  defVal: string,
}

export type NoteListProps = {
  availableTags: Tag[],
  notes: NoteCardType[],
} & Partial<ChangeTags>

export type NoteCardType = {
  id: string, 
  title: string, 
  tags: Tag[],
}

export type ChangeTags = {
  updateTags: (id: string, label: string) => void, 
  deleteTags: (id: string) => void,
}

export type EditModal = {
  availableTags: Tag[]
  changeModal: React.Dispatch<React.SetStateAction<boolean>>
} & ChangeTags
