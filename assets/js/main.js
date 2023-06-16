/* menu */
$("#toggler,#close").click(()=>{    
    $("#menu").toggleClass("max-lg:-translate-y-full")    
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