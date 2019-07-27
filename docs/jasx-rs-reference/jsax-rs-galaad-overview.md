:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > [JSAX-RS Galaad Framework: Overview](./jsax-rs-galaad-overview.md)

# JSAX-RS Galaad Framework: Overview

Galaad framework is the reference implementation of the JSAX-RS HATEOAS API for JavaScript applications. It is entirely written in [TypeScript](https://www.typescriptlang.org/) and is both, platforms and frameworks, independent.

Galaad has been designed for high productivity and the decorators based implementation make it very easy-to-use.

## Decorators Implementation

Galaad uses few decorators to help developers to design HATEOAS implementation of REST APIs:

- `@RsApplication`: provides configuration for `Application` objects
- `@RsState`: provides configuration for `State` objects
- `@RsTransition`: provides configuration for `Transition` objects
- `@RsMapTransition`: allows to share a single `Transition` object definition between mutliple states
- `@RsHateoasContext`: provides access to the `HateoasContext` context for the current app

Galaad decorators implies development of REST APIS based on the Object-oriented Paradigm.

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
        const appState: any = this._context.getApplicationStateRepresentation(path);
        const result: any = {
            data: this._bookService.getAll(),
            application: appState
        };
        res.send(result);
    });
}
```

## Galaad API