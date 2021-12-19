class Navigator {
    get sidebar() {
        return $('#sidebarMenu')
    }
    async selectItem(item){
        await this.sidebar.$(`a=${item}`).click();
    }
    async logout(){
        await $('a=John Walker').click();
    }
}

module.exports = { Navigator: new Navigator() };
