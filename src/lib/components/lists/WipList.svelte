<script>
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    export let wipList = [];
    
    let createModal;
  

</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🏗️ Habits In Progress</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
  </div>
</div>


<ul class="mt-2 space-y-4">
  {#each wipList as habit, index (habit.id)}
    <WipHabitCard {habit}/>
  {:else}
  <li>No habits found.</li>
  {/each}
</ul>

<CreateHabitModal bind:createModal statusAdd={'wip'}/>
