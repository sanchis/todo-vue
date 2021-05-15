<template>
  <select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @change="$emit('update', items[$event.target.selectedIndex].value)"
  >
    <option
      v-for="option in items"
      v-bind:key="option.label"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator'

@Component
export default class UiSelect extends Vue {
  @Prop({ type: Array, required: true }) private items!: UiSelectItems[];
  @Model('update') readonly value: unknown;
}

export interface UiSelectItems {
  label: string;
  value: any | null;
}
</script>
