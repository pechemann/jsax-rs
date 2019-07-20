import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { Application } from '../../hateoas/Application';
import { State } from '../../hateoas/State';
import { ApplicationBuilder } from '../util/ApplicationBuilder';

/**
 * The default implementation fo the <code>HateoasContext</code> interface.
 */
export class HateoasContextImpl implements HateoasContext {

    /**
     * The context of the application managed by this Hypermedia REST engine.
     */
    private readonly CONTEXT: ApplicationContext = null;

    /**
     * The list of states registered for this Hypermedia REST engine.
     */
    private readonly STATES: Map<string, State> = null;

    /**
     * The builder used by this context to create applications.
     */
    private readonly APP_BUILDER: ApplicationBuilder = null;

    /**
     * Create a new <code>HateoasContextImpl</code> instance.
     * 
     * @param {ApplicationConfig} context the application context for this <code>HateoasContext</code> object.
     * @param {Array<State>} states the list of states associated with this context.
     */
    constructor(context: ApplicationContext, states: Array<State>) {
        this.CONTEXT = context;
        this.STATES = new Map<string, State>();
        this.APP_BUILDER = new ApplicationBuilder();
        this.initStates(states);
        
    }

    /**
     * @inheritdoc
     */
    public getApplicationContext(): ApplicationContext {
        return this.CONTEXT;
    }
    
    /**
     * @inheritdoc
     */
    public getApplicationState(stateName: string): Application {
        const result: Application = this.APP_BUILDER.buildFromContext(this.CONTEXT);
        result.state = this.STATES.get(stateName);
        return result;
    }

    /**
     * @inheritdoc
     */
    public getGraph(): Array<State> {
        return null;
    }

    /**
     * Initialize the states associated with this context.
     * 
     * @param {Array<State>} states the list of states associated with this context.
     */
    private initStates(states: Array<State>): void {
        states.forEach((state: State)=> {
            const name: string = state.name;
            if (!this.STATES.has(name)) {
                this.STATES.set(name, state);
            } else {
                // throw error
            }
        });
    }
}