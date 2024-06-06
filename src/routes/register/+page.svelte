<script>
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
<div class="sm:mx-auto sm:w-full sm:max-w-sm">
  <h1 class="mt-10 text-center text-5xl md:text-7xl font-black uppercase font-serif bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">Habituo</h1>
  <h2 class="mt-6 text-center text-xl md:text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>
</div>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-6" method="POST" action="?/register">
    
    <div>
      <label class="w-full max-w-xs">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input required type="email" name="email" autocomplete="email" class="input input-bordered w-full max-w-lg">
      </label>
    </div>

    <div>
      <label class="w-full max-w-xs">
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input name="password" type="password" autocomplete="current-password" required class="input input-bordered w-full max-w-lg">
      </label>
    </div>
    
    <div>
      <label class="w-full max-w-xs">
        <div class="label">
          <span class="label-text">Repeat Password</span>
        </div>
        <input name="password" type="password" autocomplete="current-password" required class="input input-bordered w-full max-w-lg">
      </label>
    </div>

    <div>
      <button class="btn btn-block btn-primary text-white">Sign up</button>
    </div>

    <div class="h-6 text-center text-error">
      {#if form?.missing}
        <p class="error">All fields are required</p>
      {/if}
      {#if form?.registrationFailed}
        <p class="error">Registration failed</p>
      {/if}
    </div>
    
  </form>

  <p class="mt-4 text-center text-sm">
    Already have an account?
    <a href="/login" class="link link-primary">Sign In</a>
  </p>
</div>
</div>
