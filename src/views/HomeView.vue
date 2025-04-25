<template>
  <div class="container-fluid ps-0">
    <!-- 左邊選單 -->
    <div class="row">
      <div class="col-2 bg-navbar vh-100 pe-0">
        <div class="container text-white roboto px-0">
          <h1 class="yeseva ps-16 pt-24 mb-32 border-bottom border-2">Home</h1>
          <ul class="list-unstyled fs-24 yeseva ps-16 gap-16">
            <li class="mb-16">Tasks</li>
            <li class="mb-16">Statics</li>
            <li class="mb-16">Sessions</li>
          </ul>
        </div>
      </div>

      <div class="col-8">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <h2>Tasks</h2>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
</script>