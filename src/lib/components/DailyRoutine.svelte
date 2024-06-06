<script>
    export let dailyRoutine = [];
    export let addDailyRoutine;
</script>

<div class="col-span-2">
    <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-primary uppercase">Daily Routine</h2>
        <button on:click={() => addDailyRoutine()} class="btn btn-primary w-24">Add Habit+</button>
    </div>
    <ul class="mt-4 space-y-2">
        {#each dailyRoutine as habit, index (habit.id)}
        <li class="card p-4 bg-base-100 shadow-xl">
            {habit.name}
        </li>
        {:else}
        <li>No Habits in Daily Routine</li>
        {/each}
    </ul>
</div>