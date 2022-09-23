function rectangle(w, h, color) {
    return {
        width: Number(w),
        height: Number(h),
        color: color.charAt(0).toUpperCase() + color.substring(1),
       calcArea: function(){
        return this.width * this.height
       }

    }
    
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());