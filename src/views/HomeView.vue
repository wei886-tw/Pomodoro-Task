<template>
  <div class="container-fluid ps-0">
    <!-- 左邊選單 -->
    <div class="row">
      <div class="col-2 bg-navbar vh-100 pe-0">
        <div class="container text-white roboto px-0">
          <h1 class="yeseva px-16 pt-24 mb-32 border-bottom border-2">Home</h1>
          <ul class="list-unstyled fs-24 yeseva px-16 gap-16">
            <router-link to="/pomodoroView" class="mb-16">Pomodoro</router-link>
            <li class="mb-16">Statics</li>
            <li class="mb-16">Sessions</li>
          </ul>
        </div>
      </div>

      <div class="col-10">
        <div class="container-fluid">
          <div
            class="row pt-40 justify-content-evenly align-content-between flex-wrap vh-100 pb-40"
          >
            <div class="col-5 border border-2 rounded" style="height: 30%">
              <h2 class="mb-16">Tasks</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>

            <div class="col-5 border border-2 rounded" style="height: 30%">
              <h2>Objectives</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>

            <div class="col-5 border border-2 rounded">
              <h2>Pomodoro Timer</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>

            <div class="col-5 border border-2 rounded" style="height: 30%">
              <h2>Task Details</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>

            <div class="col-5 border border-2 rounded" style="height: 30%">
              <h2>Not yet 1</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>

            <div class="col-5 border border-2 rounded" style="height: 30%">
              <h2>Not yet 2</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
</script>