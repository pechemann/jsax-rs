import { Galaad } from './core/Galaad';
import { TransitionMapping } from './util/TransitionMapping';
import { LinkType } from '../hateoas/LinkType';

/**
 * Create a new transition based upon an existing state.
 * 
 * @param {string} stateRef the reference to the state used to create the new transition.
 * @param {LinkType} rel the type of relation for the new transition.
 */
export function RsTransitionFromState(stateRef: string, rel?: LinkType) {
    return function (target: any, key: string): void {
        const mapping: TransitionMapping = {
            stateRef: stateRef,
            transitionRef: key,
            rel: rel
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