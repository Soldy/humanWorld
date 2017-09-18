



exports.AnimalMammalHuman = function (){
    this.details={
        age:0,
        tits:{
            size:{
                left:"",
                right:""
            },
            silicon:false,
        },
        lips:{
            silicon:false,
        },
        weigth:50,
        height:180,
        eye:{
            color:{
                left:"",
                right:"",
            },
            size:{

            }
        },
        lucky:false,
    },
    this.currentStatus={
         inserted:"",
         married:"",
         blodAlcohol:0,
         cash:[],
         propety:[],
         pregnant:0,
         health:{


         },
         knoweldge:{

         }
    },
    this.history={
         said:[],
         thought:[]
    }
    this.isBeatiful=()=>{
       var point = 0;
       var multiplier = (200-(this.details.age-17));
       var body = (10*(this.details.height/this.details.weight));
       
       body*multiplier
    }
    this.isDrunk=()=>{

    }
    this.isRich=()=>{

    }
    this.say=(stence)=>{

    },
    this.think=(stence)=>{

    }
    this.porpose=(otherHuman)=>{
        
    }
    this.acceptPorpose=(otherHuman)=>{
        

    }
    this.insertInto=()=>{

    }

}



