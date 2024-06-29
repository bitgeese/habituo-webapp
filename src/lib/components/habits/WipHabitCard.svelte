<script>
  import Rating from "$lib/components/details/Rating.svelte"
  import { trackHabit } from '$lib/utils/habitActions.js';
  import HabitCardSettings from "./HabitCardSettings.svelte";
  import { createEventDispatcher } from "svelte";

  export let habit;
  export let token;

  const dispatch = createEventDispatcher();

  async function handleCheckboxChange(completed) {
      try {
          await trackHabit(habit.id, new Date().toISOString().split('T')[0], completed, token);
          habit.today_status = completed; // Update local state to reflect change
          habit.streak += completed ? 1 : -1;
      } catch (error) {
          console.error("Failed to update habit tracking:", error);
      }
  }

  function handleCardClick(event) {
      const target = event.target;
      if (!target.closest('.no-toggle')) {
          const completed = !habit.today_status;
          handleCheckboxChange(completed);
      }
  }

  function handleDelete(event) {
      event.stopPropagation();
      dispatch('delete', event.detail);
  }
</script>

<li class="bg-base-100 card shadow-lg">
  <div role="presentation" on:click={handleCardClick} class="card-body">
      <div class="flex items-center justify-between">
          <div>
              <div class="flex items-center">
                  <input type="checkbox" bind:checked={habit.today_status} class="mr-2 checkbox checkbox-primary sm:checkbox-lg no-toggle" on:click|stopPropagation on:change={(e) => handleCheckboxChange(e.target.checked)} />
                  <h3 class="flex items-center">
                      <span class="line-clamp-1 text-sm sm:text-xl font-semibold">{habit.name}</span>
                      <span class="mx-1 badge badge-accent badge-sm sm:badge-lg">{habit.streak}</span>
                  </h3>
              </div>
          </div>
          <HabitCardSettings {habit} on:delete={handleDelete} class="no-toggle" />
      </div>
      <progress class="hidden progress progress-accent w-56" value="5" max="14"></progress>


      <div class="mt-2">
        <div class="grid grid-cols-7 gap-2">
          {#each Array(Number(30)).fill() as _, index}
            <div class="text-center text-xs bg-primary inline-block h-6 w-6 rounded-full flex items-center justify-center">
              {index + 1}
            </div>
          {/each}
        </div>
      </div>

  </div>
</li>
