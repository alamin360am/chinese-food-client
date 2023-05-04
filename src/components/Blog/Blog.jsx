import React from "react";
import "./blog.css";

const Blog = () => {
    const ref = React.createRef()
  return (
    <section className="blog section">
      <h2 className="section-title">Question and answer (QnA)</h2>
      <div className="grid col-2">
        <div className="question-box">
          <h3 className="question">
            What is the differences between uncontrolled and controlled
            components?
          </h3>
          <p className="answer">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="question-box">
          <h3 className="question">
            How to validate React props using PropTypes?
          </h3>
          <p className="answer">
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components. We can use React props, short
            for properties, to send data from one component to another. If a
            component receives the wrong type of props, it can cause bugs and
            unexpected errors in your app. Since JavaScript doesn't have a
            built-in type checking solution, many developers use extensions like
            TypeScript and Flow. However, React has an internal mechanism for
            props validation called PropTypes. In this article, we'll learn how
            to validate props with React PropTypes
          </p>
        </div>
        <div className="question-box">
          <h3 className="question">What is the difference between nodejs and express js?</h3>
          <p className="answer">Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"</p>
        </div>
        <div className="question-box">
          <h3 className="question">What is a custom hook, and why will you create a custom hook?</h3>
          <p className="answer">Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>
      </div>
      {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf> */}
    </section>
  );
};

export default Blog;
