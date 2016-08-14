import { REWIND_CASSETTE_AND_RESTORE_APP } from '../../shared/lib/actions';

// A higher-order reducer that watches for a very specific action, and wipes
// all non-VCR state when it sees it.
//
// Used to ensure that when a cassette starts playing, everything is as it
// should be.
export default function wrapReducer(reducer) {
  return (state = {}, action) => {
    switch (action.type) {
      // When our special action is dispatched, we want to re-initialize
      // the state, so that our casette can be played from a blank state.
      case REWIND_CASSETTE_AND_RESTORE_APP:
        return reducer({ reduxVCR: state.reduxVCR }, {});

      default:
        // Otherwise, delegate to the original reducer.
        return reducer(state, action);
    }
  };
}