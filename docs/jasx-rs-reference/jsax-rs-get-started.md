:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > Get Started

# JSAX-RS: Get Started

## Requirements

JSAX-RS needs the following system parameters in order to work correctly:

- npm 3+
- TypeScript 3+

## Installation

Set up the JSAX-RS module with:

```bash
$ npm install jsax-rs --save
```

## Using Components

All JSAX-RS components have to be imported with the ES6 syntax:

```javascript
import { HttpStatusCode } from 'jsax-rs';

public find(id: string, res: Response): void {
  this.searchService.find(id).subscribe((result: User) => {
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(HttpStatusCode.NOT_FOUND);
    }
  });
}
```

## Using Decorators

To use HATEOAS decorators, you must set the `experimentalDecorators` property to `true` in your `tsconfig.json` file:

```json
/* Experimental Options */
"experimentalDecorators": true
```

Then, you can use ES7 decorators directly into your TypeScript classes:

```javascript
import { RsTransition, TransitionConfig, StatusType } from 'jsax-rs';

@RsTransition({
  resource: '/users',
  type: StatusType.COLLECTION
})
public listUsersTransition: TransitionConfig;
```