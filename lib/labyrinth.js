function labyrinth(arrMap,roadNum,startNum,endNum) {
  var pStart,pEnd,pRoad={},counter={};
  for(var i=0,width=arrMap.length;i<width;i++){
    for(var j=0,height=arrMap[0].length;j<height;j++){
      switch (arrMap[i][j]) {
        case startNum:  pStart=[i,j];         break;
        case endNum:    pEnd=[i,j];           break;
        case roadNum:   pRoad[i+','+j]=false; break;
      }
    }
  }
  function the(arrow,i,j){
    switch (arrow) {
      case 'up':    i--;break;
      case 'down':  i++;break;
      case 'left':  j--;break;
      case 'right': j++;break;
    }
    return (i in arrMap&&j in arrMap)?[i,j,arrMap[i][j]]:[i,j,false]
  }
  if(!pStart){throw new Error('pStart not found');return}
  if(!pEnd){throw new Error('pEnd not found');return}
  var _i,_j,arrows=['up','down','left','right'],item,arrSearch,newSearch=[pStart];
  while(newSearch.length){
    arrSearch=newSearch.slice(0)
    newSearch=[];
    for(var i=0,len=arrSearch.length;i<len;i++){
      for(var j=0;j<4;j++){
        [_i,_j,item]=the(arrows[j],...arrSearch[i])
        if(item===endNum)
          return true
        if(item===roadNum&&!pRoad[_i+','+_j]){
          pRoad[_i+','+_j]=true
          newSearch.push([_i,_j]);
        }
      }
    }
  }
  return false
}
module.exports = labyrinth