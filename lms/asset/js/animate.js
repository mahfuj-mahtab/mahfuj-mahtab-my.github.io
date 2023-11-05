
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if(isMobileDevice()){

}
else{
    console.log('hhhhhhhhhhh');
    // const leftElement = document.getElementById("left_element");
    // const cat_box_sec = document.getElementById("cat_box_sec");
    const leftElement_ul = document.getElementById("left_element_ul");
    const rightElement = document.getElementById("rightElement");

    // Animate the left element from the left
    // leftElement.style.left = 0;
    leftElement_ul.style.left = "300px";

}
window.onscroll = function () {
    if(isMobileDevice()){
        const cat_box_sec = document.getElementById("cat_box_sec");
        const top_course_sec_id = document.getElementById("top_course_sec_id");
        const top_article_sec_id = document.getElementById("top_article_sec_id");
    
        // Check if the elements are in the viewport
        const leftRect = cat_box_sec.getBoundingClientRect();
        const top_course_sec_id_rect = top_course_sec_id.getBoundingClientRect();
        const top_article_sec_id_rect = top_article_sec_id.getBoundingClientRect();
        // console.log("Left:", leftRect.left);
        // console.log("Right:", leftRect.right);
        // console.log("Top:", leftRect.top);
        // console.log("Bottom:", leftRect.bottom);
        if (leftRect.left <= window.innerWidth && leftRect.right >= 0) {
            cat_box_sec.style.top = "110px";
        }
        if (
            top_course_sec_id_rect.top >= 0 && top_course_sec_id_rect.top <= 500
        ) {
            top_course_sec_id.style.left = "0px";
            // console.log(top_course_sec_id_rect.top);
        }
        if (
            top_article_sec_id_rect.top >= 0 && top_article_sec_id_rect.top <= 650
        ) {
            top_article_sec_id.style.right = 0;
            // console.log(top_article_sec_id_rect.top);
        }
    }
    else{

        const cat_box_sec = document.getElementById("cat_box_sec");
        const top_course_sec_id = document.getElementById("top_course_sec_id");
        const top_article_sec_id = document.getElementById("top_article_sec_id");
    
        // Check if the elements are in the viewport
        const leftRect = cat_box_sec.getBoundingClientRect();
        const top_course_sec_id_rect = top_course_sec_id.getBoundingClientRect();
        const top_article_sec_id_rect = top_article_sec_id.getBoundingClientRect();
        // console.log("Left:", leftRect.left);
        // console.log("Right:", leftRect.right);
        // console.log("Top:", leftRect.top);
        // console.log("Bottom:", leftRect.bottom);
        if (leftRect.left <= window.innerWidth && leftRect.right >= 0) {
            cat_box_sec.style.top = "170px";
        }
        if (
            top_course_sec_id_rect.top >= 0 && top_course_sec_id_rect.top <= 350
        ) {
            top_course_sec_id.style.left = "0px";
            // console.log(top_course_sec_id_rect.top);
        }
        if (
            top_article_sec_id_rect.top >= 0 && top_article_sec_id_rect.top <= 200
        ) {
            top_article_sec_id.style.right = 0;
            console.log(top_article_sec_id_rect.top);
        }
    }

 
};
