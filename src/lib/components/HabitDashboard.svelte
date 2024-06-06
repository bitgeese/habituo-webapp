<script>
    import DailyRoutine from '$lib/components/DailyRoutine.svelte';
    import InProgressList from '$lib/components/InProgressList.svelte';
    import Wishlist from '$lib/components/Wishlist.svelte';
    import DeleteModal from '$lib/components/DeleteModal.svelte';
    import CreateModal from '$lib/components/CreateModal.svelte';
  
    export let wishlist = [];
    export let inProgressList = [];
    export let dailyRoutine = [];
    export let deleteHabit;
    export let patchHabit;
  
    // Modal
    let createModal;
    let statusAdd;
    let deleteModal;
    let currentHabit = null;
    let editingIndex = null;
  
    function openDeleteModal(habit) {
      currentHabit = habit;
      deleteModal.showModal();
    }
  
    function addDailyRoutine() {
      statusAdd.value = "core";
      createModal.showModal();
    }
  
    function addWishlist() {
      statusAdd.value = "wishlist";
      createModal.showModal();
    }
  
    function confirmDelete(habitId) {
      if (currentHabit) {
        deleteHabit(currentHabit.id);
        deleteModal.close();
      }
    }
  
    function editHabit(index) {
      editingIndex = editingIndex === index ? null : index;
    }
  
    function updateHabit(index, event) {
      wishlist[index].name = event.target.value;
      patchHabit(index, { name: event.target.value });
      editingIndex = null;
    }
  
    function selectHabit(index) {
      patchHabit(index, { status: "wip" });
      inProgressList = [...inProgressList, wishlist[index]];
      dailyRoutine = [...dailyRoutine, wishlist[index]];
      wishlist = wishlist.filter(habit => habit.id !== wishlist[index].id);
    }
  </script>
  
  <div class="mt-12 grid grid-cols-2 gap-6">
    <DailyRoutine {dailyRoutine} />
  
    <InProgressList {inProgressList} />
  
    <Wishlist
      {wishlist}
      {editHabit}
      {selectHabit}
      {openDeleteModal}
      {updateHabit}
      {editingIndex}
    />
  </div>
  
  <DeleteModal {deleteModal} {currentHabit} {confirmDelete} />
  
  <CreateModal {createModal} {statusAdd} />