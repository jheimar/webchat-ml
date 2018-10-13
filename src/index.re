open Bindings;

let (channelid, token) =
  switch (getElementById("recast-webchat")) {
  | Some(element) => (
      getAttribute(element, "channelid"),
      getAttribute(element, "token"),
    )
  | None => (None, None)
  };

/* TODO check if a conversation exists in localstorage */
/*      -> if it's not the case, create it             */

switch (channelid, token) {
| (Some(channelid), Some(token)) =>
  let credentials: Types.credentials = {channelid, token};
  Js.Promise.(
    Preferences.Api.fetch(credentials)
    |> then_(preferences => {
         switch (preferences) {
         | Some(preferences) =>
           /* TODO create the conversation */
           ReactDOMRe.renderToElementWithId(
             <App preferences credentials />,
             "recast-webchat-div",
           )
         | None => Js.log("ERROR: Couldn't fetch the webchat preferences.")
         };
         resolve();
       })
  )
  |> ignore;
  ();
| _ => Js.log("ERROR: Could not find channelid and/or token credentials.")
};
