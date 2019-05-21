<template>
    <Button ref="button" :__ref="__ref" ></Button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { UUID } from '../../utils';
import * as Button from '../../components/basic/Button.vue';
import Tag from '@/wrapper/Tag';
@Component({
    components: {
        Button: Button.default
    }
})
export default class GButton extends Tag {
    
    
}
</script>
