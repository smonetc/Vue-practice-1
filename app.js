const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    add(num){
      //in vue using this references the objects found in our data section
      this.counter++
    },
    sub(num){
      this.counter = this.counter - num
    },
    setName(event){
      this.name = event.target.value;
    }
  }
});
// this is similar to how we use ReactDOM.render 
//in the index.js file within a react app
app.mount('#events');
