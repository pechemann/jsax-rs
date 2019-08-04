/*!
 * This module constains utilities used by the Galaad test suites.
 */

import { Galaad } from '../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { TransitionMapping } from '../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';
import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { Transition } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { ApplicationConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';

// Utilities:
// destroy the current Galaad instance
export function destroy(): void {
    (Galaad as any)._instance = null;
};
// return the transition mapping list for the current Galaad instance
export function getInitTransitionList(): Array<TransitionMapping> {
    return (Galaad.getInstance() as any)._initTransitionList;
};

// return the state list for the current Galaad instance
export function getInitStates(): Array<State> {
    return (Galaad.getInstance() as any)._initStates;
};

// return the transition map for the current Galaad instance
export function getInitransitionMap(): Map<string, Transition> {
    return (Galaad.getInstance() as any)._initTransitions;
};

// return the creational transition list for the current Galaad instance
export function getCreateTransitionList(): Array<TransitionMapping> {
    return (Galaad.getInstance() as any)._createTransitionList;
};

// create and return a new ApplicationConfig object.
export function createConfig(): ApplicationConfig {
    return {
        name: 'app-name',
        domain: 'http://domain.com',
        apiPath: 'api',
        version: '1.0.0'
    };
}
