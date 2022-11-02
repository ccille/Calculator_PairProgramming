const App = Vue.createApp({
    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
        }
    },
    methods:{
        Result(){
            return this.firstNumber + this.secondNumber
        }
    }
});
App.mount('#app')