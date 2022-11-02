const App = Vue.createApp({
    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            operator: "",
            operatorList: [ {o: "+"}, {o: "-"}, {o: "*"}, {o: "/"} ]
        }
    },
    methods:{
        Result(){
            switch (this.operator) {
                case "+":
                return this.firstNumber + this.secondNumber
                
                case "-":
                return this.firstNumber - this.secondNumber
                
                case "*":
                return this.firstNumber * this.secondNumber

                case "/":
                if (this.secondNumber == 0) {
                    return "Du kan ikke dividere med 0. You suck!"
                }
                return this.firstNumber / this.secondNumber
            }
            
        }
    }
});
App.mount('#app')