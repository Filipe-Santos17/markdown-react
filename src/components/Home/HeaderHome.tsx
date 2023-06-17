import Title from "../Title"
import Button from "../Button"
import { Link } from "react-router-dom"
import React from "react"

export default function HeaderHome({ changeModal } : {changeModal: React.Dispatch<React.SetStateAction<boolean>>}) {

  function openModalEdit(){
    changeModal(true)
  }

  return (
    <section className="flex items-center justify-between mb-4">
      <Title content="Lists" />
      <div className='flex items-center justify-start gap-2'>
        <Link to="/new">
          <Button styletype='primary' type="submit">Create</Button>
        </Link>
        <Link to="/">
          <Button styletype='secondary' type="button" onClick={openModalEdit}>Edit Tags</Button>
        </Link>
      </div>
    </section>
  )
}
