<template>
  <div class="flex flex-col items-center w-full max-w-screen-2xl mx-auto">
    <p class="text-4xl text-center mx-auto mt-28">
      Wybierz samochód którym jesteś zainteresowany
    </p>
    <div class="w-full flex m-10 flex-wrap justify-center">
      <div class="hover:shadow-2xl flex flex-col m-5 bg-white rounded-lg p-10 pb-0 w-80 justify-self-center" v-for="car in carList" :key="car.id">
        <router-link class="cursor-pointer" :to="`/available-cars/${car.id}`">
          <img :src="car.image" alt="car image" class="h-32 rounded-lg">
        </router-link>
        <p class="text-center text-xl">
          {{car.name}}
        </p>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus eaque eligendi eos harum, id ipsum.
        </p>
        <router-link class="mx-auto p-3 px-6 m-3 text-center rounded-md" :to="`/available-cars/${car.id}`">
          →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailableCars",
  data() {
    // TODO: fetch data from mockaroo
    return {
      carList: cars
    }
  }
}

const cars = [
  {
    id: 1,
    name: 'Suzuki Swift',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=85',
    description: ''
  },
  {
    id: 2,
    name: 'Hyundai Creta',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85',
    description: ''
  },
  {
    id: 3,
    name: 'Hyundai i20',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85',
    description: ''
  },
  {
    id: 4,
    name: 'Kia Sonet',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-109.jpeg?q=85',
    description: ''
  },
  {
    id: 5,
    name: 'BMW 3 Series',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 6,
    name: 'Jaguar XE',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/43356/jaguar-xe-front-right-three-quarter-7.jpeg?q=85',
    description: ''
  },
  {
    id: 7,
    name: 'Audi A8 L',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/37410/Audi-New-A8-L-Exterior-170120.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 8,
    name: 'Mercedes-Benz C-Coupe',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/39072/MercedesBenz-CCoupe-Right-Front-Three-Quarter-152578.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 9,
    name: 'Lexus LC 500h',
    image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44615/lexus-lc-500h-right-front-three-quarter10.jpeg?q=85',
    description: ''
  },
  {
    id: 10,
    name: 'Maserati Quattroporte',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/19429/Maserati-Quattroporte-Right-Front-Three-Quarter-149974.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 11,
    name: 'Ferrari Portofino',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/36258/Ferrari-Portofino-Exterior-137289.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 12,
    name: 'Nissan Leaf EV',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/40522/Nissan-Leaf-EV-Right-Front-Three-Quarter-169812.jpg?wm=0&q=85',
    description: ''
  },
  {
    id: 13,
    name: 'Ferrari GTC4 Lusso',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/24539/Ferrari-GTC4-Lusso-Exterior-104086.jpg?v=201711021421&q=85',
    description: ''
  },
  {
    id: 14,
    name: 'Volvo S90 ',
    image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/22612/Volvo-S90-Right-Front-Three-Quarter-83299.jpg?v=201711021421&q=85',
    description: ''
  },
]

</script>

<style scoped>

</style>
