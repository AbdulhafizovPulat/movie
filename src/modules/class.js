function clas(){
    // Class
    class MenuCard {
        constructor (src, alt, title, text, price, parentSelector, ...classes){
            this.src = src
            this.alt = alt
            this.title = title
            this.text = text
            this.price = price
            this.classes = classes
            this.parent = document.querySelector(parentSelector)
            this.toUzs = 11350
            this.transfer()

        }
        transfer(){
            this.price = this.price * this.toUzs;
        }
        render(){
            const div = document.createElement('div');
            div.classList = "";
            if (this.classes.length === 0){
                this.className = 'menu__item';
                div.classList.add(this.className);
            }else{
                this.classes.forEach(className => div.classList.add(className));
            }
            div.innerHTML = `       
                    <img src=${this.src} alt=${this.alt} />
                    <h3 class="menu__item-subtitle">Plan ${this.title}</h3>
                    <div class="menu__item-descr">
                    ${this.text}
                    </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
                    </div>     
            `
            this.parent.append(div);
        }
    }

    axios.get('http://localhost:3000/menu').then((response) => {
           response.data.forEach(({img, altImg, title, text, price}) => {
                new MenuCard (img, altImg, title, text, price, '.menu .container').render()
         })
     }) 
}

module.exports = clas