:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > [HATOEAS API](./jsax-rs-hatoeas-api.md) > [JSAX-RS Design](./jsax-rs-hatoeas-api-design.md)

**[WIP]**

# JSAX-RS HATOEAS API Design

## Overview

JSAX-RS HATEOAS API has been designed with Roy T. Fielding's rule in mind:

> A REST API should be entered with no prior knowledge beyond the initial URI and set of standardized media types that are appropriate for the intended audience. [REST APIs must be hypertext-driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)

Since REST is no protocol dependent, our solution is not based upon usual structures, such as [HTML5 (Link types)](https://www.w3.org/TR/html50/links.html#linkTypes), or [RFC 5988 (web linking)](https://tools.ietf.org/html/rfc5988):

```json
{
  "content":"Hello, User!",
  "_links":{
    "self":{
      "href":"http://api.sample-app.com/1.0/greeting?name=User"
    },
    "users":{
      "href":"http://api.sample-app.com/1.0/users"
    }
  }
}
```

_Figure 1: Spring HATEOAS result sample_

Instead, the JSAX-RS API has been thought around the three following core entities:

- **application**: represents the entire set of functionalities defined for a distributed software
- **state**: specifies the application state for the current client
- **transition**: defines the way to navigate from the current step to another one

All of these entities are exposed as interfaces to ensure weak coupling between the nodes of an application over different networks. The following diagram shows relationships between these entities:

![JSAX-RS HATEOAS API](./assets/jsax-rs-hatoeas-api.png)

_Figure 2: JSAX-RS HATEOAS classes diagram_

Thanks to this architecture, we can build and expose useful information to navigate the application:

```json
{
    "content": "Hello, User!",
    "application": {
        "name": "helios",
        "version": "1.0",
        "domain": "http://api.sample-app.com",
        "state": {
            "name": "helloUser",
            "type": "document",
            "resource": "/greeting?name=User",
            "transitions": [
                {
                    "type": "collection",
                    "resource": "/users"
                }
            ]
        }
    }
}
```

_Figure 3: JSAX-RS HATEOAS result sample_

## Advantages

The structure shown in _Figure 3_, even if it is still human-readable, has been designed to be non human-centric. This is a major point if we consider Fielding's quote above.

- uniform structure
- semantic information

### Uniform structure

JSAX-RS HATEOAS API avoids the use of conventional knowledge provided by the application, or any global empiric practice. The `self` and `users` property exposed in _Figure 1_ are good example of these.

In this sample, client must kon that `self` refers to the current state while `users` refers to a collection of the type of `User`. But, no specification exists for this structure. Moreover, the application does not provide knowledge to turn the structure into information, in a non human-centric way.

### Semantic information

Semantic information provides more flexibility without addition of contextual knowledge from the API. Let's consider the following transitions:

```json
...
"transitions": [
    {
        "type": "collection",
        "resource": "/users"
    }
]
...
```

_Figure 4: transition without method definition_

```json
...
"transitions": [
    {
        "type": "collection",
        "resource": "/users",
        "method": "GET"
    }
]
...
```

_Figure 5: transition with method definition_

_Figure 4_ means that client have to invoke the HTTP `OPTION` method to know what possible actions to do with this transtion. But, _Figure 5_ indicates that client must invoke the HTTP `GET` method to ensure expected behavior between current state the state specified by this transtion.
