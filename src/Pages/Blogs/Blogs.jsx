import React from "react";

const Blogs = () => {

  return (
    <div className="my-20 mx-7">
      <h2 className="text-center text-4xl text-warning my-10">Blogs</h2>
      <div className="card grid gap-5 grid-cols-1 p-10 glass w-full shadow-2xl bg-base-100">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">01.Difference between SQL and NoSQL?</h2>
            <p>
              SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against
              structured data, including ad hoc requests.NoSQL databases lack consistency across products and typically require more work to query
              data, particular as query complexity increases.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">02.What is JWT, and how does it work?</h2>
            <p>
              JSON token is Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is
              compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2>03.What is the difference between javascript and NodeJS?</h2>
            <p>
              Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet.Ultricies urna proin fusce nulla pretium
              sodales vel magna et massa euismod vulputate sed.JavaScript is a simple programming language that can be used with any browser that has
              the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming
              language
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">04.How does NodeJS handle multiple requests at the same time?</h2>
            <p>
              The handle 40K requests per second having Node.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built
              with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and
              processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
