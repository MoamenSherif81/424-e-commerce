export function getFilterQuery(data){
  const queriesArr = [];
  for(let key in data){
    if(data[key]){
      queriesArr.push(`${key}=${data[key]}`);
    }
  }
  return queriesArr.join('&');
}