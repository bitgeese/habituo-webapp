<script>
    export let inProgressList = [];
</script>
  
<div class="col-span-2 sm:col-span-1 card p-4 bg-base-100 shadow-xl">
    <h2 class="text-lg font-semibold text-primary uppercase">Habits in Progress</h2>
    <ul class="mt-4 space-y-2">
        {#each inProgressList as habit, index (habit.id)}
        <li>{habit.name}</li>
        {:else}
        <li>Not working on any habits.</li>
        {/each}
    </ul>
</div>
