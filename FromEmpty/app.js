App({
    loadPagesNum: 0,
    getRandomColor: function(){
        return '#'+Math.floor(Math.random()*16777215).toString(16); 
    }
})