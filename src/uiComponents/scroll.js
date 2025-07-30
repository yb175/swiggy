function scrollLeft(ref){
    ref.current.scroll({
        left: ref.current.scrollLeft - 200,
        behavior: "smooth"
    })
}

function scrollRight(ref){
    ref.current.scroll({
        left: ref.current.scrollLeft + 200,
        behavior: "smooth"
    })
}

export {scrollLeft, scrollRight} ; 