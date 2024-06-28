<script>
    import Rating from "$lib/components/details/Rating.svelte"
    import { trackHabit } from '$lib/utils/habitActions.js';
    import HabitCardSettings from "./HabitCardSettings.svelte";
    import { createEventDispatcher } from "svelte";

    export let habit;
    export let token;

    const dispatch = createEventDispatcher();



    async function handleCheckboxChange(event) {
        const completed = event.target.checked;
        try {
            await trackHabit(habit.id, new Date().toISOString().split('T')[0], completed, token);
            habit.today_status = completed; // Update local state to reflect change
            habit.streak += completed ? 1 : -1;
        } catch (error) {
            console.error("Failed to update habit tracking:", error);
            event.target.checked = !completed; // Revert checkbox state if API call fails
        }
    }
    function handleDelete(event) {
      event.stopPropagation();
      dispatch('delete', event.detail);
    }

</script>
<li class="bg-base-100 card shadow-lg">
      <div class="card-body">

        
        
        <div class="flex items-center justify-between">
          <div>
            
            <div class="flex items-center">
              <input type="checkbox" checked={habit.today_status} on:change={handleCheckboxChange} class="mr-2 checkbox checkbox-primary sm:checkbox-lg" />
              <h3 class="flex items-center">
                <span class="line-clamp-1 text-sm sm:text-xl font-semibold">{ habit.name }</span>
                <span class="mx-1 badge badge-accent badge-sm sm:badge-lg">{ habit.streak }</span>
              </h3>
            </div>
            
            
            <!-- <div class="hidden mt-2 text-xs flex items-center justify-start space-x-2">
              <span>Streak: 12</span>
              <span>·</span>
              <span>Next: <i>Exercise 25 minutes</i></span>
            </div>

            <div class="hidden mt-1">
              <Rating numberOfStars={5}/>
            </div> -->

          </div>
          
          <HabitCardSettings {habit} on:delete={handleDelete}/>
            
            
        </div>
            <progress class="hidden progress progress-accent w-56" value="5" max="14"></progress>
        

      </div>
  </li>