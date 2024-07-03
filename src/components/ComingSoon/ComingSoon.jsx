import "../ComingSoon/ComingSoon.css";

const ComingSoon = ({ title, info, image }) => {
    return (
        <div>
            <div className="image_card">
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default ComingSoon;
