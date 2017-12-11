<template>
    <div>
        <h2>{{count}}</h2>
        <ul>
            <li v-for="data in todo">{{data.name}}</li>
        </ul>
    </div>
</template>

<script>
    import  {mapState} from "vuex"
    import  {mapGetters} from "vuex"

    export default {
        data(){
          return{
              mapCount:222222
          }
        },
       /* computed:mapState({
            count:state => state.count
            //count:"count"

            }),*/
       /*computed:mapState({
                    count:state => state.count,
                    tudu:state => state.todo
                })*/
      /* computed:{
           count(){
               return this.$store.state.count
           },
           todo(){
               return this.$store.state.todo

           }
       }*/
      computed:mapGetters({
          count:"count",
          todo:"tudoDone"
      })


    }

</script>





