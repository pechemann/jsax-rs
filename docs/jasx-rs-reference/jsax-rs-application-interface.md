:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > [Application Interface](./jsax-rs-application-interface.md)

# JSAX-RS: `Application` Interface

The `Application` interface provides information about an application managed by Hypermedia, including:

- the app name identifier
- the app root path information
- the current application state

Objects that implement the `Application` interface represent the state of an application associated with a specific resource.

## Name Identifier

The name property is a functional string used to identify an application. Because only domain names are unique, name identifiers cannot be used to guarantee uniqueness of applications.

This property is required.

## Application Root Path

The application root path is composed of the URI scheme, the authority, the API path and the API version, as  defined by [RFC 3986](https://tools.ietf.org/html/rfc3986). The `Application` interface defined the following properties to compose the app root  path:

- domain: the concatenation of scheme and authority
- apiPath: the path to the app API
- version: the app API version

All of the application root path properties are optional.

## Application State

The state property of the `Application` interface defined the structure of the application for the associated resource, including transitions to others app states.  Application states are specified by the [`State` interface](./jsax-rs-state-interface.md).

This property is required.