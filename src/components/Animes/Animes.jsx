import '../Animes/Animes.css'

const Animes = ({image, name}) =>{
    return(
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default Animes