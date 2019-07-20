import { State } from '../../hateoas/State';

/**
 * A utility class that provides functionality for working with the resource path of a state.
 */
export class ResourcePathUtil {

    /**
     * A visitor function that applies segment parameters values to the resource path of the specified state.
     * 
     * @param {State} state the state for which to apply segment parameters values.
     * @param {{ [name: string]: any }} parameters optional properties used to set values of the state resource path.
     */
    public applySegmentParams(state: State, parameters?: { [name: string]: any }): void {
        if (parameters) {
            const keys: Array<string> = Object.keys(parameters);
            let result: string = state.resource;
            keys.forEach((key: string)=> {
                result = result.replace(`:${key}`, parameters[key]);
            });
            state.resource = result;
        }
    }
}