<script>
    import CoreHabitCard from "$lib/components/habits/CoreHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    export let wishlist = [];
    
    let createModal;

</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">💫 Habit Wishlist</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
    <!-- <button class="btn btn-ghost join-item">Edit</button> -->
  </div>
</div>


<ul class="mt-2 space-y-4">
  {#each wishlist as habit, index (habit.id)}
    <CoreHabitCard {habit}/>
  {:else}
  <li>No habits found.</li>
  {/each}
</ul>

<CreateHabitModal bind:createModal statusAdd={'wishlist'}/>
