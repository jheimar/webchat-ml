'use strict';

var Json = require("@glennsl/bs-json/lib/js/src/Json.bs.js");
var Fetch = require("bs-fetch/lib/js/src/Fetch.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Json_decode = require("@glennsl/bs-json/lib/js/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/lib/js/src/Json_encode.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

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
                    /* :: */[
                      /* tuple */[
                        "expire_at",
                        conversationObj[/* expire_at */4]
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

var Encode = /* module */[/* conversation */conversation];

function conversation$1(json) {
  return /* record */[
          /* id */Json_decode.oneOf(/* :: */[
                (function (param) {
                    return Json_decode.field("id", Json_decode.string, param);
                  }),
                /* :: */[
                  Json_decode.at(/* :: */[
                        "results",
                        /* :: */[
                          "id",
                          /* [] */0
                        ]
                      ], Json_decode.string),
                  /* [] */0
                ]
              ], json),
          /* connector */Json_decode.oneOf(/* :: */[
                (function (param) {
                    return Json_decode.field("connector", Json_decode.string, param);
                  }),
                /* :: */[
                  Json_decode.at(/* :: */[
                        "results",
                        /* :: */[
                          "connector",
                          /* [] */0
                        ]
                      ], Json_decode.string),
                  /* [] */0
                ]
              ], json),
          /* chatId */Json_decode.oneOf(/* :: */[
                (function (param) {
                    return Json_decode.field("chatId", Json_decode.string, param);
                  }),
                /* :: */[
                  Json_decode.at(/* :: */[
                        "results",
                        /* :: */[
                          "chatId",
                          /* [] */0
                        ]
                      ], Json_decode.string),
                  /* [] */0
                ]
              ], json),
          /* channel */Json_decode.oneOf(/* :: */[
                (function (param) {
                    return Json_decode.field("channel", Json_decode.string, param);
                  }),
                /* :: */[
                  Json_decode.at(/* :: */[
                        "results",
                        /* :: */[
                          "channel",
                          /* [] */0
                        ]
                      ], Json_decode.string),
                  /* [] */0
                ]
              ], json),
          /* expire_at */Json_decode.withDefault(0, (function (param) {
                  return Json_decode.field("expire_at", Json_decode.$$float, param);
                }), json)
        ];
}

var Decode = /* module */[/* conversation */conversation$1];

function create(param) {
  return fetch("https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + "/conversations"), Fetch.RequestInit[/* make */0](/* Post */2, {
                          Authorization: param[/* token */0]
                        }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  var conv = conversation$1(json);
                  return Promise.resolve(conv);
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

function getOrCreate(credentials, timeToLive) {
  var conv = Js_option.andThen((function (conversation) {
          var match = conversation[/* channel */3] === credentials[/* channelid */1] && conversation[/* expire_at */4] > Date.now();
          if (match) {
            return conversation;
          }
          
        }), getFromLocalStorage(/* () */0));
  if (conv !== undefined) {
    return Promise.resolve(conv);
  } else {
    return create(credentials).then((function (convOpt) {
                  return Promise.resolve(Js_option.map((function (conv) {
                                    var match = timeToLive === 0;
                                    var conversationTimeToLive = match ? 87600 : timeToLive;
                                    var expire_at = Date.now() + conversationTimeToLive * 3600000;
                                    var convString = Json.stringify(conversation(/* record */[
                                              /* id */conv[/* id */0],
                                              /* connector */conv[/* connector */1],
                                              /* chatId */conv[/* chatId */2],
                                              /* channel */conv[/* channel */3],
                                              /* expire_at */expire_at
                                            ]));
                                    localStorage.setItem("conversation", convString);
                                    return conv;
                                  }), convOpt));
                }));
  }
}

exports.Encode = Encode;
exports.Decode = Decode;
exports.Api = Api;
exports.getFromLocalStorage = getFromLocalStorage;
exports.getOrCreate = getOrCreate;
/* Json_encode Not a pure module */
