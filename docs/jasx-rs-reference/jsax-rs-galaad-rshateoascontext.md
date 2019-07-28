:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Galaad Framework: `@RsHateoasContext` Decorator

# JSAX-RS Galaad Framework: `@RsHateoasContext` Decorator

## Overview

The `@RsHateoasContext` decorator allows to access the HATEOAS context of an application, as defined by the [`HateoasContext` interface](./jsax-rs-hateoascontext-interface.md).

## Usage

Once you have attached it to a class property, you can directly invoke this property to access all features provided by the [`HateoasContext` interface](./jsax-rs-hateoascontext-interface.md):

```javascript
@RsApplication({
    name:       'my-app',
    apiPath:    '/api',
    version:    '1.0.0'
})
export class SampleApplication {

    @RsHateoasContext()
    private _context: HateoasContext;

    public run(): void {
        const app: Express = express();
        const router: Router = Router();
        const context: ApplicationContext = this._context.getApplicationContext();
        const apiPath: string = context.getApiPath();
        app.use(apiPath, router);
        app.listen(3000);
        console.log(`application "${context.getName()}" listening on port 3000`);
        console.log(`application api path is "${apiPath}"`);
    }
}
```
