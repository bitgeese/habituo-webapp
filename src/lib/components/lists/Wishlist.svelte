<script>
  import BaseHabitList from './BaseHabitList.svelte';
  import { patchHabit } from "$lib/utils/habitActions.js";
  import { createEventDispatcher } from 'svelte';
  import WorkOnHabitModal from '../modals/WorkOnHabitModal.svelte';

  export let wishlist = [];
  export let dailyRoutine = [];
  export let token;
  
  let workOnModal;
  let currentHabit = { name: null };

  const dispatch = createEventDispatcher();

  async function handleSelect(event) {
    currentHabit = event.detail;
    if (workOnModal) {
      workOnModal.showModal();
      }
    // await patchHabit(currentHabit.id, { 'status': 'wip' }, token);
    // wishlist = wishlist.filter(habit => habit.id !== currentHabit.id);
    // dispatch('select', currentHabit);
  }
</script>

<BaseHabitList 
  list={wishlist} 
  token={token} 
  title="Habit Wishlist" 
  statusAdd="wishlist"
  on:select={handleSelect}
/>


<WorkOnHabitModal bind:workOnModal {currentHabit} {dailyRoutine}/>