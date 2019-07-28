import { Galaad } from './core/Galaad';

/**
 * Create a new transition based upon an existing state.
 * 
 * @param {string} stateRef the reference to the state used to create the new transition.
 */
export function RsTransitionFromState(stateRef: string) {
    return function (target: any, key: string): any {
        Galaad.getInstance().declareTransitionFromState({
            stateRef: stateRef,
            transitionRef: key
        });
    };
};