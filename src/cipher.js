const cipher = {
  encode: (offset, string) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    let string2 = '';
    // Recorrer el string
    for (let i = 0; i < string.length; i += 1) {
      const txtCode = string.charCodeAt(i);
      // Para mayúsculas
      if (txtCode >= 65 && txtCode <= 90) {
        // De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode(((txtCode - 65 + offset) % 26) + 65);
      // Para minúsculas
      } else if (txtCode >= 97 && txtCode <= 122) {
        string2 += String.fromCharCode(((txtCode - 97 + offset) % 26) + 97);
      } else if (txtCode >= 48 && txtCode <= 57) {
        string2 += String.fromCharCode(((txtCode - 48 + offset) % 10) + 48);
      } else if(txtCode === 32){
        string2 += string[i];
      }
      else {
        string2 += string[i];
      }
    }
    return string2;
  },
  decode: (offset, string) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    let string2 = '';
    // Recorrer el string
    for (let i = 0; i < string.length; i += 1) {
      const txtCode = string.charCodeAt(i);
      // Para mayúsculas
      if (txtCode >= 65 && txtCode <= 90) {
        // De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode(((txtCode - 90 - offset) % 26) + 90);
      // Para minúsculas
      } else if (txtCode >= 97 && txtCode <= 122) {
        string2 += String.fromCharCode(((txtCode - 122 - offset) % 26) + 122);
      } else if (txtCode >= 48 && txtCode <= 57) {
        string2 += String.fromCharCode(((txtCode - 57 - offset) % 10) + 57);
      } else {
        string2 += string[i];
      }
    }
    return string2;
  },
};

export default cipher;
