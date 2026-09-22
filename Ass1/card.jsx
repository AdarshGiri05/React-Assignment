import Price from "./price";
import laptop from "./img1.avif";
import mobile from "./img2.png";
import headphone from "./img3.avif";
import fitbit from "./img4.jpg";
import './card.css';
export default function Card({ title, idx }) {
    let im = [laptop, mobile, headphone, fitbit];
    let decp1 = ["laptop is a portable computer that can be used for work, entertainment, and communication.", "mobile is a handheld device that allows you to make calls, send messages, and access the internet.", "A tablet computer is a thin, portable mobile device featuring a touch-sensitive screen.", "Fitbit is a wearable device that tracks your physical activity, sleep, and heart rate."];
    let old = [50000, 20000, 3000, 10000];
    let newp = [40000, 15000, 2000, 8000];
    return <div className="card">
        <img src={im[idx]} alt={title} />
        <h2>{title}</h2>
        <p>{decp1[idx]}</p>
        <Price oldp={old[idx]} newp={newp[idx]} />
    </div>;
}