<script>
  import BaseHabitList from './BaseHabitList.svelte';
  import { patchHabit } from "$lib/utils/habitActions.js";
  import { createEventDispatcher } from 'svelte';

  export let wishlist = [];
  export let token;

  const dispatch = createEventDispatcher();

  async function handleSelect(event) {
    const currentHabit = event.detail;
    await patchHabit(currentHabit.id, { 'status': 'wip' }, token);
    wishlist = wishlist.filter(habit => habit.id !== currentHabit.id);
    dispatch('select', currentHabit);
  }
</script>

<BaseHabitList 
  list={wishlist} 
  token={token} 
  title="Habit Wishlist" 
  statusAdd="wishlist"
  on:select={handleSelect}
/>
