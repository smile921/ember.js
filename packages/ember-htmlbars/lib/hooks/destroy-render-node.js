/**
@module ember
@submodule ember-htmlbars
*/

export default function destroyRenderNode(renderNode) {
  var state = renderNode.state;
  if (!state) { return; }

  var unsubscribers = state.unsubscribers;
  if (!unsubscribers) { return; }

  for (var i=0, l=unsubscribers.length; i<l; i++) {
    unsubscribers[i]();
  }
}
