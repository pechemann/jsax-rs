import { Galaad } from './core/Galaad';
import { HateoasContext } from '../hateoas/HateoasContext';

/**
 * Provide property decoration to declare reference to the <code>HateoasContext</code> object for the current
 * application.
 */
export function RsHateoasContext(): any {
    return function (target: any, key: string): any {
        const getter: ()=> HateoasContext = ()=> {
            return Galaad.getInstance().getContext();
        };
        const setter: ()=> void = ()=> {};
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: false
        });
    };
};