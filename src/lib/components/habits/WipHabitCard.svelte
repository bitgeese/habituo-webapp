<script>
    import Rating from "$lib/components/details/Rating.svelte"
    import { createEventDispatcher } from 'svelte';

    export let habit;
    
    const dispatch = createEventDispatcher();

    function handleDelete() {
      dispatch('delete', habit);
    }

</script>
<li class="bg-base-100 card shadow-lg">
      <div class="card-body">
        
        <div class="flex items-center justify-between">
          <div>
            <div class="mt-2 text-xl font-semibold">
            
            <div>{ habit.name }</div>
            
            </div>
              <div class="mt-2 text-xs flex items-center justify-start space-x-2">
                <span>Streak: 12</span>
                <span>·</span>
                <span>Next: <i>Exercise 25 minutes</i></span>
              </div>

              <div class="mt-1">
                <Rating numberOfStars={5}/>
              </div>
          </div>
          
            <div class="flex items-center gap-1">
              <button on:click={handleDelete} class="btn btn-error">Delete</button>
              <input type="checkbox" checked={habit.today_status} class="checkbox checkbox-primary checkbox-lg" />
            </div>
            
            
        </div>
            <progress class="progress progress-accent w-56" value="5" max="14"></progress>
        

      </div>
  </li>