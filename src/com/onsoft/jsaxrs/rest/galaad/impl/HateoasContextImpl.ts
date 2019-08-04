import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { Application } from '../../hateoas/Application';
import { State } from '../../hateoas/State';
import { ApplicationBuilder } from '../util/ApplicationBuilder';
import { ResourcePathUtil } from '../util/ResourcePathUtil';
import { HateoasContextErrorCode } from '../../hateoas/exception/HateoasContextErrorCode';
import { HateoasContextError } from '../../hateoas/exception/HateoasContextError';
import { StateUtil } from '../util/StateUtil';
import { ApplicationUtil } from '../util/ApplicationUtil';

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
     * The reference to the utility that sets values to segments of a resource path.
     */
    private readonly RESOURCE_PATH_UTIL: ResourcePathUtil = null;
    
    /**
     * The reference to the utility that creates states representations.
     */
    private readonly STATE_UTIL: StateUtil = null;

    /**
     * The reference to the utility that creates application states representations.
     */
    private readonly APP_UTIL: ApplicationUtil = null;

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
        this.RESOURCE_PATH_UTIL = new ResourcePathUtil();
        this.STATE_UTIL = new StateUtil();
        this.APP_UTIL = new ApplicationUtil();
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
        if (this.STATES.has(stateName)) {
            result.state = this.STATES.get(stateName);
        } else {
            throw new HateoasContextError(
                HateoasContextErrorCode.INVALID_STATE_REFERENCE,
                `State does not exist in the application context: state=${stateName}`
            );
        }
        return result;
    }

    /**
     * @inheritdoc
     */
    public getResourceStateRepresentation(stateName: string, parameters?: { [name: string]: any }): any {
        const result: any = this.APP_UTIL.createAppRepresentationFromContext(this.CONTEXT);
        if (this.STATES.has(stateName)) {
            const stateRepresentation: any = this.STATE_UTIL.createStateRepresentation(this.STATES.get(stateName));
            const transitions = stateRepresentation.transitions;
            stateRepresentation.resource = 
                this.RESOURCE_PATH_UTIL.setSegmentParams(stateRepresentation.resource, parameters);
            result.state = stateRepresentation;
            if (transitions) {
                transitions.forEach((transition: any)=> {
                    transition.resource = 
                        this.RESOURCE_PATH_UTIL.setSegmentParams(transition.resource, parameters);
                });
            }
        } else {
            throw new HateoasContextError(
                HateoasContextErrorCode.INVALID_STATE_REFERENCE,
                `State does not exist in the application context: state=${stateName}`
            );
        }
        return result;
    }

    /**
     * @inheritdoc
     */
    public getGraph(): Array<State> {
        return Array.from(this.STATES.values());
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
                throw new HateoasContextError(
                    HateoasContextErrorCode.INVALID_STATE_CONFIG,
                    `A state with the same name already exists in the application context: state=${name}`
                );
            }
        });
    }

}