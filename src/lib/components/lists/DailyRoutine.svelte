<script>
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CoreHabitCard from "$lib/components/habits/CoreHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    export let dailyRoutine = [];
    
    // Create Habit Modal
    let createModal;

    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = today.toLocaleDateString('en-US', options);

</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🌅 {formattedDate}</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
    <button class="btn btn-ghost join-item">Edit</button>
  </div>
</div>


<ul class="mt-2 space-y-4">
  {#each dailyRoutine as habit, index (habit.id)}
    {#if habit.status == "wip"}
        <WipHabitCard {habit}/>
    {:else}
        <CoreHabitCard {habit}/>
    {/if}
  {:else}
  <li>No habits found.</li>
  {/each}
</ul>

<CreateHabitModal bind:createModal statusAdd={'core'}/>
