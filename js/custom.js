var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empties and add event listneres

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}
 

function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 300);    
}

function dragEnd(){
    this.className = 'fill';


}

function dragOver(e){
    e.preventDefault();

}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);

}

function dragEnter(e){
    e.preventDefault();

}

function dragLeave(){
}