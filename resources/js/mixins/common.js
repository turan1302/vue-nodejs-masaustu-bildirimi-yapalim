export default {
    methods : {
        async callApi(method = "",url = "",headers = {},data = {}){
            try{
                return await axios({
                    method : method,
                    url : url,
                    headers : headers,
                    data : data
                })
            }catch (e) {
                return e.response;
            }
        }
    }
}
