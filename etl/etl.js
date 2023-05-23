//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (obj) => {

  const newObject = {}

  Object.entries(obj).forEach(el => {

    el[1].forEach(item => {
      Object.assign(newObject, {
        [item.toLowerCase()]: Number(el[0])
      })
    })  

  });

  return (newObject);

};
