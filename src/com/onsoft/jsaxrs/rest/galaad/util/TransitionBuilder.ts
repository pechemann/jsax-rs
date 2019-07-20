import { State } from '../../hateoas/State';
import { TransitionConfig } from '../../hateoas/config/TransitionConfig';
import { StateImpl } from '../impl/StateImpl';
import { Transition } from '../../hateoas/Transition';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../../hateoas/StateType';
import { HateoasContextError } from '../../hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../../hateoas/exception/HateoasContextErrorCode';
import { TransitionImpl } from '../impl/TransitionImpl';

/**
 * A basic builder for creating new <code>Transition</code> objects, based on the Gallad default implementation.
 */
export class TransitionBuilder {
    
    /**
     * Create and return a new <code>Transition</code> object, built from the specified config.
     * 
     * @param {TransitionConfig} config the config used to build the state.
     * 
     * @returns {Transition} a new <code>Transition</code> object.
     */
    public buildFromConfig(config: TransitionConfig): Transition {
        const method: HttpMethod = config.method;
        const type: StateType = config.type;
        const transition: Transition = new TransitionImpl();
        transition.type = type;
        transition.resource = config.resource;
        if (method) {
            if (type === StateType.INVARIANT && method !== HttpMethod.POST) {
                throw new HateoasContextError(
                    HateoasContextErrorCode.INVALID_TRANSITION_CONFIG,
                    'INVARIANT reources must be called with HTTP POST methods.'
                );
            } else {
                transition.method = method
            }
        } else {
            if (type === StateType.CONTROLLER) {
                transition.method = HttpMethod.POST;
            } else {
                transition.method = HttpMethod.GET;
            }
        }
        return transition;
    }
}