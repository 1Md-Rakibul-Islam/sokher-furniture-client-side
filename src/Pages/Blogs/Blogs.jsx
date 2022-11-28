import React from "react";

const Blogs = () => {
  return (
    <div className="mx-7">
      <h2 className="text-center text-4xl text-primary my-10">Our Blogs</h2>
      <div className="card grid gap-5 grid-cols-1 p-10 glass w-full shadow-2xl bg-base-100">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">01. What are the different ways to manage a state in a React application?</h2>
            <p>
              Managing state in your React apps isn’t as simple as using useState or useReducer. Not only are there are a lot of different kinds of
              state, but there often dozens of ways of managing each kind. Which should you choose? In this guide, we will uncover the several kinds
              of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. Want the #1 resource to
              learn React? You can become a React pro if you study 30 minutes a day with the React Bootcamp. The Four Kinds of React State to Manage
              When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main
              types of state you need to properly manage in your React apps: Local state Global state Server state URL state
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">02. How does prototypical inheritance work?</h2>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object
              can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use
              Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2>03. What is a unit test? Why should we write unit tests?</h2>
            <p>
              The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult
              to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">04. React vs. Angular vs. Vue?</h2>
            <p>
              Angular vs React If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons
              discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while
              Angular is generally better for more complex apps that are enterprise-ready. React often requires extra modules and components, which
              keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is
              more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its
              core compared to React. React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from
              ES6 and up, while Angular favors those same developers who are also familiar with TypeScript. React vs Vue The choice between React vs
              Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in
              many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the
              decline either. Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue
              can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
              Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is
              quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and
              similar concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
