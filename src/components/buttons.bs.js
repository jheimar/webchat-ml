'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Button$ReactTemplate = require("./button.bs.js");

var buttons = Css.style(/* :: */[
      Css.width(Css.px(270)),
      /* :: */[
        Css.border(Css.px(1), Css.solid, Css.lightgrey),
        /* :: */[
          Css.borderRadius(Css.px(3)),
          /* [] */0
        ]
      ]
    ]);

var buttonsTitle = Css.style(/* :: */[
      Css.maxWidth(Css.px(270)),
      /* :: */[
        Css.padding(Css.rem(0.8)),
        /* :: */[
          Css.borderTopLeftRadius(Css.px(3)),
          /* :: */[
            Css.borderTopRightRadius(Css.px(3)),
            /* :: */[
              Css.whiteSpace(/* preWrap */660870029),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var buttonsContainer = Css.style(/* :: */[
      Css.borderTop(Css.px(1), Css.solid, Css.lightgrey),
      /* [] */0
    ]);

var Style = /* module */[
  /* buttons */buttons,
  /* buttonsTitle */buttonsTitle,
  /* buttonsContainer */buttonsContainer
];

var component = ReasonReact.statelessComponent("Buttons");

function make(buttons$1, _) {
  var renderButton = function (button) {
    return ReasonReact.element(undefined, undefined, Button$ReactTemplate.make(button, /* array */[]));
  };
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
                          className: buttons
                        }, React.createElement("p", {
                              className: buttonsTitle,
                              style: {
                                overflowWrap: "break-word"
                              }
                            }, buttons$1[/* bTitle */0]), React.createElement("div", {
                              className: buttonsContainer
                            }, $$Array.map(renderButton, buttons$1[/* buttons */1])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* buttons Not a pure module */
