import m1 from "../assest/m2.jpg";
import m2 from "../assest/m1.jpg";
import m3 from "../assest/m3.jpg";
import './Example.css';

export default function Examples() {
    return (
        <div className="examples-container">
            <div className="example-card">
                <div className="example-image-wrapper">
                    <img
                        src={m1}
                        alt="Anime style transformation example"
                        className="example-image"
                    />
                </div>
            </div>

            <div className="example-card main-example">
                <div className="example-image-wrapper">
                    <img
                        src={m2}
                        alt="Original photo and anime transformation"
                        className="example-image"
                    />
                </div>
            </div>

            <div className="example-card">
                <div className="example-image-wrapper">
                    <img
                        src={m3}
                        alt="Anime"
                        className="example-image"
                    />
                </div>
            </div>
        </div>
    );
}