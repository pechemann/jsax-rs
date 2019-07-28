import { LinkType } from "../../hateoas/LinkType";

/**
 * The <code>TransitionMapping</code> interface allows to declare links between <code>Transition</code> and
 * <code>State</code> objects.
 */
export interface TransitionMapping {

    /**
     * The name reference of the state for which to associate this transition.
     */
    stateRef: string;

    /**
     * The name reference of the transition to map with a state.
     */
    transitionRef: string;
    
    /**
     * Specifies the link type associated with this transition.
     */
    rel?: LinkType | any;
}