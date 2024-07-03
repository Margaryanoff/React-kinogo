import "../Serials/Serials.css";

const Serials = ({ image, title, season, serials, channels }) => {
    return (
        <div>
            <div className="serials_image">
                <img src={image} alt="" />
            </div>
            <div className="title_season">
                <h2>{title}</h2>
                <p>{season}</p>
            </div>
            <div className="series_chanels">
                <strong>{serials}</strong>
                <p>{channels}</p>
            </div>
        </div>
    );
};

export default Serials;
