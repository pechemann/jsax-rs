import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../StateType';
import { Transition } from '../Transition';

/**
 * The default implementation of the <code>Transition</code> interface.
 */
export class TransitionImpl implements Transition {

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
    public context?: any = null;
}