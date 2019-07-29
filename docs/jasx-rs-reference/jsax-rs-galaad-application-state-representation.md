:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: Application State Representation

# JSAX-RS Galaad Framework: Resource State Representation

## Overview

As Franck Massé says to define "Hypermedia as the engine of application state (HATEOAS)" _[MASSÉ, 2011]_:

> A resource’s state representation includes links to related resources. Links are the threads that weave the Web together by allowing users to traverse information and applications in a meaningful and directed manner. The presence, or absence, of a link on a page is an important part of the resource’s current state.

The `HateoasContext` interface of the JSAX-RS HATOEAS API defines the `getResourceStateRepresentation()` to help developer to create the state representation of a resource.

## Usage

The `getResourceStateRepresentation()` method has two parameters:

- `stateName`: the name of the state for which to create the resource state representation
- `parameters`: a map of optional properties used to set values of the state resource path

The `parameters` optional parameter is used to replace variable path segments by specific values, associated with the resource state representation. Values association is realized by using property names as reference to corresponding variable path segments.

For example, let us consider the URI `/books/:bookId`. It will be resolved as `/books/the-trial` if you use the following object to set parameters of the variable path segments:

```javascript
{
    bookId: 'the-trial'
}
```

The following code shows how to implement HATEOAS in HTTP response by using [Express.js](https://expressjs.com/) and the `@getResourceStateRepresentation()` method:

```javascript
@RsHateoasContext()
private _context: HateoasContext;

@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
@RsMapTransition('getBooksTransition')
@RsMapTransition('deleteBookTransition')
private getBook(): void {
    this._router.get('/books/:bookId', (req: Request, res: Response) => {
        const bookId: string = req.params.bookId;
        const stateParams: any = { bookId: bookId };
        const appState: any = this._context.getResourceStateRepresentation('getBook', stateParams);
        const book: Book = this._bookService.find((book: Book)=> book.id === bookId);
        const result: any = {
            data: book,
            application: appState
        };
        const status: HttpStatusCode = book ? HttpStatusCode.OK : HttpStatusCode.NOT_FOUND;
        res.status(status).send(result);
    });
}
```

So, calling the `/api/books/the-trial` URI with the HTTP `GET` method will return the following response:

```json
{
    "data": {
        "id": "the-trial",
        "name": "The Trial",
        "author": "Franz Kafka",
        "year": "1925"
    },
    "application": {
        "name": "galaad-sample",
        "apiPath": "/api",
        "state": {
            "type": "collection",
            "resource": "/books/the-trial",
            "method": "GET",
            "transitions": [
                {
                    "type": "collection",
                    "resource": "/books",
                    "method": "GET"
                },
                {
                    "type": "collection",
                    "resource": "/books/the-trial",
                    "method": "DELETE"
                }
            ]
        }
    }
}
```