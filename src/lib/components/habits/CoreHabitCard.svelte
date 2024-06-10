<script>
    
    import { createEventDispatcher } from 'svelte';

    export let habit;
    
    const dispatch = createEventDispatcher();

    function handleDelete() {
      dispatch('delete', habit);
    }
    function handleSelect() {
      dispatch('select', habit);
    }

</script>
<li class="bg-base-100 card shadow-xs">
  <div class="card-body text-xl font-semibold">     
    <div class="flex items-center justify-between">
    { habit.order } - { habit.name }
    <div>          
      {#if habit.status == "wishlist"}
        <button on:click={handleSelect} class="btn">Work on </button>
        <button on:click={handleDelete} class="btn btn-error">Delete</button>
      {/if}
    </div>
    </div>
  </div>
</li>