interface Props {
  className: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
}

const Button: React.FC<Props> = ({ className, handleClick, label }: Props): JSX.Element => {
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
