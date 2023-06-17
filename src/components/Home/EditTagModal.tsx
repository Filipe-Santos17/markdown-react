import { EditModal } from "../../Types";
import Title from "../Title";


export default function EditTagModal({ availableTags, changeModal, updateTags, deleteTags }: EditModal) {

  function handleCloseModal() {
    changeModal(false)
  }

  function handleClickOutside(e: Event) {
    if (e.currentTarget === e.target) {
      changeModal(false)
    }
  }

  return (
    <section className="modal-container" onClick={handleClickOutside}>
      <section className="modal-wrapper">
        <header className="flex items-center justify-between gap-4 w-full border-b border-b-gray-300 px-8 py-4">
          <Title content="Edit Tags" />
          <button className="cursor-pointer rounded-full bg-[#ccc8] w-12 h-12 flex items-center justify-center" onClick={handleCloseModal}>
            <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
          </button>
        </header>
        <section className="w-full px-8 overflow-scroll overflow-x-hidden">
          <form className="flex flex-col gap-4">
            {availableTags.length && availableTags.map(item => (
              <div key={item.id} className="flex justify-between items-center gap-8">
                <section className="item-tag">
                  <input value={item.label} onChange={e => updateTags(item.id, e.currentTarget.value)}/>
                </section>
                <button className="w-12 h-full border border-red-500 py-4 flex items-center justify-center rounded cursor-pointer hover:bg-gray-100 hover:border-red-600" onClick={() => deleteTags(item.id)}>
                  <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" className="fill-red-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
                </button>
              </div>
            ))}
          </form>
        </section>
        <button className="btn primary mb-4 flex self-end !mr-12" onClick={handleCloseModal}>
          close
        </button>
      </section>
    </section>
  )
}
