function receivesAFunction(spy){
    return spy();
}

function returnsANamedFunction(){
    const mara = function(){return 1+1};
    return mara;
}

function returnsAnAnonymousFunction(){
    return function(){return 1+1};
}
