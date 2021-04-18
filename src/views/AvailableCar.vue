<template>
  <router-link :to="`/available-cars/${car.id}/reservations`" class="p-4 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md fixed bottom-8 w-10/12 max-w-screen-2xl left-0 right-0 mx-auto focus:outline-none">
    Sprawdź rezerwacje {{car.name}} →
  </router-link>
  <div class="flex flex-col items-center w-full max-w-screen-2xl mx-auto">
    <div class="mt-24">
      <p class="text-3xl text-center mb-5">
        {{car.name}}
      </p>
      <CarImages :images="car.images"/>
    </div>
    <div class="w-full max-w-3xl p-7 bg-white rounded-md mb-32">
      <p class="text-2xl mb-2">
        Opis
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae debitis deleniti, dicta doloremque, ex facilis fugit ipsum nemo nisi nostrum obcaecati perferendis quia repellendus similique, tenetur unde! Ea.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae debitis deleniti, dicta doloremque, ex facilis fugit ipsum nemo nisi nostrum obcaecati perferendis quia repellendus similique, tenetur unde! Ea.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae debitis deleniti, dicta doloremque, ex facilis fugit ipsum nemo nisi nostrum obcaecati perferendis quia repellendus similique, tenetur unde! Ea.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae debitis deleniti, dicta doloremque, ex facilis fugit ipsum nemo nisi nostrum obcaecati perferendis quia repellendus similique, tenetur unde! Ea.
      </p>
      <p class="text-2xl mt-6 mb-2">
        Parametry
      </p>
      <div class="flex flex-wrap">
        <div class="m-2 p-3 bg-gray-100 rounded-2xl cursor-pointer" v-for="(parameter, index) in car.parameters" :key="index">
          <span class="text-sm text-gray-400 mr-2">
            {{parameter.name}}
          </span>
          <span>
            {{parameter.value}}
          </span>
        </div>
      </div>
      <p class="text-2xl mt-6 mb-2">
        Warunki wypożyczenia
      </p>
      <div class="flex flex-wrap">
        <div class="m-2 p-3 bg-gray-100 rounded-2xl cursor-pointer" v-for="(loanCondition, index) in car.loanConditions" :key="index">
          <span class="text-sm text-gray-400 mr-2">
            {{loanCondition.name}}
          </span>
          <span>
            {{loanCondition.value}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarImages from "@/components/CarImages";

export default {
  name: "AvailableCar",
  components: {
    CarImages
  },
  data() {
    // TODO: fetch data from mockaroo
    return {
      car: car
    }
  }
}

const car = {
  id: 5,
  name: 'BMW 3 Series',
  images: [
      'https://imgd.aeplcdn.com/1056x594/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=85',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-right-front-three-quarter-2.jpeg?q=85',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-left-front-three-quarter-3.jpeg?q=85',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-right-side-view.jpeg?q=85',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-interior-dashboard.jpeg?q=85',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-engine-shot.jpeg?q=85'
  ],
  description: '',
  parameters: [
    {
      name: 'Marka',
      value: 'BMW'
    },
    {
      name: 'Model',
      value: '3 Series'
    },
    {
      name: 'Moc',
      value: '420 HP'
    },
    {
      name: 'Kolor',
      value: 'Czerwony'
    },
    {
      name: 'Spalanie',
      value: '18l/100km'
    },
    {
      name: 'Typ',
      value: 'Coupe'
    },
    {
      name: 'Liczba dzwi',
      value: '3'
    },
    {
      name: '0 - 100 km/h',
      value: '3,5 sek.'
    },
  ],
  loanConditions: [
    {
      name: 'Kaucja zwrotna',
      value: '5000 zł'
    },
    {
      name: 'Maksymalny czas wypożyczenia',
      value: '7 dni'
    },
    {
      name: 'Opłata za godzinę',
      value: '25 zł'
    },
    {
      name: 'Opłata za kilometr',
      value: '5 zł'
    },
  ]
}
</script>

<style scoped>

</style>
