import { State } from '../../hateoas/State';

/**
 * A utility class that provides functionality for working with the resource path of a state.
 */
export class ResourcePathUtil {

    /**
     * The reference to the mark (<code>?</code>) character.
     */
    private readonly MARK_CHAR: string = '?';

    /**
     * The reference to the ampersand (<code>&</code>) character.
     */
    private readonly AMP_CHAR: string = '&';

    /**
     * The reference to an empty string.
     */
    private readonly EMPTY_STR: string = '';

    /**
     * Returns a string that represents the specified resource path on which provided segment parameters have been
     * injected.
     * 
     * @param {string} resourcePath the resource path for which to apply segment parameters values.
     * @param {{ [name: string]: any }} parameters optional properties used to set values of the resource path.
     * 
     * @returns {string} a string that represents the specified resource path on which segment parameters have been
     *                   injected.
     */
    public setSegmentParams(resourcePath: string, parameters?: { [name: string]: any }): string {
        let result: string = resourcePath;
        if (parameters) {
            const keys: Array<string> = Object.keys(parameters);
            const pathParts: Array<string> = resourcePath.split(this.MARK_CHAR);
            let queryParams: string = pathParts[1];
            result = pathParts[0];
            keys.forEach((key: string)=> {
                result = result.replace(`:${key}`, parameters[key]);
            });
            if (queryParams) {
                keys.forEach((key: string)=> {
                    const value: any = parameters[key];
                    const keyRef: string = `:${key}`;
                    if (value && value !== this.EMPTY_STR) {
                        queryParams = queryParams.replace(keyRef, `${key}=${value}`);
                    } else {
                        queryParams = queryParams.replace(keyRef, this.EMPTY_STR);
                    }
                });
                while (queryParams.endsWith(this.AMP_CHAR)) {
                    queryParams = queryParams.substring(0, queryParams.length - 1);
                }
                result += `?${queryParams}`;
            }
            if (result.endsWith(this.MARK_CHAR)) {
                result = result.substring(0, result.length - 1);
            }
        }
        return result;
    }
}