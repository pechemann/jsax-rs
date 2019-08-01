import { Galaad } from './core/Galaad';
import { LinkType } from '../hateoas/LinkType';

/**
 * Declare a mapping between a transition and a state.
 * 
 * @param {string} transitionRef the reference to the transition to map with the associated state.
 * @param {LinkType | any} rel the relation defined by the transition.
 */
export function RsMapTransition(transitionRef: string, rel?: LinkType | any) {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        Galaad.getInstance().addTransitionMappper({
            stateRef: methodName,
            transitionRef: transitionRef,
            rel: rel
        });
        return descriptor;
    };
};