import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit",
  children: string,
  styletype: string,
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`btn ${props.styletype}`} {...props}>{props.children}</button>
  )
}
