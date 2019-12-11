import React from "react";
const Error = () => {
  return (
    <section className="error">
      <h1 className="error__tit">Page not found</h1>
      <p className="error__txt">
        Oh, we can’t find the page you’re looking for. Try going back to the
        previous page or go to our <a href="/">home page</a>.
      </p>
    </section>
  );
};

export default Error;
