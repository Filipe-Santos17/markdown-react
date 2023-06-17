import { NoteCardType } from "../../Types"
import { Link } from "react-router-dom"

export default function NoteCard({ id, title, tags }: NoteCardType) {
  return (
    <Link className="card" to={`/${id}`}>
      <h3>{title}</h3>
      <div className="flex items-center justify-center gap-2">
        {tags.map(i => (<span key={i.id} id={i.id} className="tag">{i.label}</span>))}
      </div>
    </Link>
  )
}
