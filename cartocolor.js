!function() {

var cartocolor = {Green1: {
3: [],
4: [],
5: ["#F3F9B1","#C9E497","#9DCF82","#6DB973","#2AA468"],
6: [],
7: [],
8: [],
9: []
},Green2: {
2: ["#296B3B","#FAFCA4"],
3: ["#296B3B","#8EB26A","#FAFCA4"],
4: ["#296B3B","#6D9A5A","#B1CB7B","#FAFCA4"],
5: ["#296B3B","#5C8E52","#8EB26A","#C2D785","#FAFCA4"],
6: ["#296B3B","#52874D","#7AA460","#A3C174","#CDDE8B","#FAFCA4"],
7: ["#296B3B","#4C824A","#6D9A5A","#8EB26A","#B1CB7B","#D4E38F","#FAFCA4"],
8: [],
9: []
},Green3: {
2: ["#007553","#cafdd8"],
3: ["#007553","#67cda3","#cafdd8"],
4: ["#007553","#34b289","#8fe2b8","#cafdd8"],
5: ["#007553","#00A47D","#67CDA3","#A2EDC3","#CAFDD8"],
6: ["#007553","#009a74","#4bbc94","#7fdab0","#aaf0c7","#cafdd8"],
7: ["#007553","#00946f","#34b289","#67cda3","#8fe2b8","#b0f2ca","#cafdd8"],
8: [],
9: []
},Green4: {
2: ["#008080","#dfe895"],
3: ["#008080","#7dbb7d","#dfe895"],
4: ["#008080","#5da87e","#9bcf7d","#dfe895"],
5: ["#008080","#4d9e7f","#7dbb7d","#acd87e","#dfe895"],
6: ["#008080","#43987f","#6ab07e","#8fc77d","#b5de7f","#dfe895"],
7: ["#008080","#3b947f","#5da87e","#7dbb7d","#9bcf7d","#bce27f","#dfe895"],
8: [],
9: []
},Green5: {
2: ["#0f4b51","#ebf49d"],
3: ["#0f4b51","#6da06f","#ebf49d"],
4: ["#0f4b51","#518266","#8fbe7b","#ebf49d"],
5: ["#0f4b51","#437461","#6da06f","#a6cb83","#ebf49d"],
6: ["#0f4b51","#3a6b5d","#5c8e6a","#81b276","#b4d389","#ebf49d"],
7: ["#0f4b51","#34665b","#518266","#6da06f","#8fbe7b","#bdd88c","#ebf49d"],
8: [],
9: []
},Khaki1: {
2: ["#324546","#f9ebb2"],
3: ["#324546","#909e74","#f9ebb2"],
4: ["#324546","#6e7f61","#b4bc89","#f9ebb2"],
5: ["#324546","#5e6e5a","#909e74","#c7c894","#f9ebb2"],
6: ["#324546","#546455","#7b8b69","#a5b081","#d2d09b","#f9ebb2"],
7: ["#324546","#4e5e52","#6e7f61","#909e74","#b4bc89","#DAD59F","#f9ebb2"],
8: [],
9: []
},Emrld1: {
2: ["#074050","#d3f2a3"],
3: ["#074050","#4c9b82","#d3f2a3"],
4: ["#074050","#217a79","#6cc08b","#d3f2a3"],
5: ["#074050","#19696f","#4c9b82","#82d091","#d3f2a3"],
6: ["#074050","#145f69","#35877d","#60b187","#8fda94","#d3f2a3"],
7: ["#074050","#105965","#217a79","#4c9b82","#6cc08b","#97e196","#d3f2a3"],
8: [],
9: []
},Blue1: {
2: ["#00477b","#e0ece7"],
3: ["#00477b","#649baa","#e0ece7"],
4: ["#00477b","#437f99","#8cb6bd","#e0ece7"],
5: ["#00477B","#317290","#649BAA","#9FC4C7","#E0ECE7"],
6: ["#00477b","#2a698c","#518aa0","#7cabb6","#accccd","#e0ece7"],
7: ["#00477b","#266389","#437f99","#649baa","#8cb6bd","#b5d1d2","#e0ece7"],
8: [],
9: []
},Teal1: {
2: ["#007086","#91d8d4"],
3: ["#007086","#37a4ab","#91d8d4"],
4: ["#007086","#1b939e","#5ab5b8","#91d8d4"],
5: ["#007086","#008A98","#37A4AB","#69BEBF","#91D8D4"],
6: ["#007086","#008594","#2899a3","#4daeb3","#71c3c3","#91d8d4"],
7: ["#007086","#008192","#1b939e","#37a4ab","#5ab5b8","#77c7c6","#91d8d4"],
8: [],
9: []
},Teal2: {
2: ["#005777","#b2eee6"],
3: ["#005777","#37a4ab","#b2eee6"],
4: ["#005777","#1a8a98","#69bebf","#b2eee6"],
5: ["#005777","#007D8F","#37A4AB","#7ECBC9","#B2EEE6"],
6: ["#005777","#01758a","#2794a0","#57b3b7","#89d2cf","#b2eee6"],
7: ["#005777","#017087","#1a8a98","#37a4ab","#69bebf","#90d7d3","#b2eee6"],
8: [],
9: []
},BluYl1: {
3: ["#045275","#46aea0","#f7feae"],
4: ["#045275","#089099","#7ccba2","#f7feae"],
5: ["#045275","#058092","#46aea0","#9bd8a4","#f7feae"],
6: ["#045275","#02778e","#2a9c9c","#68bfa1","#ace1a4","#f7feae"],
7: ["#045275","#00718b","#089099","#46aea0","#7ccba2","#b7e6a5","#f7feae"],
8: [],
9: []
},BluYl2: {
3: [],
4: [],
5: ["#14577c","#098393","#56ac9a","#a7d19d","#fff1af"],
6: [],
7: [],
8: [],
9: []
},BluYl3: {
3: [],
4: [],
5: ["#004989","#007B87","#3DA17F","#A7C18C","#F5E0BE"],
6: [],
7: [],
8: [],
9: []
},BluYl4: {
3: [],
4: [],
5: ["#4A79B6","#00A3AF","#43BF96","#AFD286","#FEDEA4"],
6: [],
7: [],
8: [],
9: []
},Mint1: {
2: ["#246580","#e3efcd"],
3: ["#246580","#4cb2a0","#e3efcd"],
4: ["#246580","#399896","#86c6af","#e3efcd"],
5: ["#246580","#358b91","#4cb2a0","#9ed0b6","#e3efcd"],
6: ["#246580","#32838d","#41a29a","#71bea9","#acd7bb","#e3efcd"],
7: ["#246580","#307e8b","#399896","#4cb2a0","#86c6af","#b5dbbe","#e3efcd"],
8: [],
9: []
},Mint2: {
2: ["#0d585f","#e4f1e1"],
3: ["#0d585f","#63a6a0","#e4f1e1"],
4: ["#0d585f","#448c8a","#89c0b6","#e4f1e1"],
5: ["#0D585F","#337F7F","#63A6A0","#9CCDC1","#E4F1E1"],
6: ["#0d585f","#2c7778","#509693","#7ab5ad","#abd4c7","#e4f1e1"],
7: ["#0d585f","#287274","#448c8a","#63a6a0","#89c0b6","#b4d9cc","#e4f1e1"],
8: [],
9: []
},Mint3: {
2: ["#123f5a","#d2fbd4"],
3: ["#123f5a","#559c9e","#d2fbd4"],
4: ["#123f5a","#3a7c89","#7bbcb0","#d2fbd4"],
5: ["#123f5a","#2b6c7f","#559c9e","#8eccb9","#d2fbd4"],
6: ["#123f5a","#266377","#458892","#6cafa9","#9cd5be","#d2fbd4"],
7: ["#123f5a","#235d72","#3a7c89","#559c9e","#7bbcb0","#a5dbc2","#d2fbd4"],
8: [],
9: []
},TealPink1: {
3: [],
4: [],
5: ["#0093BE","#7DA1EA","#D6AEFF","#FFC2FF","#FFE0FF"],
6: [],
7: [],
8: [],
9: []
},BluPurp1: {
2: ["#3e57b5","#f9e1f9"],
3: ["#3e57b5","#caaafc","#f9e1f9"],
4: ["#3e57b5","#a08ce4","#dfbbf9","#f9e1f9"],
5: ["#3e57b5","#8a7ed8","#caaafc","#e7c4f8","#f9e1f9"],
6: ["#3e57b5","#7c76d1","#b198ee","#d7b4fa","#ecc9f8","#f9e1f9"],
7: ["#3e57b5","#7371cc","#a08ce4","#caaafc","#dfbbf9","#eecdf8","#f9e1f9"],
8: [],
9: []
},Purp1: {
3: [],
4: [],
5: [],
6: [],
7: ["#5C308C","#833599","#A640A2","#C753A8","#E76CAC","#FF8DB1","#FFC2C7"],
8: [],
9: []
},Purp2: {
3: [],
4: [],
5: [],
6: [],
7: ["#443F7A","#68578D","#8A71A3","#AB8CB9","#CCA9D0","#EBC7E8","#FFE6FF"],
8: [],
9: []
},Purp3: {
3: [],
4: [],
5: [],
6: [],
7: ["#5A3783","#794B93","#9462A1","#AD7BAE","#C496BB","#D8B3C8","#EAD0D7"],
8: [],
9: []
},Purp4: {
3: [],
4: [],
5: ["#4B3C80","#855A99","#B97DB2","#E8A5C9","#FFD1E2"],
6: [],
7: [],
8: [],
9: []
},Purp5: {
3: [],
4: [],
5: ["#593e72","#764f8b","#9966a6","#c48cc8","#dcb0d2"],
6: [],
7: [],
8: [],
9: []
},Sunset1: {
3: [],
4: [],
5: ["#7F56B4","#C76CBC","#F591B7","#FFBEAF","#FFEAB0"],
6: [],
7: [],
8: [],
9: []
},Sunset2: {
3: [],
4: [],
5: [],
6: [],
7: ["#65568A","#936797","#B67D9E","#D198A3","#E4B7AB","#F2D7B9","#FCF8D0"],
8: [],
9: []
},Magnt1: {
3: [],
4: [],
5: [],
6: [],
7: ["#550F58","#77166C","#9A267C","#BC3E89","#DF5C94","#FF81A2","#FFBDC3"],
8: [],
9: []
},Burg1: {
3: [],
4: [],
5: [],
6: [],
7: ["#581c3b","#832b54","#ab4269","#cc607d","#e78393","#f9abae","#ffd5d2"],
8: [],
9: []
},Burg2: {
3: [],
4: [],
5: ["#672044","#9e3963","#cc607d","#ee919b","#ffc6c4"],
6: [],
7: [],
8: [],
9: []
},RedOr1: {
3: [],
4: [],
5: ["#a53460","#c65d61","#dd886b","#edb480","#f9e0a3"],
6: [],
7: [],
8: [],
9: []
},Sunset3: {
3: [],
4: [],
5: ["#e15382","#f67c76","#fea679","#fed08e","#fdf6b5"],
6: [],
7: [],
8: [],
9: []
},OrYel1: {
3: [],
4: [],
5: ["#F1954D","#F4B358","#F6D073","#F7EC96","#FBFFBD"],
6: [],
7: [],
8: [],
9: []
},Peach1: {
3: [],
4: [],
5: ["#eb4b3f","#f27359","#f69073","#fcc6aa","#fde0c5"],
6: [],
7: [],
8: [],
9: []
},Brown1: {
2: ["#884b3d","#f2d6af"],
3: ["#884b3d","#e29859","#f2d6af"],
4: ["#884b3d","#c67c51","#e7ad74","#f2d6af"],
5: ["#884b3d","#b76f4c","#e29859","#eab882","#f2d6af"],
6: ["#884b3d","#ae6749","#d18754","#e5a569","#ebbe8a","#f2d6af"],
7: ["#884b3d","#a86247","#c67c51","#e29859","#e7ad74","#ecc290","#f2d6af"],
8: [],
9: []
}};

if (typeof define === "function" && define.amd) {
    define(cartocolor);
} else if (typeof module === "object" && module.exports) {
    module.exports = cartocolor;
} else {
    this.colorbrewer = cartocolor;
}

}();
