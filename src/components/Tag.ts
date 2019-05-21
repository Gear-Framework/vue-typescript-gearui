import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import * as JqueryTag from './JqueryTag';

export var props = {
    ...JqueryTag.props
};

export interface state extends JqueryTag.state {

};

@Component
export default class Tag<P extends typeof props, S extends state> extends JqueryTag.default<P, S> {

    setState<K extends keyof S>(
        state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
        callback?: () => void
    ) {
        let setState = this.getSuperMethod('setState', super['constructor']);
        setState(state,callback);
    }

}