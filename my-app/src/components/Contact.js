import Card from "react-bootstrap/Card";
import("../App.css");

export default function Contact({ img, h3, p }) {
  return (
    <>
      <article className="main-container">
        <div className="contact_info_1">
          <Card className="h-100 flex-fill shadow-sm">
            <div className="contact_1">
              <img
                // src="/img/cat_img/6vznqLC3jJFb4krwmBZNBK.jpg"
                src={img}
                alt="cat-1"
                className="cat-1"
              />
              <h3 className="contact_name">{h3}</h3>
              <div className="contact_info">
                <div className="contact_phone">
                  <img
                    src="/img/telephone.png"
                    alt="telephone"
                    className="telephone"
                  />
                  <p className="number">{p} </p>
                </div>
                <div className="contact_email">
                  <img src="/img/mail-142.png" alt="Email" className="email" />
                  <p className="number"> sdvc@gmail.com </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </article>
    </>
  );
}
