<template>
    <div class="container justify-content-center mt-4">
        <button class="btn btn-success btn-sm" @click="veriGonder">Alert Göster</button>
    </div>
</template>

<script>
export default {
    methods: {
        async veriGonder() {
              var sonuc = await this.callApi("get","http://localhost:3000/gonder",{
                  "Access-Control-Allow-Origin" : "*"
              },{
                  "link" : "http://mfsoftware.net"
              });
        }
    }
}
</script>
