import LabelForm from "./LabelForm";
import {InputFormTypes} from "../../Types";

export default function InputForm({labelName, nameId, type, isRequired, setRef, defVal}: InputFormTypes) {
  return (
    <div className="box-form-child">
      <LabelForm nameId={nameId} labelName={labelName}/>
      <input className="input-text" type={type} name={nameId} id={nameId} required={isRequired} ref={setRef} defaultValue={defVal}/>
    </div>
  )
}
