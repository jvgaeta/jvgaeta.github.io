(function(window, undefined) {
  var dictionary = {
    "0fd709cc-1007-4703-a447-df1b52541925": "Main Page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Page",
    "b59a2066-f3b7-46a0-ae64-38d093a9f115": "Confirmation of link page",
    "dcbb8269-0125-4602-83e7-e21c1ffcaa8d": "Forgot password page",
    "83c8c710-37f6-459b-8e72-06796434a738": "Registration Page",
    "a387b1a7-16a1-40f6-b9b7-d74f3cb979f9": "Tutorial",
    "11ff575b-cdf7-49f6-9ad0-085b905959f2": "Login Page",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);