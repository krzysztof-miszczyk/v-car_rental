<template>
  <form @submit="onSubmit" class="block items-center w-5/12 max-w-screen-xl mt-2 mb-10">
    <div class="form-control">
      <label class="font-bold text-md">Początek rezerwacji</label>
      <input type="date" v-model="startDate" name="startDate" placeholder="od" />
    </div>
    <div class="form-control">
      <label class="font-bold text-md">Koniec rezerwacji</label>
      <input type="date" v-model="endDate" name="endDate" placeholder="do" />
    </div>
    <input type="submit" value="Zapisz rezerwację" class="absolute bottom w-5/12 my-1 p-2 bg-green-900 hover:bg-green-800 text-center rounded-3xl shadow-2xl text-white active:shadow-md focus:outline-none" />
  </form>
</template>

<script>
export default {
  name: 'AddReservation',
  data() {
    return {
      startDate: '',
      endDate: '',
      idCounter: 7,
    }
  },
  methods: {
    
    onSubmit(e) {
      e.preventDefault()

      if (!this.startDate || !this.endDate) {
        alert('Uzupełnij obie daty.')
        return
      }
      
      const newReservation = {        
        id: this.idCounter,
        car_id: '',
        customer_id:Math.floor(Math.random() * 100),
        start_date: this.startDate,
        end_date: this.endDate,
        value:Math.floor(Math.random() * 1000)
      }  
      this.$emit('add-reservation', newReservation)

      this.startDate = ''
      this.endDate = ''
      this.idCounter++
    },
  },
}
</script>

<style scoped>

.form-control {
  margin: 10px 0;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  padding: 3px 7px;
  font-size: 18px;
}

</style>
