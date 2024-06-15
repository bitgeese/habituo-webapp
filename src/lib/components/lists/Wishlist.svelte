<script>
    import SortableList from './SortableList.svelte';
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

    const sortList = ev => {wishlist = ev.detail};
</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">💫 Habit Wishlist</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
  </div>
</div>


<SortableList 
    list={wishlist} 
    key="order" 
    on:sort={sortList}
    {token}
    let:item
		let:index
>
    <CoreHabitCard habit={item} on:delete={handleDelete} on:select={handleSelect}/>
</SortableList>


<CreateHabitModal bind:createModal statusAdd={'wishlist'} />
<DeleteHabitModal bind:deleteModal {currentHabit} on:confirm={confirmDelete}/>


