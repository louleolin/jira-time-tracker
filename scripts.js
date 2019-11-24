Vue.component('time-tracker',{
    props:['jira_number','start_date'],
    computed:{
      logged_time:function(){
          let start_time = new Date(this.start_date+' 09:00:00');
          console.log(start_time)
          let current_time = new Date();
          console.log(current_time)
          let period = current_time -start_time;
          return Math.round(period/60/1000) +'m';
      }
    },
    template:`<div class="row">
                    <div class="col-lg-6">
                        <h3>{{jira_number}}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3>{{logged_time}}</h3>
                    </div>
                </div>`
});

new Vue({
    el:'#app',
});