<script setup lang="ts">
const authStore = useAuthStore();
const gendersStore = useGendersStore();
</script>

<template>
  <div class="row">
    <div class="col">
      <h5 class="text-uppercase">fio user</h5>
      <h5 class="text-uppercase">count scores</h5>
      <h5 class="text-uppercase mb-5">count reviews</h5>

      <ul class="nav nav-underline" id="myTab" role="tablist">
        <li class="nav-item" style="width: 32.3%" role="presentation">
          <button class="nav-link active w-100 text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">my Profile
          </button>
        </li>
        <li class="nav-item" style="width: 32.3%" role="presentation">
          <button class="nav-link w-100 text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">my reviews
          </button>
        </li>
        <li class="nav-item" style="width: 32.3%" role="presentation">
          <button class="nav-link w-100 text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                  type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">my scores
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
             tabindex="0">
          <div class="mt-5 mb-3">
            <h6 class="text-uppercase">email</h6>
            <h6 class="text-uppercase">birthday</h6>
            <h6 class="text-uppercase">gender</h6>
          </div>

          <div class="d-flex">
            <button class="btn btn-dark me-3">
              edit
            </button>

            <button class="btn btn-dark">
              delete account
            </button>
          </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row mt-5">
            <div class="col">
              <!--              review-->
              <div class="row m-auto" style="width: 90%">
                <div class="col">
                  <div class="row">
                    <!--                    titles-->
                    <div class="col-8">
                      <p>film</p>
                    </div>

                    <div class="col-2">
                      <p class="text-end">is approved</p>
                    </div>

                    <div class="col-2">
                      <p class="text-end pe-1">date</p>
                    </div>
                  </div>

                  <!--                  contents-->
                  <div class="row">
                    <div class="col-10">
                      <p>message text</p>
                    </div>

                    <div class="col-2 d-flex">
                      <button class="btn btn-dark ms-auto">remove</button>
                    </div>
                  </div>
                </div>
                <hr class="m-3">

              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <div class="row mt-5">
            <div class="col">
              <!--              review-->
              <div class="row m-auto" style="width: 90%">
                <div class="col">
                  <div class="row">
                    <!--                    titles-->
                    <div class="col-10">
                      <p>film</p>
                    </div>

                    <div class="col-2">
                      <p class="text-end pe-1">date</p>
                    </div>
                  </div>

                  <!--                  contents-->
                  <div class="row">
                    <div class="col-10">
                      <p>score</p>
                    </div>

                    <div class="col-2 d-flex">
                      <button class="btn btn-dark ms-auto">remove</button>
                    </div>
                  </div>
                </div>
                <hr class="m-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>