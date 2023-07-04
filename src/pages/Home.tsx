import { useEffect, useState } from "react"
import HeaderHome from "../components/Home/HeaderHome"
import NoteList from "../components/Home/NoteList"
import { NoteListProps } from "../Types"
import EditTagModal from "../components/Home/EditTagModal"

export default function Home({ availableTags, notes, updateTags, deleteTags }: NoteListProps) {
  const [stateModal, setStateModal] = useState<boolean>(false)

  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <section>
      <HeaderHome changeModal={setStateModal}/>
      <NoteList availableTags={availableTags} notes={notes}/>
      {stateModal && <EditTagModal availableTags={availableTags} changeModal={setStateModal} updateTags={updateTags} deleteTags={deleteTags}/>}
    </section>
  )
}
