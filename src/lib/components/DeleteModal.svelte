<script>
  export let deleteModal;
  export let currentHabit;
  export let confirmDelete;
</script>

<dialog bind:this={deleteModal} id="habit-delete-modal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Delete Habit?</h3>
    <p class="py-4">Are you sure you want to delete <b>'{currentHabit ? currentHabit.name : ''}'</b> habit? <br> Press ESC key or click the button below to cancel</p>
    <div class="modal-action">
      <button on:click={confirmDelete} class="btn btn-primary">Confirm</button>
      <button on:click={() => deleteModal.close()} class="btn">Cancel</button>
    </div>
  </div>
</dialog>