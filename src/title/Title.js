import React from "react";
import "./Title.scss";
const Title = ({signUp}) => {
  return (
    <div className="title">
      {!signUp ? (
        <div className="title__not-signUp">
          Prepare for your career with a Project Management, Web-devlopment,
          Graphic-design, or Digital Marketing Internship at Northen
        </div>
      ) : (
        <div className="title__signUp">
          <p className="title__signUp__thanks">Thanks for you interest!</p>
          <p className="title__signUp__message">
            We will review your application and contact you for addition
            information should your background and experience meet the requirements of one of our openings
          </p>
        </div>
      )}
    </div>
  );
};

export default Title;
