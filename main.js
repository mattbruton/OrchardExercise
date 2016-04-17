"use strict";
var counter = 0;

/*
Create a Plant function.
*/

var Plant = function() {
/*
Plant should have a property of height.
*/
  this.height = 0;
};
/*
The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
*/

/*
increaseHeight should increase the value of the height property by the amount passed in as an argument.
decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
*/

Plant.prototype.increaseHeight = function(amount) {
  this.height += amount;
};

Plant.prototype.decreaseHeight = function(amount) {
  this.height -= amount;
};

/*
Create a Tree function.
*/

var Tree = function() {
/*
Tree should have a property of branches.
*/
  this.branches = 0;
  this.growthCount = 0;
};

/*
Plant should be the prototype of Tree.
*/

Tree.prototype = new Plant();
/*
The Tree prototype should have two methods on it: grow and trim.
The grow method should accept an integer value as input.

The grow method should increase the height of the tree.
The trim method should accept an integer value as input.
The trim method should decrease the height of the tree.
*/
/*
When the trim method is called, the number of branches should decrease by one.
Each time the height of a tree increases by 10, the value of branch should increase by one.
*/

Tree.prototype.grow = function(amount) {
  this.increaseHeight(amount);
  this.branches = parseInt(this.height/10);
};

Tree.prototype.trim = function(amount) {
  this.decreaseHeight(amount);
  this.branches = parseInt(this.height/10);
};


/*
Create a PearTree instance of Tree.
*/

var PearTree = new Tree();

/*
Create an OakTree instance of Tree.
*/

var OakTree = new Tree();



/*
Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
Also output the current height of each tree and how many branches it has to the DOM.
*/


var timer = setInterval(function(){
  growOrchard(6, 11);
  counter++;
  if (counter % 10 === 0 ){
    treeTrimmer(PearTree, 10);
    treeTrimmer(OakTree, 15);
    console.log("trimmed");
  }
  if (counter == 30){
    clearInterval(timer);
  }
  treesToDom();
} , 1000);

function growOrchard(pearAmt, oakAmt) {
  PearTree.grow(pearAmt);
  OakTree.grow(oakAmt);
}

function treesToDom(){
  $("#output").html("")
  $("#output").append(`<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.</p>
    <p>Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`)
}

function treeTrimmer(tree, amount) {
  tree.trim(amount);
}




/*

Pear tree is now 23cm tall and has 2 branches

Oak tree is now 57cm tall and has 4 branches
Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.

Stop growing the trees after they have grown 30 time */