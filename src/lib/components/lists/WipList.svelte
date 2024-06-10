<script>
    import SortableList from './SortableList.svelte';
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    export let wipList = [];
    
    let createModal;
  
    const sortList = ev => {wipList = ev.detail};

</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🏗️ Habits In Progress</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
  </div>
</div>



<SortableList 
    list={wipList} 
    key="order" 
    on:sort={sortList}
    let:item
		let:index
>
    <WipHabitCard habit={item}/>
</SortableList>

<CreateHabitModal bind:createModal statusAdd={'wip'}/>
