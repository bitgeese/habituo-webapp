<script>
    
    import HabitCardSettings from './HabitCardSettings.svelte';

    export let habit;
    
</script>
<li class="bg-base-100 card shadow-xs">
  <div class="card-body">     
    <div class="flex items-center justify-between">
      <h3 class="line-clamp-1 text-sm sm:text-xl font-semibold">{ habit.name }</h3>
      <HabitCardSettings {habit}/>
    </div>
  </div>
</li>