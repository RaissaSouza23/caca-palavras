matriz = new Array;
matriz = 
   //0    1    2    3    4    5    6    7    8    9    10   11    - y
  [['Ú', 'Ô', 'O', 'V', 'O', 'E', 'P', 'Ô', 'E', 'U', 'F', 'Z'], //0
   ['Ê', 'O', 'O', 'Q', 'I', 'B', 'P', 'U', 'D', 'I', 'M', 'O'], //1
   ['S', 'H', 'V', 'B', 'E', 'T', 'I', 'E', 'L', 'O', 'O', 'T'], //2
   ['O', 'L', 'E', 'T', 'A', 'L', 'O', 'C', 'O', 'H', 'C', 'O'], //3
   ['P', 'I', 'U', 'O', 'A', 'Q', 'P', 'A', 'A', 'B', 'T', 'M'], //4
   ['A', 'M', 'H', 'G', 'N', 'L', 'A', 'F', 'C', 'E', 'O', 'A'], //5
   ['H', 'O', 'N', 'N', 'T', 'O', 'S', 'R', 'A', 'O', 'C', 'T'], //6
   ['I', 'Z', 'Q', 'A', 'X', 'I', 'T', 'A', 'R', 'O', 'C', 'E'], //7
   ['G', 'A', 'O', 'R', 'H', 'E', 'E', 'N', 'R', 'U', 'O', 'Q'], //8
   ['Q', 'Z', 'H', 'O', 'I', 'D', 'L', 'G', 'O', 'O', 'U', 'R'], //9
   ['O', 'D', 'J', 'M', 'A', 'E', 'H', 'O', 'Z', 'X', 'R', 'G'], //10
   ['V', 'A', 'O', 'A', 'O', 'A', 'E', 'E', 'H', 'B', 'D', 'A']];//11 - x

document.write("<p style='color:#FFF'>Caça Palavras sobre comidas</p><hr>");
document.write("<center style='color:#FFF'>palavras: arroz; chocolate; milho; sopa; frango; pastel; pudim; morango; ovo; tomate</center>");


document.write("<table>");
for (x = 0; x < 12; x++) {
    document.write("<tr>");
    for (y = 0; y < 12; y++) {
        if (y == 11 && x > 1 && x <  8
            || y == 0 && x > 1 && x < 6 
            || x == 1 && y > 5 && y < 11
            || x == 0 && y > 1 && y < 5
            || y == 1 && x > 0 && x < 6
            || y == 7 && x > 4 && x < 11
            || y == 6 && x > 3 && x < 10
            || y == 8 && x > 5 && x < 11 
            || x == 3 && y > 1 && y < 11 
            || y == 3 && x > 3 && x < 11) {
            document.write("<td id='comida'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");