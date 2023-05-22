import React from "react";
import "./Style.css";
import { Icon } from '@iconify/react';
export const Iconbar2 = () => {
  return (
    
      <div className="icon-bar2">

        <p
          href="https://twitter.com/Kushagra_var"
          className="telegram2"
          target="_kushagra"
        >
          click here to visit <Icon className="icon3" icon="simple-icons:telegram" />
        </p>

        <p
          href="https://www.instagram.com/varshneykushagra/"
          className="instagram2"
          target="_kushagra"
        >
          click here to visit <Icon className="icon3" icon="simple-icons:instagram" />
        </p>

        <p
          href="https://www.linkedin.com/in/kushagra-varshney0511/"
          className="linkedin2"
          target="_kushagra"
        >
          click here to visit <Icon className="icon3" icon="simple-icons:linkedin" />
        </p>

        <p
          href="https://github.com/KushagraVarshney05"
          className="github2"
          target="_kushagra"
        >
          click here to visit <Icon className="icon3" icon="simple-icons:github" />
        </p>
        <p
          href="https://leetcode.com/KushagraVarshney0511/"
          className="leetcode2"
          target="_kushagra"
        >
          click here to visit <Icon className="icon3" icon="simple-icons:leetcode" />
        </p>
      </div>
    
  );
};
