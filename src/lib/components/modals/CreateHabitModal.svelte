
<script>
    export let createModal;
    export let statusAdd;

</script>

<dialog bind:this={createModal} id="habit-create-modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Create a Habit</h3>
        <form method="POST" action="?/createHabit">
            <div>
                <label class="w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Name</span>
                    </div>
                    <input required type="text" name="name" class="input input-bordered w-full max-w-lg">
                </label>
            </div>
            <label class="form-control w-full max-w-lg">
                <div class="label">
                    <span class="label-text">Habit type</span>
                </div>
                <select name="status" class="select select-bordered w-full">
                    <option selected={statusAdd === "core"} value="core">Daily Routine</option>
                    <option selected={statusAdd === "wishlist"} value="wishlist">Wishlist</option>
                    <option selected={statusAdd === "wip"} value="wip">Work on</option>
                </select>
            </label>
            <div class="modal-action">
                <button class="btn btn-primary" type="submit">Create</button>
                <button type="button" on:click={() => createModal.close()} class="btn">Cancel</button>
            </div>
        </form>
    </div>
</dialog>
