:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > `State` Interface

# JSAX-RS: `State` Interface

The `State` interface provides state information for an application managed by Hypermedia, including:

- the state name identifier
- the resource path associated with this state
- the type of the resource
- the request method used to access the resource
- the list of transitions available for this state

## Name Identifier

The name property is a functional string used to identify an application. Name identifiers must be uniques in the application.

You typically use name identifiers as parameters of both methods of the HateoasContext interface, `getApplicationState()` and `getApplicationStateRepresentation()`, to get a specific state in the application.

## Resource Path

The resource path represents the unresolved route the resource associated with this state, as shown below:

```
http://api.example.restapi.org/:country/:city/:museum/:artist/:opus
```

JSAX-RS resource path uses the semicolon syntax to define variable path segments. Thus, the preceding resource path sample, can be resolved as follow:

- `:country` => france
- `:city` => paris
- `:museum` => louvre
- `:artist` => leonardo-da-vinci
- `:opus` => mona-lisa

So, when using these values as parameters of the `getApplicationStateRepresentation()` method, it will return the following resolved URI:

```
http://api.example.restapi.org/france/paris/louvre/leonardo-da-vinci/mona-lisa
```

## Resource Type

The type of a state resource specifies archetype of the resource associated with this state, as defined by Frank MASSÉ _[MASSÉ, 2011]_.

All availabe resource types are defined in the `StateType` enum.

## Request Method

The request method represents the desired interaction with the resource described in this state. Because most of REST APIs are deployed over the HyperText Transfer Protocol, client typically use HTTP methods as value of the `method` property.

All availabe HTTP methods are defined in the `HttpMethod` enum.

## Transition List

The transition list provides information about all states accessible from the current state and the way to perform such operations. Application state transitions are specified by the [`Transition` interface](./jsax-rs-transition-interface.md)  interface.