// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Header$ReactTemplate from "./Header.bs.js";

var chat = Css.style(/* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.top(Css.px(0)),
        /* :: */[
          Css.left(Css.px(0)),
          /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* :: */[
              Css.height(/* `percent */[
                    -119887163,
                    100
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Style = /* module */[/* chat */chat];

var component = ReasonReact.reducerComponent("Chat");

function make(preferences, closeWebchat, _) {
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
          /* render */(function (self) {
              return React.createElement("div", {
                          className: chat
                        }, ReasonReact.element(undefined, undefined, Header$ReactTemplate.make(closeWebchat, preferences, /* array */[])), Pervasives.string_of_bool(self[/* state */1][/* showSlogan */0]));
            }),
          /* initialState */(function () {
              return /* record */[/* showSlogan */true];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, _$1) {
              return /* NoUpdate */0;
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  Style ,
  component ,
  make ,
  
}
/* chat Not a pure module */