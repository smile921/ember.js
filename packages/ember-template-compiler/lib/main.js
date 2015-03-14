import _Ember from "ember-metal/core";
import precompile from "ember-template-compiler/system/precompile";
import compile from "ember-template-compiler/system/compile";
import template from "ember-template-compiler/system/template";
import { registerPlugin } from "ember-template-compiler/plugins";

import TransformEachInToBlockParams from "ember-template-compiler/plugins/transform-each-in-to-block-params";
import TransformWithAsToHash from "ember-template-compiler/plugins/transform-with-as-to-hash";
import TransformBindAttrToAttributes from "ember-template-compiler/plugins/transform-bind-attr-to-attributes";

// used for adding Ember.Handlebars.compile for backwards compat
import "ember-template-compiler/compat";

registerPlugin('ast', TransformWithAsToHash);
registerPlugin('ast', TransformEachInToBlockParams);
registerPlugin('ast', TransformBindAttrToAttributes);

export {
  _Ember,
  precompile,
  compile,
  template,
  registerPlugin
};
