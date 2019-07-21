:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > [HATOEAS API](./jsax-rs-hatoeas-api.md) > [JSAX-RS Design](./jsax-rs-hatoeas-api-design.md)

# JSAX-RS HATOEAS API Design

JSAX-RS HATEOAS API has been designed with Roy T. Fielding's rule in mind:

> A REST API should be entered with no prior knowledge beyond the initial URI and set of standardized media types that are appropriate for the intended audience. [REST APIs must be hypertext-driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)

Since REST is no protocol dependent, our solution is not based upon usual structures, such as [RFC 5988 (web linking)](https://tools.ietf.org/html/rfc5988):

```json
{
    "departmentId": 10,
    "departmentName": "Administration",
    "locationId": 1700,
    "managerId": 200,
    "links": [
        {
            "href": "10/employees",
            "rel": "employees",
            "type" : "GET"
        }
    ]
}
```

Instead, the JSAX-RS API has been thought around the three following core entities:

- **application**: represents the entire set of functionalities defined for a distributed software
- **state**: specifies the application state for the current client
- **transition**: defines the way to navigate from the current step to another one

All of these entities are exposed as interfaces to ensure weak coupling between the nodes of an application over different networks. The following diagram shows cardinality relationships between these entities:

