<script>
    import { createEventDispatcher } from 'svelte';

    import {deleteHabit, patchHabit} from "$lib/utils/habitActions.js"
    import CoreHabitCard from "$lib/components/habits/CoreHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    import DeleteHabitModal from "$lib/components/modals/DeleteHabitModal.svelte"
    export let wishlist = [];
    export let token;
    
    let createModal;
    let deleteModal;
    let currentHabit = {name: null};

    function handleDelete(event) {
      currentHabit = event.detail;
      if (deleteModal) {
        deleteModal.showModal();
      }
    }

    const dispatch = createEventDispatcher();
    async function handleSelect(event) {
      currentHabit = event.detail;
      await patchHabit(currentHabit.id, {'status': 'wip'}, token);
      wishlist = wishlist.filter(habit => habit.id !== currentHabit.id);
      dispatch('select', currentHabit);
    }

    async function confirmDelete() {
      await deleteHabit(currentHabit.id, token);
      wishlist = wishlist.filter(habit => habit.id !== currentHabit.id);
      currentHabit = null;
    }
</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">💫 Habit Wishlist</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
  </div>
</div>


<ul class="mt-2 space-y-4">
  {#each wishlist as habit, index (habit.id)}
    <CoreHabitCard {habit} on:delete={handleDelete} on:select={handleSelect}/>
  {:else}
  <li>No habits found.</li>
  {/each}
</ul>

<CreateHabitModal bind:createModal statusAdd={'wishlist'} />
<DeleteHabitModal bind:deleteModal {currentHabit} on:confirm={confirmDelete}/>
