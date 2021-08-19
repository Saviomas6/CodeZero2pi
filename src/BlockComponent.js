import React from "react";
import Block from "./Block";

const BlockComponent = () => {
  return (
    <div className="block">
      <div>
        <Block
          img="https://previews.123rf.com/images/alena08/alena081803/alena08180300029/97677545-on-and-off-switch-toggle-toggle-icons-on-white-background-vector-illustration-.jpg"
          heading="Built for developers"
          para="Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components."
        />
      </div>
      <div>
        <Block
          img="https://previews.123rf.com/images/alena08/alena081803/alena08180300029/97677545-on-and-off-switch-toggle-toggle-icons-on-white-background-vector-illustration-.jpg"
          heading="Designed to be modern"
          para="Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful."
        />
      </div>
      <div>
        <Block
          img="https://previews.123rf.com/images/alena08/alena081803/alena08180300029/97677545-on-and-off-switch-toggle-toggle-icons-on-white-background-vector-illustration-.jpg"
          heading="Documentation for everything"
          para="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
        />
      </div>
    </div>
  );
};

export default BlockComponent;
