import { Galaad } from './core/Galaad';

/**
 * Declare a mapping between a transition and a state.
 * 
 * @param {string} transitionRef the reference to the transition to map with the associated state.
 */
export function RsMapTransition(transitionRef: string) {
    return function(target: any, methodName: string, descriptor: any): any {
        Galaad.getInstance().addTransitionMappper({
            stateRef: methodName,
            transitionRef: transitionRef
        });
        return descriptor;
    };
};