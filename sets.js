// Sets - similar to arrays but no duplicate items and they are not in any order. Typical use is to simply check for the presence of an item.

function mySet(){
    var collection = [];

    // Look for presence of element and return true or false.
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    // This method will ad an element to the set.
    this.values = function(){
        return collection;
    }

    //This method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    //This element will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return collection.length;
    }

    //This method will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        })
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        return unionSet;
    }

    //This method will return the intersection of the two sets as a new set.
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet;
    }

    //This method will return the difference of two sets as a new set.
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    //Test if set is a subset of a different set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }
}

var setA = new mySet();
var setB = new mySet();
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())


var setC = new Set();
var setD = new Set();
setC.add('a')
setD.add('b')
setD.add('c')
setD.add('a')
setD.add('d')
console.log(setD.values())