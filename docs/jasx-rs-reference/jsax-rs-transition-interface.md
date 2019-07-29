:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > `Transition` Interface

# JSAX-RS: `Transition` Interface

The `Transition` interface provides information about interactions between states of an application managed by Hypermedia, including:

- the resource path associated with the transition
- the type of the resource
- the request method used to access the resource
- the relationship between the state and transition resources

Objects that implement the `Transition` interface represent the way to navigate between resources exposed by an application.

## Resource Path

The resource path represents the unresolved route the resource associated with this transition, as shown below:

```
http://api.example.restapi.org/:country/:city/:museum/:artist/:opus
```

JSAX-RS resource path uses the semicolon syntax to define variable path segments. Thus, the preceding resource path sample, can be resolved as follow:

- `:country` => france
- `:city` => paris
- `:museum` => louvre
- `:artist` => leonardo-da-vinci
- `:opus` => mona-lisa

So, when using these values as parameters of the `getResourceStateRepresentation()` method, it will return the following resolved URI:

```
http://api.example.restapi.org/france/paris/louvre/leonardo-da-vinci/mona-lisa
```

## Resource Type

The type of a transition resource specifies archetype of the resource associated with this transition, as defined by Frank MASSÉ _[MASSÉ, 2011]_.

All availabe resource types are defined in the `StateType` enum.

## Request Method

The request method represents the desired interaction with the resource described in this transition. Because most of REST APIs are deployed over the HyperText Transfer Protocol, client typically use HTTP methods as value of the `method` property.

All availabe HTTP methods are defined in the `HttpMethod` enum.

## Resource Relationships

The resource relationships are used to express structural relationships in the API between the current app state and other states defined by transitions.

Relationships are commonly used to define _previous_ and _next_ states of the application. Because most of REST APIs are deployed over the HyperText Transfer Protocol, client typically use [HTML link types](https://www.w3.org/TR/html50/links.html#linkTypes) as value of the `rel` property.

All availabe link types are defined in the `LinkType` enum.
