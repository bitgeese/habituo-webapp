<script>
    import SortableList from './SortableList.svelte';
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte";
    import DeleteHabitModal from "$lib/components/modals/DeleteHabitModal.svelte";
    import { deleteHabit } from "$lib/utils/habitActions.js";
    import { createEventDispatcher } from 'svelte';
    import CoreHabitCard from '../habits/CoreHabitCard.svelte';
    import WipHabitCard from '../habits/WipHabitCard.svelte';
  
    export let list = [];
    export let token;
    export let title = "Habits";
    export let statusAdd;
    export let showDate = false;
  
    let createModal;
    let deleteModal;
    let currentHabit = { name: null };
    const dispatch = createEventDispatcher();
  
    function handleDelete(event) {
      currentHabit = event.detail;
      if (deleteModal) {
        deleteModal.showModal();
      }
    }
  
    async function confirmDelete() {
      await deleteHabit(currentHabit.id, token);
      list = list.filter(habit => habit.id !== currentHabit.id);
      currentHabit = null;
    }
  
    const sortList = ev => { list = ev.detail };
  
    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = today.toLocaleDateString('en-US', options);
  </script>
  
  <div class="mt-6 mx-2 flex items-center justify-between">
    <h2 class="text-2xl font-bold">{showDate ? `🌅 ${formattedDate}` : title}</h2>
    <button on:click={() => createModal.showModal()} class="btn btn-ghost">Add</button>
  </div>
  
  <SortableList 
      {list} 
      key="order" 
      on:sort={sortList}
      {token}
      let:item
      let:index
  >
    {#if item.status == "wip"}
         <WipHabitCard habit={item} token={token} on:delete={handleDelete}/>
    {:else}
        <CoreHabitCard habit={item} on:delete={handleDelete}/>
    {/if}
  </SortableList>
  
  <CreateHabitModal bind:createModal {statusAdd}/>
  <DeleteHabitModal bind:deleteModal {currentHabit} on:confirm={confirmDelete}/>
  