import useNote from "../hooks/useNote"
import Title from "../components/Title"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useEffect } from "react"

export default function ViewNote({ onDel }: { onDel: (id: string) => void }) {
  const note = useNote()
  const navigate = useNavigate()

  function handleDelete() {
    onDel(note.id)
    navigate('/')
  }

  useEffect(() => {
    document.title = "View Note"
  }, [])

  return (
    <>
      <section className="flex w-full items-center justify-between gap-2 mb-16">
        <div className="flex flex-col gap-2 items-start">
          <Title content={note.title} />
          <div className="flex items-center justify-center gap-2">
            {note.tags.length && note.tags.map(i => (<span key={i.id} id={i.id} className="tag">{i.label}</span>))}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link to={`/${note.id}/edit`}>
            <Button styletype='primary' type="button">Edit</Button>
          </Link>
          <Button styletype='delete' type="button" onClick={handleDelete}>Delete</Button>
          <Link to="/">
            <Button styletype='secondary' type="button">Back</Button>
          </Link>
        </div>
      </section>
      <ReactMarkdown className="preview">{note.markdown}</ReactMarkdown>
    </>
  )
}
