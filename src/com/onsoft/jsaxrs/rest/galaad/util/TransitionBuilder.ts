import { TransitionConfig } from '../../hateoas/config/TransitionConfig';
import { Transition } from '../../hateoas/Transition';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../../hateoas/StateType';
import { HateoasContextError } from '../../hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../../hateoas/exception/HateoasContextErrorCode';
import { TransitionImpl } from '../impl/TransitionImpl';
import { State } from '../../hateoas/State';

/**
 * A basic builder for creating new <code>Transition</code> objects, based on the Gallad default implementation.
 */
export class TransitionBuilder {
    
    /**
     * Create and return a new <code>Transition</code> object, built from the specified config.
     * 
     * @param {TransitionConfig} config the config used to build the transition.
     * 
     * @returns {Transition} a new <code>Transition</code> object.
     */
    public buildFromConfig(config: TransitionConfig): Transition {
        const method: HttpMethod = config.method;
        const type: StateType = config.type;
        const transition: Transition = new TransitionImpl();
        transition.type = type;
        transition.resource = config.resource;
        transition.rel = config.rel;
        if (method) {
            if (type === StateType.CONTROLLER && method !== HttpMethod.POST) {
                throw new HateoasContextError(
                    HateoasContextErrorCode.INVALID_TRANSITION_CONFIG,
                    'CONTROLLER reources must be called with HTTP POST methods.'
                );
            } else {
                transition.method = method
            }
        }
        /* Controllers can only be invoked with POST HTTP method:
        else {
            if (type === StateType.CONTROLLER) {
                transition.method = HttpMethod.POST;
            }
        }*/
        return transition;
    }

    /**
     * Create and return a new <code>Transition</code> object, built from the state.
     * 
     * @param {State} config the state used to build the transition.
     * 
     * @returns {Transition} a new <code>Transition</code> object.
     */
    public buildFromState(state: State): Transition {
        const transition: Transition = new TransitionImpl();
        transition.type = state.type;
        transition.resource = state.resource;
        transition.method = state.method;
        return transition;
    }
}