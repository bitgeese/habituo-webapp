<script>
    let myModal;
  
    function openModal() {
      myModal.showModal();
    }
  </script>
  
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn" on:click={openModal}>open modal</button>
  <dialog bind:this={myModal} id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  