<script>
  export let numberOfStars = 5; // Default to 5 stars
  let stars = Array.from({ length: numberOfStars }, (_, i) => i);
</script>

<div class="rating rating-xs">
  {#each stars as star, index}
    <input
      type="radio"
      name="rating-{numberOfStars}"
      class="mask mask-star-2 bg-secondary"
      checked={index === stars.length - 1}
      disabled
    />
  {/each}
</div>