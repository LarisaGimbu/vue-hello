/*
  Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
  Bonus:
  Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


const app = new Vue({
  el:'#app',
  data:{
    title:'Benvenuto',
    userName:'',
    headerColor:'',
    textColor:'black',
  },
  methods:{
    colorRed(){
      this.headerColor = 'red';
      this.changeTextColor();
    },
    colorYellow(){
      this.headerColor = 'yellow';
      this.changeTextColor();
    },
    colorBlue(){
      this.headerColor = 'blue';
      this.changeTextColor();
    },
    changeTextColor(){
      if(this.headerColor==='red' || this.headerColor === 'blue'){
        this.textColor = 'white';
      }else{
        this.textColor = 'black';
      }
    }
  }
});
