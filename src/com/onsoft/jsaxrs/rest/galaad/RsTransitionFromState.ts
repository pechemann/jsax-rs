import { Galaad } from './core/Galaad';
import { TransitionMapping } from './util/TransitionMapping';

/**
 * Create a new transition based upon an existing state.
 * 
 * @param {string} stateRef the reference to the state used to create the new transition.
 */
export function RsTransitionFromState(stateRef: string) {
    return function (target: any, key: string): any {
        const mapping: TransitionMapping = {
            stateRef: stateRef,
            transitionRef: key
        };
        const getter: ()=> TransitionMapping = ()=> {
            return mapping;
        };
        const setter: ()=> void = ()=> {};
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: false
        });
        Galaad.getInstance().declareTransitionFromState(mapping);
    };
};