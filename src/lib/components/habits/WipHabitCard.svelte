<script>
    import Rating from "$lib/components/details/Rating.svelte"
    export let habit = null;
</script>
<li class="bg-base-100 card shadow-lg">
      <div class="card-body">
        
        <div class="flex items-center justify-between">
          <div>
            <div class="mt-2 text-xl font-semibold">
            
            <div>{ habit.order } - { habit.name }</div>
            
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
          
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-lg" />
          
        </div>
            <progress class="progress progress-accent w-56" value="5" max="14"></progress>
        

      </div>
  </li>