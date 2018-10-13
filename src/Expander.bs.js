// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("Expander");

function make(onClick, preferences, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "RecastAppHeaderExpander",
                          style: {
                            backgroundColor: preferences[/* accentColor */0],
                            color: preferences[/* complementaryColor */1]
                          },
                          onClick: onClick
                        }, React.createElement("img", {
                              className: "RecastAppExpander--logo",
                              src: preferences[/* expanderLogo */10]
                            }), preferences[/* expanderTitle */11], React.createElement("div", {
                              className: "RecastAppExpander--onboarding"
                            }, preferences[/* onboardingMessage */9]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
