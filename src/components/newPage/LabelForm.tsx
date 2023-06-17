export default function LabelForm({nameId, labelName} : {labelName: string, nameId: string}) {
  return (
    <label className="label-form" htmlFor={nameId}>{labelName}</label>
  )
}
