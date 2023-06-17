import CreatableReactSelect from "react-select/creatable"
import LabelForm from "./LabelForm"
import { SelectFormTypes } from "../../Types"
import { v4 as uuidv4 } from "uuid";

export default function SelectForm({ labelName, isRequired, value, onChange, onAddTag, availableTags}: SelectFormTypes) {
  return (
    <div className="box-form-child">
      <LabelForm nameId={""} labelName={labelName} />
      <CreatableReactSelect 
        isMulti 
        className="w-full h-full" 
        required={isRequired} 
        onCreateOption={label => {  
          const newTag = {id: uuidv4(), label: label}
          onAddTag(newTag)
          onChange(prev => [...prev, newTag]) //setSelectedTags
        }} 
        value={value.map(item => {
          return { label: item.label, value: item.id }
        })} 
        onChange={tags => {
          onChange(tags.map(tag => {
            return { label: tag.label, id: tag.value }
          }))
        }}
        options={availableTags.map(tag => {
          return {label: tag.label, value: tag.id}
        })} 
        />
    </div>
  )
}
