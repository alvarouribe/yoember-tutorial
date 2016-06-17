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
            "column": 62
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
        var el2 = dom.createTextNode("* Your message: ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "submit");
        dom.setAttribute(el1, "class", "btn btn-primary btn-lg btn-block");
        var el2 = dom.createTextNode("Submit message");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [16]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "input", [], ["id", "email", "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [5, 25], [5, 36]]]]], [], []], "type", "email", "class", "form-control", "placeholder", "Please type your e-mail address.", "autofocus", "autofocus"], ["loc", [null, [5, 0], [5, 141]]]], ["inline", "input", [], ["id", "name", "value", ["subexpr", "@mut", [["get", "model.name", ["loc", [null, [8, 24], [8, 34]]]]], [], []], "type", "text", "class", "form-control", "placeholder", "Please type your name."], ["loc", [null, [8, 0], [8, 106]]]], ["inline", "textarea", [], ["class", "form-control", "value", ["subexpr", "@mut", [["get", "model.message", ["loc", [null, [11, 38], [11, 51]]]]], [], []], "placeholder", "Your message. (At least 5 characters.)", "rows", "7"], ["loc", [null, [11, 0], [11, 115]]]], ["attribute", "disabled", ["get", "isDisabled", ["loc", [null, [14, 19], [14, 29]]]]], ["element", "action", ["saveMessage", ["get", "model", ["loc", [null, [15, 31], [15, 36]]]]], [], ["loc", [null, [15, 8], [15, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});