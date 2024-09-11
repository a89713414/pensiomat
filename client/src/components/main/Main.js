import React, { useRef } from "react";
import "./Main.css";
import texts from "../../components/data/texts.json";
import Search from "../search/Search";
import Card from "../card/Card";
import Form from "../form/Form";
import mainImg from "../assets/main.png";

const Main = () => {
  const formRef = useRef(null);
  const { mainHeader, placeHolder, cardsData, formData } = texts;

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main_wrapper container-fluid d-flex">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col main_header">
            <h3>שכירים?</h3>
            <h3>{mainHeader}</h3>
            <h3>ללא פתיחת תיק ועל בסיס הצלחה בלבד!</h3>
          </div>
        </div>
        <div className="row text-center pb-2">
          <div className="col">
            <Search placeHolder={placeHolder} />
          </div>
        </div>
        <div className="row pb-4">
          <div className="col">
            <Form formData={formData} formRef={formRef} />
          </div>
        </div>
        <div className="row pb-">
          <div className="col-md-12 main_img_container">
            <div className="video-wrapper">
              <iframe
                className="main_video"
                src="https://www.youtube.com/embed/80a_lrVdfqk?autoplay=1&mute=1&loop=1&playlist=80a_lrVdfqk&controls=0&modestbranding=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Embedded Video">
              </iframe>
            </div>
          </div>
        </div>


        <div className="row  text-center pt-3">
          {cardsData.title.map((val, index) => (
            <div className="col-md-6 col-12 pb-3" key={index}>
              <Card
                title={val}
                text={cardsData.text[index]}
                scrollToForm={scrollToForm}
              />
            </div>
          ))}
        </div>
        <div className="row pb-4">
          <div className="col">
            <Form formData={formData} formRef={formRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
