import { State } from '../../hateoas/State';
import { Transition } from '../../hateoas/Transition';

/**
 * A utility class for working with <code>State</code> objects, based on the Gallad default implementation.
 */
export class StateUtil {
    
    /**
     * Create and return a new Plain Old JavaScript Object (POJO) representation of the specified <code>State</code>
     * object.
     * 
     * @param {State} state the state from which to build the new POJO representation.
     * 
     * @returns {any} a new POJO representation of the specified <code>State</code> object.
     */
    public createStateRepresentation(state: State): any {
        let result: any = {};
        result.type = state.type;
        result.resource = state.resource;
        if (state.method) {
            result.method = state.method;
        }
        /*if (state.context) {
            result.context = state.context;
        }*/
        if (state.transitions) {
            const transitionRepresentations: Array<any> = new Array<any>();
            state.transitions.forEach((transition: Transition)=> {
                transitionRepresentations.push(this.createTransitionRepresentation(transition));
            });
            result.transitions = transitionRepresentations;
        }
        return result;
    }

    /**
     * Create and return a new Plain Old JavaScript Object (POJO) representation of the specified
     * <code>Transition</code> object.
     * 
     * @param {Transition} transition the transition from which to build the new POJO representation.
     * 
     * @returns {any} a new POJO representation of the specified <code>Transition</code> object.
     */
    public createTransitionRepresentation(transition: Transition): any {
        let result: any = {};
        result.type = transition.type;
        result.resource = transition.resource;
        if (transition.method) {
            result.method = transition.method;
        }
        /*if (state.context) {
            result.context = state.context;
        }*/
        if (transition.rel) {
            result.rel = transition.rel;
        }
        return result;
    }
}