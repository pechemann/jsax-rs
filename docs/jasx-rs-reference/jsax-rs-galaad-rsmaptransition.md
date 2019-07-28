:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsMapTransition` Decorator

# JSAX-RS Galaad Framework: `@RsMapTransition` Decorator

## Overview

The `@RsMapTransition` decorator allows to associate transitions with application states.

## Usage

`@RsMapTransition` is a method decorator which is combined to `@RsState` decorators to easily associate shareable transitions to application states.

You can use as many `@RsMapTransition` decorators as you need for any state declaration of your application.

The following code shows the basic use of the `@RsMapTransition` decorator:

```javascript
@RsState({
    resource: '/books/:bookId',
    type: StateType.COLLECTION,
    method: HttpMethod.GET
})
@RsMapTransition('getBooksTransition')
@RsMapTransition('deleteBookTransition')
private getBook(): void {}
```

## Parameters

The `@RsMapTransition` decorator accepts two parameters:

- `transitionRef`: the reference to the transition to map with the state
- `rel`: the relation defined by the transition between the current state and the transition state

The `rel` parameter is optional.

The following code shows a basic implementation of the `rel` parameter:

```javascript
@RsTransition({
    resource: '/books/:bookId/:prevChapterId',
    type: StateType.DOCUMENT,
    method: HttpMethod.GET
})
public prevChapterTransition: TransitionConfig;

@RsTransition({
    resource: '/books/:bookId/:nextChapterId',
    type: StateType.DOCUMENT,
    method: HttpMethod.GET
})
public nextChapterTransition: TransitionConfig;

@RsState({
    resource: '/books/:bookId/:chapterId',
    type: StateType.DOCUMENT,
    method: HttpMethod.GET
})
@RsMapTransition('prevChapterTransition', LinkType.PREV)
@RsMapTransition('nextChapterTransition', LinkType.NEXT)
private getBookChapter(): void {}
```