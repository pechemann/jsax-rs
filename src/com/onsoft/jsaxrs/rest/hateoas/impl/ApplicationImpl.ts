import { State } from '../State';
import { Application } from '../Application';

/**
 * The default implementation fo the <code>Application</code> interface.
 */
export class ApplicationImpl  implements Application {

    /**
     * @inheritdoc
     */
    public state: State = null;
    
    /**
     * @inheritdoc
     */
    public name: string = null;

    
    /**
     * @inheritdoc
     */
    public domain?: string = null;
}