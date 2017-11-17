const { Node, Tree } = require('../src/Tree.js')
const expect = require('chai').expect;

describe('findBFS', function(){
  beforeEach(function(){
    tree = new Tree();

    parent = new Node('parent')

    child1 = new Node('child1');
    child2 = new Node('child2');
    child3 = new Node('child3');
    child4 = new Node('child4');

    child11 = new Node('child11');
    child12 = new Node('child12');
    child13 = new Node('child13');
    child14 = new Node('child14');

    child21 = new Node('child21');
    child22 = new Node('child22');
    child23 = new Node('child23');
    child24 = new Node('child24');

    child31 = new Node('child31');
    child32 = new Node('child32');
    child33 = new Node('child33');
    child34 = new Node('child34');

    child41 = new Node('child41');
    child42 = new Node('child42');
    child43 = new Node('child43');
    child44 = new Node('child44');

    child1.children = [child11,child12,child13,child14]
    child2.children = [child21,child22,child23,child24]
    child3.children = [child31,child32,child33,child34]
    child4.children = [child41,child42,child43,child44]

    parent.children = [child1, child2, child3, child4]
    tree.root = parent;
  })

  it('returns a reference to a node if it finds a node with the passed val', function(){


    expect(tree.findBFS('parent')).to.equal(parent);

    expect(tree.findBFS('child1')).to.equal(child1);
    expect(tree.findBFS('child2')).to.equal(child2);
    expect(tree.findBFS('child3')).to.equal(child3);
    expect(tree.findBFS('child4')).to.equal(child4);

    expect(tree.findBFS('child11')).to.equal(child11);
    expect(tree.findBFS('child12')).to.equal(child12);
    expect(tree.findBFS('child13')).to.equal(child13);
    expect(tree.findBFS('child14')).to.equal(child14);

    expect(tree.findBFS('child21')).to.equal(child21);
    expect(tree.findBFS('child22')).to.equal(child22);
    expect(tree.findBFS('child23')).to.equal(child23);
    expect(tree.findBFS('child24')).to.equal(child24);

    expect(tree.findBFS('child31')).to.equal(child31);
    expect(tree.findBFS('child32')).to.equal(child32);
    expect(tree.findBFS('child33')).to.equal(child33);
    expect(tree.findBFS('child34')).to.equal(child34);

    expect(tree.findBFS('child41')).to.equal(child41);
    expect(tree.findBFS('child42')).to.equal(child42);
    expect(tree.findBFS('child43')).to.equal(child43);
    expect(tree.findBFS('child44')).to.equal(child44);



  })

  it('returns null if in cannot find a node with the passed value', function(){
    expect(tree.findBFS('this is not in the tree')).to.equal(null)
  })
})

describe('contains', function(){
  it('returns true of value is in tree', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    expect(tree.contains(1)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(3)).to.equal(true);
    expect(tree.contains(4)).to.equal(true);
    expect(tree.contains(5)).to.equal(true);

  })
  it('returns false of value is not in tree', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    expect(tree.contains(-1)).to.equal(false);
    expect(tree.contains(10)).to.equal(false);
    expect(tree.contains('string')).to.equal(false);
  })
})

describe('add', function(){
  it('adds a new node with the given val to the root if parent parameter is not specified and tree root is null', function(){
    const tree = new Tree();
    const newValue = 1
    tree.add(newValue);

    expect(tree.root).to.not.equal(null);
    expect(tree.root.val).to.equal(newValue);
  });

  it('returns and error string if it tries to add a new node with out a specified parent and the root is not null', function(){
    const tree = new Tree();

    tree.add(1);
    expect(tree.add(2)).to.equal('Root node is already assigned')
  });

  it('adds a new child with a given value to a parent of the given value', function(){
    // this test requires findBFS to work

    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    const one = tree.root;
    const two = tree.root.children[0]
    const three = tree.root.children[1]
    const four = two.children[0]
    const five = three.children[0]

    expect(one.val).to.equal(1);
    expect(two.val).to.equal(2);
    expect(three.val).to.equal(3);
    expect(four.val).to.equal(4);
    expect(five.val).to.equal(5);
  });

  it('returns an error string if the value that is being added already exists in the tree', function(){
    // all values in the tree must be unique
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    expect(tree.add(5,2)).to.equal('Value already exists');

  })
  it('returns an error string if the parent is not found', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    expect(tree.add(9,10)).to.equal('Parent does not exist');
  })

})

describe('remove', function(){
  it('does not remove value if it is not in the tree', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.remove(10);

    expect(tree.contains(1)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(3)).to.equal(true);
    expect(tree.contains(4)).to.equal(true);
    expect(tree.contains(5)).to.equal(true);
  })

  it('if value is the root, it resets to root to null', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.remove(1);

    expect(tree.root).to.equal(null);
  })

  it('if value is in the tree, it removes that node and all its descendants', function(){
    const tree = new Tree();

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.remove(2);

    expect(tree.contains(2)).to.equal(false);
    expect(tree.contains(4)).to.equal(false);

    tree.remove(3);

    expect(tree.contains(3)).to.equal(false);
    expect(tree.contains(5)).to.equal(false);

  })

})

describe('traverseDFSpreOrder', function(){
  it('traverse a tree using depth first search pre order', function(){
    const tree = new Tree();
    const order = []

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.traverseDFSpreOrder(node => order.push(node.val));
    expect(order).to.eql([1,2,4,3,5]);
  })
})

describe('traverseDFSpostOrder', function(){
  it('traverse a tree using depth first search post order', function(){
    const tree = new Tree();
    const order = []

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.traverseDFSpostOrder(node => order.push(node.val));
    expect(order).to.eql([4,2,5,3,1]);
  })
})

describe('traverseBFS', function(){
  it('traverse a tree using breadth first search', function(){
    const tree = new Tree();
    const order = []

    tree.add(1);
    tree.add(2,1);
    tree.add(3,1);
    tree.add(4,2);
    tree.add(5,3);

    tree.traverseBFS(node => order.push(node.val));
    expect(order).to.eql([1,2,3,4,5]);
  })
})
