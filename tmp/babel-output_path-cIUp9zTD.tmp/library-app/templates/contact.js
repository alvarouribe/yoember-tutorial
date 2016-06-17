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
            "line": 20,
            "column": 78
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "submit");
        dom.setAttribute(el1, "class", "btn btn-primary btn-lg btn-block");
        var el2 = dom.createTextNode("Submit message\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        \n");
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
      statements: [["inline", "input", [], ["type", "email", "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [4, 27], [4, 38]]]]], [], []], "class", "form-control", "autofocus", "autofocus", "placeholder", "please type your email"], ["loc", [null, [4, 0], [4, 120]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "model.name", ["loc", [null, [7, 26], [7, 36]]]]], [], []], "class", "form-control", "placeholder", "please type your name"], ["loc", [null, [7, 0], [7, 95]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "model.message", ["loc", [null, [10, 17], [10, 30]]]]], [], []], "class", "form-control", "rows", "7", "placeholder", "please type your message, it needs to be longer than 5 characters"], ["loc", [null, [10, 0], [10, 142]]]], ["attribute", "disabled", ["get", "isDisabled", ["loc", [null, [16, 15], [16, 25]]]]], ["element", "action", ["saveMessage", ["get", "model", ["loc", [null, [17, 31], [17, 36]]]]], [], ["loc", [null, [17, 8], [17, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});