// Write your code here.
import './index.css'

const Card = props => {
  const {eachCard, eachCardSizing} = props
  const {key, title, description, imgUrl, className} = eachCard

  return (
    <li className={`${className} ${eachCardSizing}`}>
      <h1 className="cardHead">{title}</h1>
      <p className="cardDesc">{description}</p>
      <img src={imgUrl} alt={title} className="imageStyle" />
    </li>
  )
}

export default Card
