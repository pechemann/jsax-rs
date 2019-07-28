:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > JSAX-RS Galaad Framework: Overview

# JSAX-RS Galaad Framework: Overview

Galaad framework is the reference implementation of the JSAX-RS HATEOAS API for JavaScript applications. It is entirely written in [TypeScript](https://www.typescriptlang.org/) and is both, platforms and frameworks, independent.

Galaad has been designed for high productivity and the decorators based implementation makes it very easy-to-use.

## Decorators Implementation

Galaad uses few decorators to help developers to design HATEOAS implementation of REST APIs:

- `@RsApplication`: provides configuration for `Application` objects
- `@RsHateoasContext`: provides access to the `HateoasContext` context for the current app
- `@RsState`: provides configuration for `State` objects
- `@RsTransition`: provides configuration for `Transition` objects
- `@RsTransitionFromState`: allows to declare a `Transition` object based on an existing `State` object
- `@RsMapTransition`: allows to share a single `Transition` object definition between mutliple states

Galaad decorators involve development of REST APIS based upon the Object-oriented Paradigm, with 2 major advantages:

- class encapsulation forces separation of concerns
- aspect programming makes code more readable and easy to maintain

The following piece of code shows a basic HATEOAS implementation based on Galaad decorators:

```javascript

@RsHateoasContext()
private _context: HateoasContext;

@RsState({
    resource: '/books',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
private getBooks(): void {
    const path: string = '/books';
    this._router.get(path, (req: Request, res: Response) => {
        const result: any = {
            data: this._bookService.getAll(),
            application: this._context.getApplicationStateRepresentation(path);
        };
        res.send(result);
    });
}
```

## Galaad API

Sometimes, the use of decorators is not enough flexible for specific use cases. In this case, developer can access all the features specified by JSAX-RS through the Galaad API.

Code below shows how to initialize the hateoas context by using an external config file instead of the `@RsApplication` decorator:

```javascript
private initHateoas(config: ServerConfig): void {
    Galaad.getInstance().createContext(config.hateoasConfig);
}
```