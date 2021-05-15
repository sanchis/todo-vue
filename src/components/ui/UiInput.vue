<template>
  <input
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="$emit('update', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'

@Component
export default class UiInput extends Vue {
  @Model('update') readonly value!: any;
}
</script>
