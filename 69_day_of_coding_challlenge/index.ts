// DAY 69
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  
  const today: Days = Days.Tuesday;
  
  console.log(`Today is ${Days[today]}`);
  

  enum Fruites{
  Apple,  //it's index no will remain same output:0
  Mango=5, 
  Banana,
  Orange,
  }

  console.log(Fruites[0]);
  console.log(Fruites["Banana"]);
  console.log(Fruites["Apple"]);
  console.log(Fruites.Orange);

  
