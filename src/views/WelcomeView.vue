<template>
  <div class="container-fluid vh-100">
    <div class="container h-100 my-auto">
      <div class="row h-100">
        <div class="col-lg-6 d-flex align-items-end align-items-md-center justify-content-center">
          <img src="/logo.png" alt="logo" class="home-logo" />
        </div>
        <div
          class="col-lg-6 d-flex flex-column justify-content-start justify-content-md-center text-center"
        >
          <h1 class="fw-bold fs-32 fs-md-48 fs-lg-64 yeseva">PomodoroTask</h1>
          <p class="roboto fw-bold fs-md-24 mb-48 mb-lg-96">
            Boost productivity with focused work sessions
          </p>
          <button class="btn btn-dark mb-16 w-75 mx-auto roboto">
            <router-link to="/homeView" class="text-white fs-lg-24">Get started</router-link>
          </button>
          <button class="btn btn-dark w-75 mx-auto roboto">Access Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@mixin mobile {
  @media (max-width: 576px) {
    @content;
  }
}

.home-logo {
  @include mobile {
    width: 88%;
    height: 88%;
  }
}
</style>



