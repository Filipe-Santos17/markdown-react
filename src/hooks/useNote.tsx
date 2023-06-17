import { useOutletContext } from 'react-router-dom'
import { Note } from '../Types'

export default function useNote(){
  return useOutletContext<Note>()
}
