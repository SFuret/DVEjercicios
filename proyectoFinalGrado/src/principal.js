function Principal(){
    return {
        oninit: function(){

        },
        view: function(){
        return m(
            "div", {
                style:{
                    width:"100vw",
                    height:"100vh",
                    backgroundColor:"blue"
                }
            }
        )
        }
    }
};
export {Principal}