:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsTransition` Decorator

# JSAX-RS Galaad Framework: `@RsTransition` Decorator

## Overview

The `@RsTransition` decorator allows to define transitions between application states, as specified by the [`Transition` interface](./jsax-rs-transition-interface.md).

## Usage

`@RsTransition` can be used both, as method and property decorator.

## Parameters

The `@RsTransition` decorator accepts objects of the type of `TransitionConfig` as parameter. The `TransitionConfig` interface defines some properties common with the [`Transition` interface](./jsax-rs-transition-interface.md):

- `name`: the reference name for this transition declaration
- `type`: the kind of resource archetype for the resource associated with this transition
- `resource`: the resource associated with this transition declaration
- `method`: the access methods associated with this transition declaration
- `stateRef`: the reference name to the state associated with this transition declaration
- `rel`: link type for this transition declaration

The `name`, `stateRef`, `rel` and `method` properties are optional.

When `stateRef` is not set, the name reference of the associated `State` object is automatically initialized by using the name of the decorated method.

### Property Decorator

Property decorators allow to declare transitions that can be referenced by several different states.

```javascript
@RsTransition({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.DELETE
})
public deleteBookTransition: TransitionConfig;
```

When `name` is not set, the name reference of the associated `Transition` object is automatically initialized by using the name of the decorated property.

To associate this transition with any state, you typically use the `@RsMapTransition` decorator:

```javascript
@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.POST
})
@RsMapTransition('deleteBookTransition')
private createBook(): void {}
```

### Method Decorator

Method decorators allow to declare transitions that are associated with only one state: 

```javascript
@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.POST
})
@RsTransition({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.DELETE
})
private createBook(): void {}
```

## Parameters Restrictions

Because resource archetypes of the type of _controller_ can only be invoked through the HTTP `POST`, other configurations will throw a context error with the status code `HateoasContextErrorCode.INVALID_TRANSITION_CONFIG`.

According to this rule, the following code is invalid:

```javascript
@RsTransition({
    resource: '/alert/resend?:resourceId',
    type: StateType.CONTROLLER,
    method: HttpMethod.GET
})
public resendTransition: TransitionConfig;
```

The correct transition declaration for the code above is shown below:

```javascript
@RsTransition({
    resource: '/alert/resend?:resourceId',
    type: StateType.CONTROLLER,
    method: HttpMethod.POST
})
public resendTransition: TransitionConfig;
```