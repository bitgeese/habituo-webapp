<script>
    export let dailyRoutine = [];
</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🌅 Sunday 9 Jun</h2>
  <div class="join">
    <button class="btn btn-ghost join-item">Add</button>
    <button class="btn btn-ghost join-item">Edit</button>
  </div>
</div>
<ul class="mt-2 space-y-4">
  {#each dailyRoutine as habit, index (habit.id)}
  <li class="bg-base-100 card shadow-xl">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <div>
            <div class="mt-2 text-xl font-semibold">{ habit.name }</div>
            {#if habit.status == "wip"}
              <div class="mt-2 text-xs flex items-center justify-start space-x-2">
                <span>Streak: 12</span>
                <span>·</span>
                <span>Next: <i>Exercise 25 minutes</i></span>
              </div>
              <div class="mt-1 text-xs flex items-center justify-start space-x-2">
                <span >⭐️⭐️⭐️</span>
              </div>
              
            {/if}
          </div>
          
          {#if habit.status == "wip"}
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-lg" />
          {/if}
        </div>
      </div>
  </li>
  {:else}
  <li>No habits found.</li>
  {/each}
</ul>