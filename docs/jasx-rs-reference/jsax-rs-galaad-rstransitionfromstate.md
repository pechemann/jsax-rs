:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsTransitionFromState` Decorator

# JSAX-RS Galaad Framework: `@RsTransitionFromState` Decorator

## Overview

The `@RsTransitionFromState` decorator allows to define transitions based upon already existing application states.

## Usage

`@RsTransitionFromState` is a property decorator, where the property name is the reference to the transition. It accepts a string parameter which is the reference to the state used to create this shareable transtion.

The following code shows how to declare a new transition built from the `getBooks` state:

```javascript
@RsTransitionFromState('getBooks')
public getBooksTransition: TransitionMapping;

@RsState({
    resource: '/books',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
private getBooks(): void {}
```

To associate this transition with any state, you typically use the `@RsMapTransition` decorator with the property name:

```javascript
@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
@RsMapTransition('getBooksTransition')
private getBook(): void {}

@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.DELETE
})
@RsMapTransition('getBooksTransition')
private deleteBook(): void {}
```
