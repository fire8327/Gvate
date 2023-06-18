/* menu */
$("#toggler,#close").click(()=>{    
    $("#menu").toggleClass("max-xl:-translate-y-full")    
})


/* dropdown */
$(".dropdown").each((i,el)=>{
    let toggler = $(el).find(".toggler")
    let list = $(el).find(".list")
    toggler.click(()=>{
        list.slideToggle(500)
        list.toggleClass("shadow-[0_0_20px_-13px]")
    })
})


/* observer width */
let width = $(window).width()
$(window).on("load resize", () => {
    width = $(window).width()
    if(width < 1024) {
        let el = $(".el")
        for(let i = 6; i < el.length; i++) {
            $(el[i]).addClass("max-lg:hidden")
        }
        let count = 6;
        $("#load").on("click", ()=>{
            if(count < 24) {
                count += 6
            } else {
                count +=1
            }       
            console.log(count);         
            if(count <= el.length) {
                for(let i = 0; i < count; i++) {
                    $(el[i]).removeClass("max-lg:hidden")
                }
            }
        })
    }
})