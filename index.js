let textColor = document.querySelector ('h5')
let black = document.querySelector('.color_black')
let natural = document.querySelector('.color_natural')
let blue = document.querySelector('.color_blue')
let white = document.querySelector('.color_white')
let models = document.querySelector('.model_iphone')
let scrol = document.querySelector('.model')
let css = document.querySelector('.model_btn1')
let ssc = document.querySelector('.model_btn2')
let gb1 = document.querySelector('.bcss1')
let gb2 = document.querySelector('.bcss2')
let gb3 = document.querySelector('.bcss3')
let gb4 = document.querySelector('.bcss4')
let trast1 = document.querySelector('.trast1')
let trast2 = document.querySelector('.trast2')
let iphone = document.querySelector('h6')

trast1.onclick = () => {
    trast1.style.border = '2px solid rgb(58, 85, 255)'
    trast2.style.border = '2px solid rgb(98, 98, 98)'
}
trast2.onclick = () => {
    trast2.style.border = '2px solid rgb(58, 85, 255)'
    trast1.style.border = '2px solid rgb(98, 98, 98)'
}
gb1.onclick = () => {
    gb1.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb2.onclick = () => {
    gb2.style.border = '2px solid rgb(58, 85, 255)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb3.onclick = () => {
    gb3.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb4.onclick = () => {
    gb4.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
}

css.onclick = () => {
    css.style.border = '2px solid rgb(58, 85, 255)'
    ssc.style.border = '2px solid rgb(98, 98, 98)' 
    models.style.height = "500px"
    models.style.width = "700px"
    iphone.innerHTML = "Buy iPhone 15 Pro "
  };
  
  ssc.onclick = () => {
    ssc.style.border = '2px solid rgb(58, 85, 255)'
    css.style.border = '2px solid rgb(98, 98, 98)'
    models.style.height = "550px"
    models.style.width = "750px"
    iphone.innerHTML = "Buy iPhone 15 Pro Max"
    ssc.classList.remove = "gb1"
  };


natural.onclick = () => {
    models.className = 'model_iphone natural'
    textColor.innerHTML = "Color - Natural Titanium"
   
}


black.onclick = () => {
    models.className = 'model_iphone black'
    textColor.innerHTML = "Color - Black Titanium"
}

white.onclick = () => {
    models.className = 'model_iphone white'
    textColor.innerHTML = "Color - White Titanium"
}

blue.onclick = () => {
    models.className = 'model_iphone blue'
    textColor.innerHTML = "Color - Blue Titanium"
}


natural.onmouseenter = () => {
    textColor.innerHTML = "Color - Natural Titanium"
}

black.onmouseenter = () => {
    textColor.innerHTML = "Color - Black Titanium"
}

white.onmouseenter = () => {
    textColor.innerHTML = "Color - White Titanium"
}

blue.onmouseenter = () => {
    textColor.innerHTML = "Color - Blue Titanium"
}

