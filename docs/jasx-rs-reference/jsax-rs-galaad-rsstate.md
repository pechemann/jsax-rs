:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsState` Decorator

# JSAX-RS Galaad Framework: `@RsApplication` Decorator

## Overview

The `@RsState` decorator allows to configure applications specified by the [`State` interface](./jsax-rs-state-interface.md).

## Usage

`@RsState` is a method decorator. You typically attach it to a class method that contains declaration of a HTTP route:

```javascript
@RsHateoasContext()
private _context: HateoasContext;

@RsState({
    resource: '/books',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
private getBooks(): void {
    this._router.get('/books', (req: Request, res: Response) => {
        const result: any = {
            data: this._bookService.getAll(),
            application: this._context.getApplicationStateRepresentation('getBooks')
        };
        res.send(result);
    });
}
```

## Parameters

The `@RsState` decorator accepts objects of the type of `StateConfig` as parameter. The `StateConfig` interface defines some properties common with the [`State` interface](./jsax-rs-state-interface.md):

- `name`: the reference name for the state declaration
- `type`: the kind of resource archetype for this state declaration
- `resource`: the resource associated with this state declaration
- `method`: the access methods associated with this state declaration

The `name` and `method` properties are optional.

When `name` is not set, the name reference of the associated `State` object is automatically initialized by using the name of the decorated method.

## Parameters Restrictions

Because resource archetypes of the type of _controller_ can only be invoked through the HTTP `POST`, other configurations will throw a context error with the status code `HateoasContextErrorCode.INVALID_STATE_CONFIG`.

According to this rule, the following code is invalid:

```javascript
@RsState({
    resource: '/alert/resend?:resourceId',
    type: StateType.CONTROLLER,
    method: HttpMethod.GET
})
private resend(): void {}
```

The correct state declaration for the code above is shown below:

```javascript
@RsState({
    resource: '/alert/resend?:resourceId',
    type: StateType.CONTROLLER,
    method: HttpMethod.POST
})
private resend(): void {}
```

## Best Practices

The preceding example comes from Frank Massé's book _REST API Design Rulebook_ [[MASSÉ, 2011]](./jsax-rs-reference.md). The original representation of this resource _controller_ is: 

```
POST /alerts/245743/resend
```

Although this representation is correct, in the _RAA Technical Report_ [[ECHEMANN, 2016]](./jsax-rs-reference.md) we encourage separation between _collection_ and _controller_ resource paths.

Thus, the `alert` controller and the `alerts` collection should be separated in two different initialization classes.

```javascript
export class AlertControllerRoutes {
    @RsState({
        resource: '/alert/resend?:resourceId',
        type: StateType.CONTROLLER,
        method: HttpMethod.POST
    })
    private resend(): void {}
}
```

```javascript
export class AlertsRoutes {
    @RsState({
        resource: '/alerts/:resourceId',
        type: StateType.COLLECTION,
        method: HttpMethod.GET
    })
    private getAlert(): void {}
}
```