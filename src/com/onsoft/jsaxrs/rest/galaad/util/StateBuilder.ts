import { State } from '../../hateoas/State';
import { StateConfig } from '../../hateoas/config/StateConfig';
import { StateImpl } from '../impl/StateImpl';
import { Transition } from '../../hateoas/Transition';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../../hateoas/StateType';
import { HateoasContextError } from '../../hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../../hateoas/exception/HateoasContextErrorCode';

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
     * @returns {State} a new <code>State</code> object.
     */
    public buildFromConfig(config: StateConfig, transitions?: Array<Transition>): State {
        const method: HttpMethod = config.method;
        const type: StateType = config.type;
        const state: State = new StateImpl();
        state.name = config.name;
        state.type = type;
        state.resource = config.resource;
        if (method) {
            if (type === StateType.INVARIANT && method !== HttpMethod.POST) {
                throw new HateoasContextError(
                    HateoasContextErrorCode.INVALID_STATE_CONFIG,
                    'INVARIANT reources must be called with HTTP POST methods.'
                );
            } else {
                state.method = method
            }
        } else {
            if (type === StateType.INVARIANT) {
                state.method = HttpMethod.POST;
            } else {
                state.method = HttpMethod.GET;
            }
        }
        if (transitions) {
            state.transitions = transitions;
        }
        return state;
    }
}