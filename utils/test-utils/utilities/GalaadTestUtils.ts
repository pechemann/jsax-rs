/*!
 * This module constains utilities used by the Galaad test suites.
 */

import { Galaad } from '../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { TransitionMapping } from '../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';

// Utilities:
// destroy the current Galaad instance
export function destroy(): void {
    (Galaad as any)._instance = null;
};
// return the transition mapping list for the current Galaad instance
export function getInitTransitionList(): Array<TransitionMapping> {
    return (Galaad.getInstance() as any)._initTransitionList;
};