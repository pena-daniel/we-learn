
class carouselle {
    /**
     * @param {html element} element 
     * @param {object} option
     * @param {object} option.nbrToSlide permet de preciser le nbre d'element a slider
     * @param {object} option.nbrOfVisible permet de preciser le nbre d'element visible 
     * @param {boolean} option.loop doit-on boucler en fin de slide 
     */
    
    constructor(element,option = {}){
        this.element     = element;
        this.isMobile    = false;
        this.isTablet    = false;
        this.isBigTablet = false;
        this.option      = Object.assign({},{
            nbrToSlide:1,
            nbrOfVisible:1
        },option);
        this.panorama       = this.selectDiv("."+this.element.className+" .imageSlide");
        this.children       = this.panorama.children;
        this.curentSlide    = 0;
        this.nxt            = this.selectDiv("."+this.element.className+" .next");
        this.prev           = this.selectDiv("."+this.element.className+" .prev");
        window.addEventListener('resize',this.resize.bind(this));
        this.setStyle();
        this.nxt.addEventListener('click',this.next.bind(this));
        this.next_key();
        this.prev.addEventListener('click',this.back.bind(this));
        
    }
    setStyle(){
        let ratio           = this.children.length/this.nbrOfVisible;
        this.panorama.style.width = (ratio * 100) + '%';
        for (let index = 0; index < this.children.length; index++) {
            this.children[index].style.width = ((100 / this.nbrOfVisible) / ratio) + '%';
        }
    }
    next(){
        this.goToItem(this.curentSlide + this.option.nbrToSlide);
    }
    back(){
        this.goToItem(this.curentSlide - this.option.nbrToSlide);
    }
    next_key(){
        document.addEventListener('keydown',(e)=>{
            if(e.key == 'ArrowRight'){
                this.next();
            }else if(e.key == 'ArrowLeft'){
                this.back();
            }
        });
    }
    
    /**
     * aller a l'index selectioneren deplacant le slider
     * @param {number} index 
     */
    goToItem(index){

        if (index < 0) {
            index = this.children.length - this.nbrOfVisible;
        }else if (index >= this.children.length || (this.children[this.curentSlide + this.nbrOfVisible] === undefined && index > this.curentSlide)) {
            index = 0;
        }

        let translateX                  = (index * (-100/this.children.length));
        this.panorama.style.transform   = "translate3d("+ translateX +"%,0,0)";
        this.curentSlide = index ;

       
    }
    
    /**
     * @returns {number}
     */
    get nbrOfVisible(){
        if (this.isMobile == true) {
            this.option.nbrOfVisible = 1;
        }else if (this.isTablet == true) {
            this.option.nbrOfVisible = 2;
        }else if(this.isBigTablet == true){
            this.option.nbrOfVisible = 3;
        }else{
            this.option.nbrOfVisible = this.option.nbrOfVisible;
        }

        return this.option.nbrOfVisible;
    }

    resize(){
        if (window.innerWidth < 1125 && window.innerWidth > 731) {
            this.isMobile    = false;
            this.isTablet    = false;
            this.isBigTablet = true;
        } else if(window.innerWidth < 731 && window.innerWidth > 475){
            this.isMobile    = false;
            this.isTablet    = true;
            this.isBigTablet = false;
        } else if(window.innerWidth < 475){
            this.isMobile    = true;
            this.isTablet    = false;
            this.isBigTablet = false;
        }else{
            this.isMobile    = false;
            this.isTablet    = false;
            this.isBigTablet = false;
        }
        this.setStyle();
    }

    /**
     * 
     * @param {'.string'} className 
     * @returns {HTMLElement}
     */

    selectDiv(className){
        return document.querySelector(className);
    }

}

let carouselElement   = document.querySelector(".slider");
let carouselElement1  = document.querySelector(".sliders");
let subject           = document.querySelector(".subjectContain");
let prof              = document.querySelector(".listprof");
new carouselle(carouselElement,option = {
    nbrToSlide:1,
    nbrOfVisible:5
});
new carouselle(carouselElement1);
new carouselle(subject,option = {
    nbrToSlide:2,
    nbrOfVisible:5
});
new carouselle(prof,option = {
    nbrToSlide:1,
    nbrOfVisible:4
});
