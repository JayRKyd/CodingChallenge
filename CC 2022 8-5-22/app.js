

const solution = (Mol1, Mol2, mass1, mass2, Vol, Tempr) => {
    let Press = 0.082;
    let M1 = mass1 * 0.001/Mol1;
    let M2 = mass2 * 0.001/Mol2;
    let T = Tempr + 273.15;
  
    return (((M1 + M2) * Press * T) / Vol) * 1000;
  }