/*!
 * This module constains utilities used by the Galaad test suites.
 */

import { Galaad } from '../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { TransitionMapping } from '../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';
import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { Transition } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { ApplicationConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';
import { StateConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { TransitionConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { LinkType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/LinkType';
import { HttpProtocol } from '../../../src/com/onsoft/jsaxrs.index';

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
        authority: 'my-domain.com',
        apiPath: 'api',
        version: '1.0.0',
        protocol:  HttpProtocol.HTTP
    };
}

// return a StateConfig object
export function getStateConfig(): StateConfig {
    return {
        name: 'stateName',
        type: StateType.COLLECTION,
        resource: '/path/to/resource',
        method: HttpMethod.GET
    };
};

// return a TransitionConfig object
export function getTransitionConfig(): TransitionConfig {
    return {
        name: 'transitionName',
        type: StateType.COLLECTION,
        resource: '/path/to/resource',
        method: HttpMethod.GET,
        stateRef: 'stateRef',
        rel: LinkType.NEXT
    };
};

// return a TransitionMapping object
export function getTransitionMapping(): TransitionMapping {
    return {
        stateRef: 'stateRef',
        transitionRef: 'transitionRef',
        rel: LinkType.NEXT
    };
};