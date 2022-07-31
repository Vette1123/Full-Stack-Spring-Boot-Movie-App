import './Button.scss'

const Button = (props: any) => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export const OutlineButton = (props: any) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default Button
