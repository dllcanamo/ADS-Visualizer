const SortData = [];

let i=1;
while(i <= 50) {
  SortData.push(
    {
      id: i,
      value: i,
      percent: ((i/50)*100).toString() + '%'
    }
  );

  i++;
}

console.log(SortData);

export default SortData;
