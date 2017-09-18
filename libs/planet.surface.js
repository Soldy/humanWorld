

exports.PlanetSurface = (x,y)=>{
    this.map={}
    this.generate=(x,y)=>{
        for (var i = 0 ; x>i; i++){
            this.map[i]={}
            for (var j=0 ; y>j; j++)
                that.map[i][j]={
                    building:"nothing",
                    id:0,
                    persons:[],
                    HAAT:0, // Height above ground level
                    material:ground,
                }
       }
    }

}






