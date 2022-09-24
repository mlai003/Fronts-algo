class Node { //node class. each node will comprise of these attributes  
    constructor(value){
        this.value = value; //data
        this.next= null; //pointer to next node
    
    }
}

class SLL {      //the SLL list
    // constructor, other methods, removed for brevity
    constructor(){
        this.head = null; //points to first node
    }
        //Add Front 
        addFront(value) {
            var newNode = new Node(value); //make new node instance
            newNode.next = this.head;
            this.head = newNode;  //newNode becomes new head
            return this.head;
    }
        //Remove Front 
    removeFront(){

        if (this.head == null){  //if list is already empty, return the head 
            return this.head
        }

        var removeHead = this.head; //removeHead Variable
        this.head = removeHead.next; //removeHead.next becomes the new head at node position 2
        removeHead.next = null  //getting rid of the head node position 1
        return this.head;
    }

        //Front
    front(){
        return this.head.value
    }

}
        var SLLOne = new SLL(); //empty list
       
        SLLOne.addFront(1)
        SLLOne.addFront(2)
        SLLOne.removeFront()
      
        
       
        console.log(SLLOne)
        

        