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
    avatar:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.fiverr.com%2Fanyavergara%2Fmake-you-a-game-of-thrones-avatar&psig=AOvVaw3Bwswk61sotR_2FOROSqpf&ust=1636642033057000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDhqeqEjvQCFQAAAAAdAAAAABAb',
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
    },
    maleAvatar(){
      this.avatar ='https://clipart.world/wp-content/uploads/2020/07/jon-snow-icon.jpg';
    },
    femaleAvatar(){
      this.avatar ='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/127093048/original/b9df84e3f78ea83fd605105229120fce733a44e1/make-you-a-game-of-thrones-avatar.png';
    }

  }
});
