import React from "react";
import MarqueeWrapper from "./MarqueeWrapper";

function Skills({ skills }) {
  return (
    <MarqueeWrapper className="bg-primary">
      <div className="flex items-center gap-8 lg:gap-20">
        {skills.map(({ name, icon: Icon }, index) => (
          <span
            key={index}
            className="flex items-center text-xs font-bold uppercase tracking-widest text-primary-foreground lg:text-base"
          >
            <Icon className="mx-2 text-3xl lg:text-4xl" />
            {name}
          </span>
        ))}
      </div>
    </MarqueeWrapper>
  );
}

export default Skills;
