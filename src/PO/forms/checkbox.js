class Checkbox {
    constructor(selector) {
        this.selector = selector;
    }

    async set(value) {
       if(value==='yes'){
           await $(this.selector).click();
       }
    }
}

module.exports = { Checkbox };
