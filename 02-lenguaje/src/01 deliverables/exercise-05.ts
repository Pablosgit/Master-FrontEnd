console.log("************** DELIVERABLE 05 *********************");

console.log("%c5. Slot Machine:","color: green");


class SlothMachine  {
    money:number;
    ruleta1: boolean;
    ruleta2: boolean;
    ruleta3: boolean;
    constructor(){
        this.money = 0;
        this.ruleta1 = false;
        this.ruleta2 = false;
        this.ruleta3 = false;
    };

    private getRandom(){ 
        return Boolean(Math.round(Math.random()));
    }

    private getResult(){
        if (this.ruleta1 && this.ruleta2 && this.ruleta3){
            console.log("Congratulations!!!. You won " + this.money + " coins!!"); 
            this.money = 0; 
        } else {
            console.log("Good luck next time!!");
        }
    }

    play(){
        this.money ++;
        this.ruleta1 = this.getRandom();
        this.ruleta2 = this.getRandom();
        this.ruleta3 = this.getRandom();
        this.getResult();
    }
  }
  
  console.log("%cMachine 1:","color: red");
  const machine1 = new SlothMachine();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();

  console.log("%cMachine 2:","color: red");
  const machine2 = new SlothMachine();
  machine2.play();
  machine2.play();
  machine2.play();
  machine2.play();
  machine2.play();

  console.log("%cMachine 3:","color: red");
  const machine3 = new SlothMachine();
  machine3.play();
  machine3.play();
  machine3.play();
  machine3.play();
  machine3.play();