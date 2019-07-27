:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > [HateoasContext Interface](./jsax-rs-hateoascontext-interface.md)

# JSAX-RS: `HateoasContext` Interface

The `HateoasContext` interface is the context in which application components are executed. The HATEOAS context provides methods for accessing:

- application context
- application states
- application state representation
- application states graph

## Application Context

The context of an application provides information that compose a unique key for identifying the application It is represented by an `ApplicationContext` object.

The application context is immutable and accessible by using the `getApplicationContext()` method of an `HateoasContext` object.

## Application States

Statelessness is a core principle of REST architectural style. It means that RESTful Web Services do not keep a client state on the server. So, application states represent structures that define where you are in the interaction with a distrubuted application.

All application states are stored in the HATEOAS context and can be accessed by using the `getApplicationState()` method. An application state is identified by its name which must be unique in the HATEOAS context.

## Application State Representation

While states define structure about endpoints of an application, state representations expose full information regarding the position at the current navigation. 

State representations are literal JavaScript objects, built from data defined by the [`Application` interface](./jsax-rs-application-interface.md), for the current state. By using the `getApplicationStateRepresentation()`, developer provides segment parameters for the current resource path and get the related HATEOAS information.

## Application States Graph

Because all states are created at initialisation, HATEOAS context is able to provide the entire states graph for an application. Thus, the `getGraph()` method is useful for understanding the entire navigation of the application.