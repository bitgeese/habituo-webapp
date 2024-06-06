<script>
    export let createModal;
    export let statusAdd;
</script>
  
<dialog bind:this={createModal} id="habit-create-modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Create a Habit</h3>
        <form method="POST" action="?/createHabit">
        <input bind:this={statusAdd} type="hidden" name="status">
        <div>
            <label class="w-full max-w-xs">
            <div class="label">
                <span class="label-text">Name</span>
            </div>
            <input required type="text" name="name" class="input input-bordered w-full max-w-lg">
            </label>
        </div>
        <div class="modal-action">
            <button class="btn btn-primary" type="submit">Create</button>
            <button type="button" on:click={() => createModal.close()} class="btn">Cancel</button>
        </div>
        </form>
    </div>
</dialog>
  