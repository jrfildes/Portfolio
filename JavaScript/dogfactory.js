// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
  _name: name,
  get name() {
    return this._name;
  },
  set name(newName){
      if(typeof newName==='string')
       {return this._name=newName
      }
      else {
        console.log('please give a valid name!')
  }},
  _breed: breed,
  get breed() {
    return this._breed;
  },
  set breed(newBreed){
      if(typeof newBreed==='string')
       {return this._breed=newBreed
      }else {
        console.log('please give a valid breed!')
  }},
  _weight: weight,
   get weight() {
    return this._weight;
  },
  set weight(newWeight){
       if(typeof newWeight=== 'number'){
         return this._weight=newWeight}
       else {console.log('please give a valid age')}
       },
  bark() { return 'ruff! ruff!'},
  eatTooManyTreats() {return this._weight++}
  }
};
