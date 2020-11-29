<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form id="formulek" action="" @submit.prevent="addTrip()">
          <div class="row">
            <div class="col-12">
              <div class="form-group text-left">
                <label for="tripName">Nazwa</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  name="tripName"
                  placeholder="Nazwa"
                  v-model="name"
                  id="tripName"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group text-left">
                <label for="destination">Cel podróży</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  name="destination"
                  placeholder="Cel podróży"
                  v-model="destination"
                  id="destination"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group text-left">
                <label for="fellowPassenger">Towarzysze podróży</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  name="fellowPassenger"
                  placeholder="Cel podróży"
                  v-model="fellowPassenger"
                  id="fellowPassenger"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group text-left">
                <label for="startDate">Data wyjazdu</label>
                <b-form-datepicker
                  id="startDate"
                  size="sm"
                  locale="en"
                  v-model="startDate"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group text-left">
                <label for="endDate">Data powrotu</label>
                <b-form-datepicker
                  id="endDate"
                  size="sm"
                  locale="en"
                  v-model="endDate"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
            </div>
            <div class="col-12 text-right">
              <button type="submit" class="btn btn-primary mb-2">
                Dodaj
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./AddTripForm.ts" lang="ts"></script>
<style src="./add-trip-form.scss" lang="scss" scoped></style>
