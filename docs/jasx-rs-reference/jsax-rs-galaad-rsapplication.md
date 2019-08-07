:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsApplication` Decorator

# JSAX-RS Galaad Framework: `@RsApplication` Decorator

## Overview

The `@RsApplication` decorator allows to configure applications specified by the [`Application` interface](./jsax-rs-application-interface.md).

## Usage

`@RsApplication` is a class decorator. You typically attach it to a class declaration that contains initialization of HTTP server and routes:

```javascript
@RsApplication({
    name:       'my-app',
    apiPath:    '/api',
    version:    '1.0.0'
})
export class SampleApplication {

    public run(): void {
        const app: Express = express();
        const router: Router = Router();
        app.use('/api', router);
        app.listen(3000);
    }
}
```

## Parameters

The `@RsApplication` decorator accepts objects of the type of `ApplicationConfig` as parameter. The `ApplicationConfig` interface defines the same properties as the [`Application` interface](./jsax-rs-application-interface.md):

- `name`: the reference name of the application declaration
- `authority`: the authority of the application declaration
- `apiPath`: the path to the application API
- `version`: the version of the application API
- `protocol`: the protocol used for transactions

The `authority`, `apiPath` and `version` parameters are optional.

The `protocol` parameter is optional and its default value is `http`. You typically never use this parameter.

Only one `@RsApplication` decorator declaration is allowed by application.