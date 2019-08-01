import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { StateType } from '../../hateoas/StateType';
import { Transition } from '../../hateoas/Transition';
import { LinkType } from '../../hateoas/LinkType';

/**
 * The default implementation of the <code>Transition</code> interface.
 */
export class TransitionImpl implements Transition {

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
    public method: HttpMethod | any = null;

    /**
     * @inheritdoc
     */
    public context?: any = null;
    
    /**
     * @inheritdoc
     */
    public rel?: LinkType = null;
}