import LabelForm from "./LabelForm"
import { TextAreaFormTypes } from "../../Types"

export default function TextAreaForm({ nameId, labelName, isRequired, setRef, defVal }: TextAreaFormTypes) {
  return (
    <div className="box-form-child col-span-2">
      <LabelForm nameId={nameId} labelName={labelName} />
      <textarea className="border w-full outline-none p-2 rounded focus:border-input" name={nameId} id={nameId} rows={15} required={isRequired} ref={setRef} defaultValue={defVal}></textarea>
    </div>
  )
}
