import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { UUID } from '../utils';
@Component
export default class Tag extends Vue {
    protected __ref!:string;

    created() {
        this.__ref = UUID.get();
    }
}