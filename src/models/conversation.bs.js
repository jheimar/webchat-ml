// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as Json from "@glennsl/bs-json/src/Json.bs.js";
import * as Fetch from "bs-fetch/src/Fetch.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Json_encode from "@glennsl/bs-json/src/Json_encode.bs.js";
import * as Js_primitive from "bs-platform/lib/es6/js_primitive.js";

function conversation(conversationObj) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "id",
                conversationObj[/* id */0]
              ],
              /* :: */[
                /* tuple */[
                  "connector",
                  conversationObj[/* connector */1]
                ],
                /* :: */[
                  /* tuple */[
                    "chatId",
                    conversationObj[/* chatId */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "channel",
                      conversationObj[/* channel */3]
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

var Encode = /* module */[/* conversation */conversation];

function conversation$1(json) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* connector */Json_decode.field("connector", Json_decode.string, json),
          /* chatId */Json_decode.field("chatId", Json_decode.string, json),
          /* channel */Json_decode.field("channel", Json_decode.string, json)
        ];
}

function result(json) {
  return /* record */[
          /* results */Json_decode.field("results", conversation$1, json),
          /* message */Json_decode.field("message", Json_decode.string, json)
        ];
}

var Decode = /* module */[
  /* conversation */conversation$1,
  /* result */result
];

function create(param) {
  return fetch("https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + "/conversations"), Fetch.RequestInit[/* make */0](/* Post */2, {
                          Authorization: param[/* token */0]
                        }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  var result$1 = result(json);
                  return Promise.resolve(result$1[/* results */0]);
                })).catch((function () {
                return Promise.resolve(undefined);
              }));
}

var Api = /* module */[/* create */create];

function getFromLocalStorage() {
  return Js_option.andThen((function (json) {
                return conversation$1(json);
              }), Js_option.andThen(Json.parse, Js_primitive.null_to_opt(localStorage.getItem("conversation"))));
}

function getOrCreate(credentials) {
  var conv = Js_option.andThen((function (conversation) {
          if (conversation[/* channel */3] === credentials[/* channelid */1]) {
            return conversation;
          }
          
        }), getFromLocalStorage(/* () */0));
  if (conv !== undefined) {
    return Promise.resolve(conv);
  } else {
    return create(credentials).then((function (convOpt) {
                  return Promise.resolve(Js_option.map((function (conv) {
                                    var convString = Json.stringify(conversation(conv));
                                    localStorage.setItem("conversation", convString);
                                    return conv;
                                  }), convOpt));
                }));
  }
}

export {
  Encode ,
  Decode ,
  Api ,
  getFromLocalStorage ,
  getOrCreate ,
  
}
/* Json_encode Not a pure module */
