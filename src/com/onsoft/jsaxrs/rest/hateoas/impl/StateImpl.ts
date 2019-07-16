import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../StateType';
import { State } from '../State';
import { Transition } from '../Transition';

/**
 * The default implementation of the <code>State</code> interface.
 */
export class StateImpl implements State {

    /**
     * @inheritdoc
     */
    public name: string = null;

    /**
     * @inheritdoc
     */
    public type: StateType = null;

    /**
     * @inheritdoc
     */
    public resource: string = null;

    /**
     * @inheritdoc
     */
    public method: HttpMethod = null;

    /**
     * @inheritdoc
     */
    public transitions?: Array<Transition> = null;
    
    /**
     * @inheritdoc
     */
    public context?: any = null;
}