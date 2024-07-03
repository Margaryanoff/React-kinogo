import bg_left from "../../images_background/background_left.webp";
import bg_right from "../../images_background/background_right.webp";
import bg_top from "../../images_background/bacgroud_top.webp";

const Background_left = () => {
    return (
        <section className="section_left_bg">
            <div>
                <img src={bg_left} alt="#" />
            </div>
        </section>
    );
};

const Background_right = () => {
    return (
        <section className="section_right_bg">
            <div>
                <img src={bg_right} alt="" />
            </div>
        </section>
    );
};

const Background_top = () => {
    return (
        <section>
            <div className="bg_top">
                <img src={bg_top} alt="" />
            </div>
        </section>
    );
};

export { Background_left };
export { Background_right };
export { Background_top };
