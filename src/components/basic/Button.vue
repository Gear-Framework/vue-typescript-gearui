<template>
    <a-button type="primary" :__ref="__ref" v-bind="state">Primary, {{state.test}}</a-button>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Tag from '@/components/Tag';
import Component from 'vue-class-component';
import { Button as AntdButton } from 'ant-design-vue';

export declare type ButtonStype = 'primary' | 'ghost' | 'dashed' | 'danger';
export declare type ButtonShape = 'circle' | 'circle-outline';
export declare type ButtonSize = 'small' | 'large';
export var props = {
    url: GearType.Or<Function, string>(GearType.Function, GearType.String),
    target: GearType.String,
    buttonStyle: GearType.Enum<ButtonStype>(),
    shape: GearType.Enum<ButtonShape>(),
    size: GearType.Enum<ButtonSize>(),
    icon: GearType.String,
    loading: GearType.Or(GearType.Boolean, {delay: 0}),
    delay: GearType.Number,
    ghost: GearType.Boolean,
    iconAlign: GearType.String,
    selected: GearType.Boolean,
    selectedType: GearType.Enum<ButtonStype>(),
    plain: GearType.Boolean,
    group: GearType.String,
    text: GearType.String,
    value: GearType.String,
    ...Tag.props
}
export interface state extends Tag.state {
    iconAlign?: string;
    icon?: string;
    text?: string;
    ghost?: boolean;
    type?: ButtonStype;
    shape?: ButtonShape,
    size?: ButtonSize,
    loading?: boolean | {delay: number},
    url?: string | Function,
    test?: string
}
Vue.use(AntdButton);
@Component({
    props: props as any
})
export default class Button<P extends typeof props, S extends state> extends Tag.default<P, S> {

    getInitialState(): state {
        return {
            test: ''
        };
    }

    public setTest(t: string) {
        this.setState({
            test: t
        }, () => {
            console.log(this.state.text);
        });
    }

}
</script>
