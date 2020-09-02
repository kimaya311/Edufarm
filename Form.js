class Form{
    constructor(){
this.input = createInput("Name");
this.button = createButton("PLAY");
this.title = createElement('h1');
this.statement = createElement("h2");
this.boy = createButton("BOY");
this.girl = createButton("GIRL");
 }
 hide(){
  this.input.hide();
  this.button.hide();
  this.title.hide();
  this.statement.hide();
  this.boy.hide();
  this.girl.hide();
  greeting.hide();
  rabi.hide();
  s1.hide();
  s2.hide();
  s3.hide();
  s4.hide();
} 
display(){
  this.button.disabled=true
    this.input.position(displayWidth/2,displayHeight/2-200);
    this.button.position(displayWidth/2+200,displayHeight);
    this.title.html("EduFarm");
    this.title.position(displayWidth/2,displayHeight-displayHeight);
    this.statement.html("Choose your character");
    this.statement.position(displayWidth/2-100,displayHeight/2-100);
    this.boy.position(displayWidth/2+200,displayHeight/2+120);
    this.girl.position(displayWidth/2-200,displayHeight/2+120);

    this.girl.mousePressed(()=>{
      
      this.boy.hide();
      this.button.disabled=false;
      //pl_choice = "girl"
      image(farmgirl,this.girl.position.x,this.girl.position.y);
    })
    this.boy.mousePressed(()=>{
      this.girl.hide();
      this.button.disabled=false
      //pl_choice = "boy"
      image(farmboy,this.boy.position.x,this.boy.position.y);
    })
    
    /*if (pl_choice === "girl"){
      console.log("true_girl");
     
    }
    else if( pl_choice ==="boy"){
      
    }*/
   this.button.mousePressed(()=>{
      if(!this.button.disabled){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.statement.hide();
        this.boy.hide();
        this.girl.hide();
        name = this.input.value();
        var greeting=createElement('h2');
        var s1= createElement("h4");
        var s2= createElement("h4");
        var s3= createElement("h4");
        var s4= createElement("h4");
        greeting.html("Hello " +name);
        s1.html("* Rainy Season");
        s2.html("* From June to October");
        s3.html("* Winter Season");
        s4.html("* From November to April");
        greeting.position(displayWidth/2 - 70, displayHeight/4);
        s1.position(displayWidth/2+20, displayHeight/2+20);
        s2.position(displayWidth/2+20, displayHeight/2+80);
        s3.position(displayWidth/2+20, displayHeight/2+220);
        s4.position(displayWidth/2+20, displayHeight/2+280);
        var kharif=createButton("KHARIF SEASON");
         kharif.position(displayWidth/2,displayHeight/2);
         var rabi=createButton("RABI SEASON");
         rabi.position(displayWidth/2,displayHeight/2+200);

         kharif.mousePressed(()=>{
         this.button.hide();
         greeting.hide();
         rabi.hide();
         kharif.hide();
        s1.hide();
        s2.hide();
        s3.hide();
        s4.hide();
        var K= createElement("h2");
        K.html("CHOOSE THE CROP YOU WANNA GROW!!");
        K.position(displayWidth/2 - 70, displayHeight/4);
         })//kharif

         rabi.mousePressed(()=>{
          this.button.hide();
          greeting.hide();
          rabi.hide();
          kharif.hide();
         s1.hide();
         s2.hide();
         s3.hide();
         s4.hide();
         var R= createElement("h2");
         R.html("CHOOSE THE CROP YOU WANNA GROW!!");
         R.position(displayWidth/2 - 70, displayHeight/4);
         
          })//rabi
        }
        else{
          console.log("Please select the character");
        }
      })//;
    drawSprites();
}
};
