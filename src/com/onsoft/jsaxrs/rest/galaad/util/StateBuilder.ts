import { State } from '../../hateoas/State';
import { StateConfig } from '../../hateoas/config/StateConfig';
import { StateImpl } from '../impl/StateImpl';
import { Transition } from '../../hateoas/Transition';

/**
 * A basic builder for creating new <code>State</code> objects, based on the Gallad default implementation.
 */
export class StateBuilder {
    
    /**
     * Create and return a new <code>State</code> object, built from the specified config.
     * 
     * @param {StateConfig} config the config used to build the state.
     * @param {Array<Transition>} transitions the list of transitions associated with the new state.
     * 
     * @returns {Application} a new <code>State</code> object.
     */
    public buildFromConfig(config: StateConfig, transitions?: Array<Transition>): State {
        const state: State = new StateImpl();
        state.name = config.name;
        state.type = config.type;
        state.resource = config.resource;
        state.method = config.method;
        if (transitions) {
            state.transitions = transitions;
        }
        return state;
    }
}