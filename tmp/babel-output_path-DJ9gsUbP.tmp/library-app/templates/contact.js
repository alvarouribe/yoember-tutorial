define("library-app/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 56
          }
        },
        "moduleName": "library-app/templates/contact.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Contact");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "for", "email");
        var el2 = dom.createTextNode("* Email: ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "for", "name");
        var el2 = dom.createTextNode("* Name: ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("* Your message:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "btn btn-primary btn-lg btn-block");
        var el2 = dom.createTextNode("Submit message");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [14]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "input", [], ["id", "email", "type", "email", "value", ["subexpr", "@mut", [["get", "emailAddress", ["loc", [null, [5, 38], [5, 50]]]]], [], []], "class", "form-control", "placeholder", "Please type your e-mail address.", "autofocus", "autofocus"], ["loc", [null, [5, 0], [5, 142]]]], ["inline", "input", [], ["id", "name", "type", "text", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [8, 36], [8, 40]]]]], [], []], "class", "form-control", "placeholder", "Please type your name."], ["loc", [null, [8, 0], [8, 100]]]], ["inline", "textarea", [], ["class", "form-control", "placeholder", "Your message. (At least 5 characters.)", "rows", "7", "value", ["subexpr", "@mut", [["get", "message", ["loc", [null, [11, 100], [11, 107]]]]], [], []]], ["loc", [null, [11, 0], [11, 109]]]], ["attribute", "disabled", ["get", "isDisabled", ["loc", [null, [14, 19], [14, 29]]]]], ["element", "action", ["sendMessage"], [], ["loc", [null, [15, 8], [15, 32]]]]],
      locals: [],
      templates: []
    };
  })());
});