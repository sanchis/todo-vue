<template>
  <button v-bind="$attrs" v-bind:class="{ icon: displayType==='icon' }" v-on="$listeners">{{ label }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class UiButton extends Vue {
  @Prop({ type: String, default: '' }) label!: string;
  @Prop({ type: String, default: 'normal' }) displayType!: 'normal'|'icon';
}
</script>

<style scoped lang="scss">
button.icon{
  border: none;
}
</style>
