class Node{
  constructor(val){
    this.val = val;
    this.children = [];
  }

  addChild(node){
    this.children.push(node);
  }

  getChildren(){
    return this.children;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  findBFS(val){

  }

  contains(val) {

  }

  add(val, parent = null){

  }

  remove(val) {

  }


  traverseDFSpreOrder(fn, node = this.root) {

  }

  traverseDFSpostOrder(fn, node = this.root) {

  }

  traverseBFS(fn) {

  }

  print() {
    if(!this.root) {
      return console.log('No root node found');
    }
    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';
    while(queue.length) {
      var node = queue.shift();
      string += node.val.toString() + ' ';
      if(node === newline && queue.length) {
        queue.push(newline);
      }

      const children = node.getChildren()

      for(var i = 0; i < children.length; i++) {
        queue.push(children[i]);
      }
    }
    console.log(string.slice(0, -2).trim());
  }
}

module.exports = { Node, Tree };
