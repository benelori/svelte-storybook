<script lang="ts">
  export let label = '';

  export let primary = true;
  export let type='button';
  export let isLoading = false;
  export let loaderText = 'Please wait';
  export let disabled = false;

  let buttonLabel = isLoading ? loaderText : label;

  let buttonIsDisabled = disabled || isLoading;
</script>

<button
  type="{type}"
  disabled={ buttonIsDisabled }
  class:primary={ primary }
  class:secondary={ !primary }
  class:isLoading={ isLoading }
  class:disabled={ disabled }
 >
  {buttonLabel}
</button>

<style>
   button {
      @apply rounded-2xl p-4 text-base font-sans font-medium flex w-full justify-center items-center;
   }

  .primary {
     @apply bg-primary text-white;
  }

  .secondary {
     @apply bg-white text-primary border-neutral border border-opacity-20;
  }

  .isLoading {
     @apply cursor-default opacity-70 after:border-2 after:border-solid after:border-transparent after:border-t-white after:rounded-full after:w-3.5 after:h-3.5 after:ml-1 after:animate-spin;
  }
  .disabled {
     @apply cursor-default bg-primary-light;
  }
</style>
