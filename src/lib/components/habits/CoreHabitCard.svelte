<script>
  import HabitCardSettings from './HabitCardSettings.svelte';
  import { createEventDispatcher } from 'svelte';
  export let habit;

  const dispatch = createEventDispatcher();

  function handleSelect(event) {
    event.stopPropagation();
    dispatch('select', event.detail);
  }
  function handleDelete(event) {
    event.stopPropagation();
    dispatch('delete', event.detail);
  }
</script>

<li class="bg-base-100 card shadow-xs">
  <div class="card-body">
    <div class="flex items-center justify-between">
      <h3 class="line-clamp-1 text-sm sm:text-xl font-semibold">{ habit.name }</h3>
      <HabitCardSettings {habit} on:select={handleSelect} on:delete={handleDelete}/>
    </div>
  </div>
</li>