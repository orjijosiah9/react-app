export const STORAGE_KEYS = {
  session: "mathArenaSession",
  history: "mathArenaHistory",
  customSet: "mathArenaCustomSet",
  users: "mathArenaUsers",
};

export const DEFAULT_ADMIN = {
  email: "admin@matharena.local",
  password: "Admin123!",
  displayName: "Competition Admin",
};

export const defaultExamSettings = {
  title: "JAMB-style Mathematics Mock",
  durationMinutes: 60,
};

export const CLASS_OPTIONS = ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];

export const JUNIOR_CLASSES = ["JSS1", "JSS2", "JSS3"];

export const SENIOR_CLASSES = ["SS1", "SS2", "SS3"];

export const defaultJuniorQuestions = [
  { text: "Which of these is a decimal number?", options: ["3042", "101.5", "2019", "111"], answer: 1 },
  { text: "What is the result of \\( 13.6 \\times 10^2 \\) ?", options: ["1360", "136", "1036", "13600"], answer: 0 },
  { text: "The square root of 169 is ______.", options: ["±18", "±12", "±9", "±13"], answer: 3 },
  { text: "Write in figure, three hundred and thirty three thousand, four hundred and thirty three.", options: ["333 433", "333 423", "333 400 033", "300 033 433"], answer: 0 },
  { text: "______ is an equivalent fraction of \\( \\frac{2}{3} \\).", options: ["\\( \\frac{18}{24} \\)", "\\( \\frac{9}{12} \\)", "\\( \\frac{6}{9} \\)", "\\( \\frac{4}{9} \\)"], answer: 2 },
  { text: "The L.C.M of 3 and 5 is ______.", options: ["12", "15", "30", "36"], answer: 1 },
  { text: "Add up 1012, 24, 202 and 6.", options: ["1244", "1024", "1209", "1200"], answer: 0 },
  { text: "\\( \\frac{1}{9} + \\frac{1}{4} = \\) ______.", options: ["\\( \\frac{2}{12} \\)", "\\( \\frac{9}{36} \\)", "\\( \\frac{14}{36} \\)", "\\( \\frac{13}{36} \\)"], answer: 3 },
  { text: "We have ______ types of fraction.", options: ["2", "3", "4", "5"], answer: 1 },
  { text: "Which of these is a fraction?", options: ["100", "3.2", "\\( \\frac{1}{2} \\)", "76"], answer: 2 },
  { text: "Which is greater? \\( \\frac{2}{3} \\) Or \\( \\frac{1}{2} \\) ?", options: ["\\( \\frac{1}{2} \\)", "\\( \\frac{2}{3} \\)", "\\( \\frac{1}{4} \\)", "\\( \\frac{3}{6} \\)"], answer: 1 },
  { text: "The place value of 8 in 813 004 is ______.", options: ["hundred thousands", "tens", "ten thousand", "hundreds"], answer: 0 },
  { text: "The sum of 0.6m and 1.7m is", options: ["0.23 m", "1.67 m", "1.76 m", "2.3 m"], answer: 3 },
   { text: "What is the value of \\( a \\) in the equivalent fraction, \\(\\frac{3}{5} = \\frac{a}{25}\\)", options: ["15", "9", "2", "3"], answer: 0 },
  { text: "Express \\(\\frac{84}{9}\\) as an improper fraction.", options: ["7\\frac{1}{3}", "1\\frac{1}{3}", "9\\frac{1}{3}", "3\\frac{1}{3}"], answer: 2 },
  { text: "Express 243 as a Roman numeral.", options: ["CLXIII", "CCXLIII", "XCCLIII", "CCLVIII"], answer: 1 },
  { text: "The lowest common multiple of the denominator of 2/3, 4/5, 5/6 is ______.", options: ["15", "15", "18", "30"], answer: 3 },
  { text: "Four pages of a 16‑page newspaper are missing, the percentage missing is ______.", options: ["\\frac{1}{4}", "4", "75", "25"], answer: 3 },
  { text: "\\(\\frac{3}{5}\\) of \\(\\frac{5}{8}\\) is ______.", options: ["\\frac{3}{8}", "\\frac{1}{3}", "\\frac{9}{25}", "\\frac{5}{8}"], answer: 0 },
  { text: "Reduce 48/60 to its lowest term.", options: ["\\frac{24}{30}", "\\frac{1}{30}", "\\frac{4}{5}", "\\frac{12}{15}"], answer: 2 },
  { text: "What is the result of \\(-8 + (-7)\\)?", options: ["+15", "-15", "-1", "+1"], answer: 1 },
  { text: "The square root of 144 is ______.", options: ["\\pm 12", "\\pm 13", "\\pm 9", "\\pm 18"], answer: 0 },
  { text: "The product of prime factor of 28 is", options: ["2 \\times 3 \\times 7", "2 \\times 4 \\times 7", "4 \\times 7", "2 \\times 2 \\times 7"], answer: 3 },
  { text: "The value of 7 in 3.673 is ______.", options: ["7 hundredths", "7 units", "7 tenths", "7 thousandths"], answer: 3 },
  { text: "What is the number represented by \\(\\blacksquare \\blacksquare \\blacksquare \\blacksquare \\blacksquare \\blacksquare\\)?", options: ["32", "40", "39", "28"], answer: 2 },
  { text: "The value of \\(23 \\times 32\\) is", options: ["658", "738", "1291", "746"], answer: 1 },
  { text: "The LCM of 12 and 15 is", options: ["60", "90", "30", "120"], answer: 0 },
  { text: "The HCF of 63 and 90 is", options: ["7", "6", "12", "9"], answer: 3 },
  { text: "Which of the following whole numbers are divisible by 11, 54, 35, 40, 75, and 105?", options: ["35, 40, 75, 105", "11, 22, 35", "54, 35, 40, 75, 105", "35, 54, 40, 75"], answer: 1 },
  { text: "Which of the following is not a proper fraction?", options: ["\\frac{3}{4}", "\\frac{3}{4}", "\\frac{3}{2}", "\\frac{5}{8}"], answer: 2 },
  { text: "Express \\(3^{1/7}\\) as an improper fraction is", options: ["\\frac{11}{7}", "\\frac{22}{7}", "\\frac{7}{2}", "\\frac{21}{7}"], answer: 1 },
   { text: "To express the fraction \\( \\frac{30}{48} \\) in its lowest term, divide the numerator and denominator by", options: ["2", "3", "5", "6"], answer: 3 },
  { text: "what fraction of one hour is 45 minutes?", options: ["\\( \\frac{3}{4} \\)", "\\( \\frac{1}{45} \\)", "\\( \\frac{1}{60} \\)", "\\( \\frac{4}{5} \\)"], answer: 0 },
  { text: "The missing number in the fraction \\( \\frac{3}{4} = \\frac{?}{20} \\)", options: ["6", "9", "15", "12"], answer: 2 },
  { text: "25% is equivalent to", options: ["\\( \\frac{3}{4} \\)", "\\( \\frac{1}{4} \\)", "\\( \\frac{2}{3} \\)", "\\( \\frac{1}{3} \\)"], answer: 1 },
  { text: "Write 36 as product of its prime factors in index form", options: ["\\( 2 \\times 3 \\times 6 \\)", "\\( 6 \\times 6 \\)", "\\( 2 \\times 2 \\times 9 \\)", "\\( 2^2 \\times 3^2 \\)"], answer: 3 },
  { text: "The difference between 0.59 and 0.55 is", options: ["0.04", "0.44", "1.14", "0.4"], answer: 0 },
  { text: "The common denominator of the fractions \\( \\frac{3}{6} - \\frac{1}{2} + \\frac{2}{3} \\) is", options: ["3", "6", "2", "12"], answer: 1 },
  { text: "Eight million and forty five in figures is", options: ["80000045", "80045", "8000045", "8000450"], answer: 2 },
  { text: "What is the place value of 2 in 1 205?", options: ["Unit", "Hundred", "Ten", "Hundredth"], answer: 1 },
  { text: "Add up 1011, 2012 and 438.", options: ["3461", "3015", "3643", "3018"], answer: 0 },
  { text: "The number of minutes in \\(\\frac{3}{2}\\) hours is ______ minutes", options: ["45", "30", "75", "90"], answer: 3 },
  { text: "If \\(5\\frac{1}{7}\\) is expressed as an improper fraction, its numerator will be ______.", options: ["36", "7", "2", "49"], answer: 0 },
  { text: "\\(\\frac{4}{25}\\) Expressed as a percentage is ______.", options: ["12%", "14%", "16%", "61/4%"], answer: 2 },
  { text: "The value of 3 in 24.635 is ______.", options: ["3 hundreds", "3 hundredths", "3 tenths", "3 tens"], answer: 1 },
  { text: "The Roman number CXCIV represents the number ______.", options: ["194", "196", "214", "125"], answer: 0 },
  { text: "16.93 to the nearest whole number is ______.", options: ["17.93", "16.9", "16.0", "17"], answer: 3 },
  { text: "The square root of 225 is ______.", options: ["±15", "±12", "±45", "±17"], answer: 0 },
  { text: "0.085 in standard form is ______.", options: ["8.5 \\times 10^3", "8.5 \\times 10^2", "8.5 \\times 10^{-2}", "8.5 \\times 10^{-3}"], answer: 2 },
  { text: "Which is greatest? 134, 341 or 431", options: ["134", "431", "341", "none"], answer: 1 },
   { text: "\\(-x^2(a)\\) Is simplified as ______", options: ["-2ax", "2a", "-2a", "-2x"], answer: 0 },
  { text: "0.25 as percentage is expressed as ______.", options: ["4%", "100%", "250%", "25%"], answer: 3 },
  { text: "The H.C.F of \\(12x^2y^2\\) and \\(4xy^2\\) is ______.", options: ["4xy^2", "4xy", "4xy^2", "4x^2y"], answer: 0 },
  { text: "9.560673 to 4 decimal places is ______.", options: ["9.56", "10", "9.5607", "9.561"], answer: 2 },
  { text: "\\(\\frac{45}{125}\\) to its lowest form is ______.", options: ["\\(\\frac{1}{25}\\)", "\\(\\frac{9}{25}\\)", "\\(\\frac{12}{25}\\)", "\\(\\frac{5}{15}\\)"], answer: 1 },
  { text: "Which of these is not a prime number? 17,21, 23 and 5.", options: ["21", "17", "23", "5"], answer: 0 },
  { text: "Divide -5 by -15 = ______.", options: ["+ \\(\\frac{1}{5}\\)", "- \\(\\frac{1}{5}\\)", "+ \\(\\frac{1}{5}\\)", "+ \\(\\frac{1}{3}\\)"], answer: 3 },
  { text: "\\(16a + 8b - 3a - 9b\\) is simplified as ______.", options: ["13a - b", "19a - 17b", "13a + b", "13a + 1b"], answer: 0 },
  { text: "\\((+1) + (+8)\\) is given as ______.", options: ["-7", "+7", "+9", "-9"], answer: 2 },
  { text: "Express 360000 in standard form:", options: ["3.6 \\times 10^6", "3.6 \\times 10^5", "3.6 \\times 10^3", "3.6 \\times 10^4"], answer: 1 },
  { text: "Express 0.000045 in standard form", options: ["4.5 \\times 10^{-5}", "4.5 \\times 10^3", "4.5 \\times 10^{-2}", "4.5 \\times 10^{-6}"], answer: 0 },
  { text: "Which of these is not a factor of 42", options: ["2", "6", "7", "9"], answer: 3 },
  { text: "Express 50 as product of its prime factor", options: ["2 \\times 5^2", "2 \\times 5", "2^2 \\times 5^2", "2^2 \\times 5"], answer: 0 },
  { text: "The lowest common multiple of 4, 6 and 8 is", options: ["22", "48", "24", "40"], answer: 2 },
  { text: "Find the smallest number by which 72 must be multiplied so that its product will give a perfect square", options: ["3", "2", "1", "5"], answer: 1 },
  { text: "The ratio 20:75 in its lowest form is", options: ["4:15", "2:5", "1:13", "10:15"], answer: 0 },
  { text: "The H.C.F. of 8, 24 and 36 is ______", options: ["20", "8", "18", "4"], answer: 3 },
  { text: "A girl buys 7 pens for N 210. How much would ten pens cost?", options: ["₦300", "₦30", "₦3", "₦200"], answer: 0 },
  { text: "Fill in the gap in 16 : 24 = 4 : ?", options: ["10", "12", "6", "4"], answer: 2 },
  { text: "Calculate the simple interest on ₦200 in 2 years at 4% per annum", options: ["₦160", "₦16", "₦240", "₦260"], answer: 1 },
  { text: "What is 0.003867 to 3 significant figures", options: ["0.00387", "0.00386", "0.004", "386"], answer: 0 },
  { text: "The square root of \\(\\frac{121}{4}\\) is ______", options: ["1\\frac{3}{4}", "6\\frac{1}{2}", "3\\frac{3}{4}", "5\\frac{1}{2}"], answer: 3 },
  { text: "9852 to 3 s.f. is ______", options: ["9850", "980", "9582", "986"], answer: 0 },
  { text: "7.0354 to 2 d.p is ______", options: ["7.03", "7.40", "7.04", "7.13"], answer: 2 },
  { text: "59094 to the nearest hundred is ______", options: ["59104", "59100", "60094", "60194"], answer: 1 },
  { text: "12 - (+3) - 8 = ______", options: ["+1", "-1", "-2", "+2"], answer: 0 },
  { text: "Divide -18 by -3 = ______", options: ["-6", "+15", "-21", "+6"], answer: 3 },
  { text: "(+15) \\times (-4) = ______", options: ["+60", "-60", "+20", "-20"], answer: 1 },
  { text: "5% of #1500 is ______", options: ["#50", "#150", "#500", "#75"], answer: 3 },
  { text: "65 base three in base ten is given as ______.", options: ["18ten", "23ten", "21ten", "20ten"], answer: 1 },
  { text: "\\( 2(3y+11t) \\) is simplified as ______.", options: ["6y+22t", "y+9t", "5y+13t", "6y-22t"], answer: 0 },
  { text: "\\( 132_{four} + 212_{four} + 201_{four} \\) equals ______.", options: ["132_{four}", "715_{four}", "3000_{four}", "4312_{four}"], answer: 2 },
  { text: "Add \\( 111_{two} \\) to \\( 101_{two} \\)", options: ["1100_{two}", "1101_{two}", "100_{two}", "101_{two}"], answer: 0 },
  { text: "Subtract \\( 6547_{eight} \\) from \\( 7502_{eight} \\)", options: ["1321_{eight}", "7732_{eight}", "0733_{eight}", "1409_{eight}"], answer: 2 },
  { text: "\\( 0.0052 \\) to standard form is ______.", options: ["5.2 \\times 10^3", "5.2 \\times 10^{-3}", "5.2 \\times 10^3", "0.052 \\times 10^{-3}"], answer: 1 },
  { text: "Expand \\( 2x-(y+z) \\).", options: ["2x-y+z", "2x+y-z", "2x-y-z", "2x+y+z"], answer: 2 },
  { text: "Which of the following whole numbers is/are multiple of 5?", options: ["35, 40, 75, 105", "11, 22, 35", "54, 35, 40, 75, 105", "35, 54, 40, 75"], answer: 0 },
  { text: "\\( 0.0035 \\) to three decimal places is ______.", options: ["0.002", "0.005", "0.003", "0.004"], answer: 3 },
  { text: "\\( \\frac{3}{5}(2x-3)-\\frac{1}{5}(3x-2) \\) is simplified as ______.", options: ["(x-4)/5", "(x+4)/5", "(x+12)/5", "(x-4)/15"], answer: 0 },
  { text: "\\( 3.78 \\times 10^{-1} \\) in ordinary form is ______.", options: ["0.378", "37.8", "378", "3.78"], answer: 0 },
  { text: "Express \\( 38 \\) as a number in base two.", options: ["100111_{two}", "01110111_{two}", "101101_{two}", "100110_{two}"], answer: 3 },
  { text: "What number must be multiplied by -5 to give a result of 1/10?", options: ["-0.02", "0.2", "50","-50"], answer: 0 },
   { text: "Divide 100001\\(_{two}\\) by 11\\(_{two}\\).", options: ["1110 base 2", "1101 base 2", "1001 base 2", "1011 base 2"], answer: 3 },
  { text: "Express 2103\\(_3\\) in base 10.", options: ["46", "54", "63", "66", "64"], answer: 3 },
  { text: "Simplify 165 – (140 – 125) – 80 – 60.", options: ["– 10", "10", "12", "15"], answer: 1 },
  { text: "Calculate: \\(\\frac{4}{5} \\times 157 – \\frac{4}{5} \\times 87\\)", options: ["194", "– 46", "60", "50"], answer: 2 },
  { text: "What number divided by – 50 gives 12?", options: ["– 4", "2", "0.25", "– 600"], answer: 3 },
  { text: "Simplify \\(\\frac{1}{6}(m – 1) – \\frac{1}{8}(m + 1)\\)", options: ["(7 – m)/24(m^2 + 1)", "(m + 7)/24(m^2 – 1)", "(7 + m)/24(m^2 + 1)", "(7 – m)/24(m^2 – 1)"], answer: 1 },
  { text: "Find the product of 10011\\(_{two}\\) and 11\\(_{two}\\).", options: ["111111\\(_{two}\\)", "10011\\(_{two}\\)", "111001\\(_{two}\\)", "110111\\(_{two}\\)"], answer: 2 },
  { text: "Which of these is not a prime number? 17, 21, 23 and 5.", options: ["21", "17", "23", "5"], answer: 0 },
  { text: "Divide -5 by -15 = ______", options: ["+\\frac{1}{5}", "-\\frac{1}{5}", "+\\frac{1}{5}", "+\\frac{1}{5}"], answer: 0 },
  { text: "16a + 8b – 3a – 9b is simplified as ______.", options: ["13a – b", "19a – 17b", "13a + b", "13a + 1b"], answer: 0 },
  { text: "(+1) + (+8) is given as ______.", options: ["– 7", "+ 7", "+ 9", "– 9"], answer: 2 },
  { text: "Express 360000 in standard form:", options: ["3.6 × 10^5", "3.6 × 10^5", "3.6 × 10^3", "3.6 × 10^4"], answer: 0 },
  { text: "Express 0.000045 in standard form", options: ["4.5 × 10^{-5}", "4.5 × 10^{-3}", "4.5 × 10^{-2}", "4.5 × 10^{-5}"], answer: 0 },
  { text: "Which of these is not a factor of 42", options: ["2", "6", "7", "9"], answer: 3 },
  { text: "What is the result of 13.65 × 10^2 ?", options: ["1365", "136.5", "1036", "13650"], answer: 0 },
  { text: "The square root of the product of 40 and 250 is ______.", options: ["± 10", "± 50", "± 25", "±100"], answer: 3 },
  { text: "7.0354 to 2 d.p is ______.", options: ["7.03", "7.40", "7.04", "7.13"], answer: 2 },
  { text: "59094 to the nearest hundred is ______.", options: ["59104", "59100", "60094", "60194"], answer: 1 },
  { text: "Calculate \\((+15) – (–8) + (+32) =\\)", options: ["+59", "-59", "-39", "+39"], answer: 3 },
  { text: "Find the smallest number by which 72 must be multiplied so that its product will give a perfect square", options: ["3", "2", "1", "5"], answer: 1 },
  { text: "The ratio 20:75 in its lowest form is", options: ["4:15", "2:5", "1:13", "10:15"], answer: 0 },
  { text: "The H.C.F. of \\( 8x^2 \\), \\( 24xy \\), and \\( 36xy^2 \\) is ___", options: ["20xy", "8y", "18x^2", "4x"], answer: 3 },
  { text: "A girl buys 7 pens for N 210. How much would ten pens cost?", options: ["₦300", "₦30", "₦3", "₦200"], answer: 0 },
  { text: "A fisherman had 30 fish in his net. He ate some of them and discovered that there are 19 fish left. How many did he eat?", options: ["11", "49", "31", "39"], answer: 0 },
  { text: "0.25 as percentage is expressed as ______.", options: ["4%", "100%", "250%", "25%"], answer: 3 },
  { text: "The H.C.F. of \\( 12x^2y^2 \\) and \\( 4xy^2 \\) is ______.", options: ["4xy^2", "4xy", "4xy^2", "4x^2y"], answer: 0 },
  { text: "9.560673 to 4 decimal places is ______.", options: ["9.56", "10", "9.5607", "9.561"], answer: 2 },
];


export const defaultQuestions = [
 
  {
    "text": "there are 1000 buildings in a street . a sign - maker is contracted to number the houses from 1 to 1000 . how many zeroes will he need ?",
    "options": ["190", "191", "192", "193"],
    "answer": 2
  },
  {
    "text": "a man bought 20 shares of rs . 50 at 5 discount , the rate of dividend being 13 . the rate of interest obtained is :",
    "options": ["27 %", "87 %", "15 %", "66 %"],
    "answer": 2
  },
  {
    "text": "? % of 360 = 108",
    "options": ["30", "36", "64", "72"],
    "answer": 0
  },
  {
    "text": "a corporation double its annual bonus to 100 of its employees . what percent of the employees \u2019 new bonus is the increase ?",
    "options": ["50 %", "12 %", "8 %", "6 %"],
    "answer": 0
  },
  {
    "text": "a and b together do a work in 20 days . b and c together in 15 days and c and a in 12 days . then b alone can finish same work in how many days ?",
    "options": ["50", "60", "45", "35"],
    "answer": 1
  },
  {
    "text": "oak street begins at pine street and runs directly east for 2 kilometers until it ends when it meets maple street . oak street is intersected every 400 meters by a perpendicular street , and each of those streets other than pine street and maple street is given a number beginning at 1 st street ( one block east of pine street ) and continuing consecutively ( 2 nd street , 3 rd street , etc . . . ) until the highest - numbered street one block west of maple street . what is the highest - numbered street that intersects oak street ?",
    "options": ["4 th", "5 th", "6 th", "7 th"],
    "answer": 0
  },
  {
    "text": "the cost of one photocopy is $ 0.02 . however , a 25 % discount is offered on orders of more than 100 photocopies . if arthur and david have to make 80 copies each , how much will each of them save if they submit a single order of 160 copies ?",
    "options": ["$ 0.32", "$ 0.40", "$ 0.45", "$ 0.48"],
    "answer": 1
  },
  {
    "text": "if 6 men and 8 women can do a piece of work in 10 days while 26 men and 48 women can do the same in 2 days , the time taken by 15 men and 20 women in doing the same type of work will be ?",
    "options": ["5", "4", "6", "7"],
    "answer": 1
  },
  {
    "text": "a sum of rs . 1360 has been divided among a , b and c such that a gets 2 / 3 of what b gets and b gets 1 / 4 of what c gets . b ' s share is :",
    "options": ["rs . 120", "rs . 160", "rs . 240", "rs . 300"],
    "answer": 2
  },
  {
    "text": "two - third of a positive number and 16 / 216 of its reciprocal are equal . find the positive number .",
    "options": ["4 / 12", "4 / 17", "4 / 15", "4 / 11"],
    "answer": 0
  },
  {
    "text": "spanish language broadcast records last 90 min on each of two sides . if it takes 3 hours to translate one hour of broadcast , how long will it take to translate 16 full records ?",
    "options": ["144 hours", "124 hours", "134 hours", "154 hours"],
    "answer": 0
  },
  {
    "text": "today is thursday . i came home from a trip 3 days before the day after last monday . how many days have i been home ?",
    "options": ["1 day", "2 days", "7 days", "6 days"],
    "answer": 3
  },
  {
    "text": "a train running at the speed of 50 km / hr crosses a post in 4 seconds . what is the length of the train ?",
    "options": ["90", "120", "60", "95"],
    "answer": 2
  },
  {
    "text": "if soundharya rows 49 km upstream and 77 km down steam taking 7 hours each , then the speed of the stream",
    "options": ["6 kmph", "5 kmph", "2 kmph", "3 kmph"],
    "answer": 2
  },
  {
    "text": "two consultants can type up a report in 12.5 hours and edit it in 7.5 hours . if mary needs 30 hours to type the report and jim needs 12 hours to edit it alone , how many t hours will it take if jim types the report and mary edits it immediately after he is done ?",
    "options": ["41.4", "34.1", "13.4", "12.4"],
    "answer": 0
  },
  {
    "text": "in two triangles , the ratio of the areas is 4 : 3 and the ratio of their heights is 3 : 4 . find the ratio of their bases .",
    "options": ["2 : 3", "4 : 5", "16 : 9", "7 : 9"],
    "answer": 2
  },
  {
    "text": "what is the probability of drawing a queen from a deck of 52 cards ?",
    "options": ["4 / 13", "1 / 13", "4", "1"],
    "answer": 1
  },
  {
    "text": "how many words , with or without meaning , can be formed using all letters of the word good using each letter exactly once ?",
    "options": ["18", "20", "22", "23"],
    "answer": 3
  },
  {
    "text": "the ratio of the area of a square to that of the square drawn on its diagonal is",
    "options": ["1 : 2", "1 : 0", "1 : 7", "1 : 5"],
    "answer": 0
  },
  {
    "text": "what is the probability for a family with 3 children to have a girl and two boys ( assuming the probability of having a boy or a girl is equal ) ?",
    "options": ["1 / 8", "1 / 4", "1 / 2", "3 / 8"],
    "answer": 3
  },
  {
    "text": "what quantity of water should be added to reduce 9 liters of 50 % acidic liquid to 30 % acidic liquid ?",
    "options": ["6 liters", "8 liters", "10 liters", "12 liters"],
    "answer": 0
  },
  {
    "text": "a man gains 20 % by selling an article for a certain price . if the sells it at double the price , the percentage of profit will be :",
    "options": ["327", "140", "277", "178"],
    "answer": 3
  },
  {
    "text": "from a pack of 52 cards , 1 card is drawn at random . what is the probability that a red king is drawn ?",
    "options": ["1 / 2", "1 / 4", "1 / 13", "1 / 26"],
    "answer": 3
  },
  {
    "text": "rani bought more apples than oranges . she sells apples at \u20b9 23 apiece and makes 15 % profit . she sells oranges at \u20b9 10 apiece and makes 25 % profit . if she gets \u20b9 653 after selling all the apples and oranges , find her profit percentage z .",
    "options": ["16.8 %", "17.4 %", "17.9 %", "18.5 %"],
    "answer": 1
  },
  {
    "text": "2 trains starting at the same time from 2 stations 200 km apart and going in opposite direction cross each other at a distance of 110 km from one of the stations . what is the ratio of their speeds ?",
    "options": ["11 : 9", "11 : 2", "91 : 9", "11 : 1"],
    "answer": 0
  },
  {
    "text": "the set s consists of 5 numbers : { 1 , 2,3 , 4,5 } . if all possible subsets including the null set are created and one subset is chosen at random , what is the probability that the subset has 4 or 5 as its largest number ?",
    "options": ["1 / 2", "2 / 3", "3 / 4", "5 / 8"],
    "answer": 2
  },
  {
    "text": "two men are going along a track rail in the opposite direction . one goods train crossed the first person in 20 sec . after 10 min the train crossed the other person who is coming in opposite direction in 18 sec . after the train has passed , when the two persons will meet ?",
    "options": ["95 minutes", "90 minutes", "88 minutes", "95 minutes"],
    "answer": 1
  },
  {
    "text": "what is the smallest positive integer x such that 108 x is the cube of a positive integer ?",
    "options": ["2", "4", "8", "10"],
    "answer": 0
  },
  {
    "text": "8 men can dig a pit in 20 days . if a man works half as much again a s a boy , then 4 men and 9 boys can dig a similar pit in :",
    "options": ["10 days", "12 days", "15 days", "16 days"],
    "answer": 3
  },
  {
    "text": "in a throw of dice what is the probability of ge \u00e6 \u00ab ng number greater than 4",
    "options": ["1 / 2", "1 / 3", "1 / 5", "1 / 6"],
    "answer": 1
  },
  {
    "text": "two dogsled teams raced across a 300 mile course in wyoming . team a finished the course in 3 fewer hours than team q . if team a ' s average speed was 5 mph greater than team q ' s , what was team q ' s average mph ?",
    "options": ["12", "15", "18", "20"],
    "answer": 3
  },
  {
    "text": "a cricketer whose bowling average is 12.4 runs per wicket takes 5 wickets for 26 runs and there by decreases his average by 0.4 . the number age of the family now is ?",
    "options": ["17", "98", "88", "85"],
    "answer": 3
  },
  {
    "text": "out of 40 applicants to a law school , 15 majored in political science , 20 had a grade point average higher than 3.0 , and 10 did not major in political science and had a gpa equal to or lower than 3.0 . how many t applicants majored in political science and had a gpa higher than 3.0 ?",
    "options": ["5", "10", "15", "25"],
    "answer": 0
  },
  {
    "text": "a man invests some money partly in 9 % stock at 96 and partly in 12 % stock at 120 . to obtain equal dividends from both , he must invest the money in the ratio ?",
    "options": ["16 : 18", "16 : 13", "16 : 15", "16 : 12"],
    "answer": 2
  },
  {
    "text": "in an electric circuit , two resistors with resistances 3 ohm and 5 ohm are connected in parallel . in this case , if r is the combined resistance of these two resistors , then the reciprocal of r is equal to the sum of the reciprocals of two resistors . what is the value ?",
    "options": ["15 ohms", "15 / 8 ohms", "1 / 8 ohms", "8 / 15 ohms"],
    "answer": 1
  },
  {
    "text": "a and b enterd into a partnership investing rs . 16000 and rs . 12000 respectively . after 3 months , a withdrew rs . 5000 while b invested rs . 5000 more . after 3 more months . c joins the business with a capital of rs . 21000 . the share of b exceeds that of c , out of a total profit of rs . 26400 after one year by",
    "options": ["rs . 2400", "rs . 3000", "rs . 3600", "rs . 4800"],
    "answer": 2
  },
  {
    "text": "if the cost price of 20 articles is equal to the selling price of 25 articles , what is the % profit or % loss made by the merchant ?",
    "options": ["25 % loss", "25 % profit", "20 % loss", "20 % profit"],
    "answer": 2
  },
  {
    "text": "the ratio of two quantities is 10 : 7 . if each of the quantities is increased by 2 , their ratio changes to 15 : 11 then the greatest number is ?",
    "options": ["10", "12", "15", "16"],
    "answer": 3
  },
  {
    "text": "average between two sets of numbers is closer to the set with morenumbers ?",
    "options": ["70", "80", "85", "90"],
    "answer": 1
  },
  {
    "text": "a , b and c play a cricket match . the ratio of the runs scored by them in the match is a : b = 2 : 3 and b : c = 2 : 5 . if the total runs scored by all of them are 75 , the runs scored by b are ? a . 15 b . 18",
    "options": ["22", "18", "99", "77"],
    "answer": 1
  },
  {
    "text": "in the class of 50 students , 30 speak tamil and 40 speak telugu . what is the lowest possible number of students who speak both the languages ?",
    "options": ["8", "10", "20", "30"],
    "answer": 2
  },
  {
    "text": "if twice of a number divided by 3 d gives 20 as the remainder , and 5 times of the same number gives 32 as the remainder . what will be the value of d ?",
    "options": ["11", "12", "15", "14"],
    "answer": 1
  },
  {
    "text": "3 people candidates contested an election and they received 1136 , 7636 and 11628 votes respectively . what is the percentage of the total votes did the winning candidate get ?",
    "options": ["40 %", "45 %", "57 %", "58 %"],
    "answer": 2
  },
  {
    "text": "a and b started a business jointly a ' s investment was thrice the investment of b and the period of his investment was two times the period of investment of b . if b received rs . 4000 as profit , then their total profit is",
    "options": ["23477", "28000", "28877", "1987"],
    "answer": 1
  },
  {
    "text": "the general hospital is comprised of , 3 / 5 pediatricians , 1 / 4 surgeons , and the rest are gp doctors . if 1 / 4 of the surgeons are heart surgeons , and the hospital doubles the number of gp doctors , what proportion of the hospital are now heart surgeons ?",
    "options": ["2 / 5", "1 / 4", "1 / 2", "1 / 24"],
    "answer": 3
  },
  {
    "text": "45 pupil , out of them 12 in debate only and 22 in singing only . then how many in both ?",
    "options": ["9", "10", "11", "12"],
    "answer": 2
  },
  {
    "text": "of the 75 cars on a car lot , 45 have air - conditioning , 35 have power steering , and 12 have both air - conditioning and power steering . how many of the cars on the lot have neither air - conditioning nor power steering ?",
    "options": ["7", "8", "10", "15"],
    "answer": 0
  },
  {
    "text": "a corporation 5 times its annual bonus to 10 of its employees . what percent of the employees \u2019 new bonus is the increase ?",
    "options": ["12 %", "18 %", "80 %", "20 %"],
    "answer": 2
  },
  {
    "text": "a certain tests consists 8 sections with 25 questions , numbered from 1 to 25 , in each section . if a student answered all of the even - numbered questions correctly and 3 / 4 of the odd - numbered questions correctly , what was the total number of questions he answered correctly ? a . 150 b . 172 c . 174 d . 175 e . 176",
    "options": ["174", "150", "180", "175"],
    "answer": 0
  },
  {
    "text": "a no . when divided by 221 gives a remainder 43 , what remainder will beobtained by dividing the same number 19 ?",
    "options": ["3", "6", "9", "11"],
    "answer": 2
  },
  {
    "text": "tea worth rs . 126 per kg are mixed with a third variety in the ratio 1 : 1 : 2 . if the mixture is worth rs . 153 per kg , the price of the third variety per kg",
    "options": ["175.59", "175.5", "175.57", "175.52"],
    "answer": 2
  },
  {
    "text": "today jim is twice as old as fred , and sam is 4 years younger than fred . 4 years ago jim was 8 times as old as sam . how old is jim now ?",
    "options": ["8", "12", "16", "20"],
    "answer": 3
  },
  {
    "text": "a store sells 2 kinds of jelly beans mixes ( a and b ) both made up of red and yellow beans . if b contains 20 % more red beans than a but 10 % fewer yellow beans . and jar a contains twice as many red beans as yellow by what percent is the number of beans in jar b larger than the number in jar a",
    "options": ["5", "6", "8", "9"],
    "answer": 4
  },
  {
    "text": "find the greatest common factor ( gfc ) of 24 , 40 and 60 .",
    "options": ["1", "2", "3", "4"],
    "answer": 3
  },
  {
    "text": "1394 x 1394",
    "options": ["1943236", "1981709", "18362619", "2031719"],
    "answer": 0
  },
  {
    "text": "a and b start a business jointly . a invests rs 16000 for 8 month and b remains in the business for 4 months . out of total profit , b claims 2 / 7 of the profit . how much money was contributed by b ?",
    "options": ["12800", "13000", "11500", "12500"],
    "answer": 0
  },
  {
    "text": "the second of two numbers is two less than 3 times the first . find the numbers if there sum is 82 .",
    "options": ["7 - 19", "8 - 20", "10 - 16", "15 - 9"],
    "answer": 4
  },
  {
    "text": "in the standard formulation of a flavored drink the ratio by volume of flavoring to corn syrup to water is 1 : 12 : 30 . in the ` ` sport ' ' formulation , the ratio of flavoring to corn syrup is three times as great as in the standard formulation , and the ratio of flavoring to water is half that of the standard formulation . if a large bottle of the ` ` sport ' ' formulation contains 3 ounces of corn syrup , how many ounces of water does it contain ?",
    "options": ["45", "50", "55", "60"],
    "answer": 0
  },
  {
    "text": "a train moves with a speed of 108 kmph . its speed in metres per second is :",
    "options": ["10.8", "18", "30", "38.8"],
    "answer": 2
  },
  {
    "text": "by how much is 50 % of 250 greater than 25 % of 400 .",
    "options": ["25", "26", "29", "39"],
    "answer": 1
  },
  {
    "text": "in a rectangular coordinate system , if a line passes through the points ( - 15 , - 18 ) , ( 1522 ) and ( x , 2 ) then what is the value of x ?",
    "options": ["- 2", "- 1", "0", "1"],
    "answer": 2
  },
  {
    "text": "running at the same constant rate , 100 identical machines can produce a total of 500 coffee bar per minute . at this rate , how many bottles could 20 such machines produce in 2 minutes ?",
    "options": ["110", "220", "330", "200"],
    "answer": 3
  },
  {
    "text": "two ants , arthur and amy , have discovered a picnic and are bringing crumbs back to the anthill . amy makes twice as many trips and carries one and a half times as many crumbs per trip as arthur . if arthur carries a total of b crumbs to the anthill , how many crumbs will amy bring to the anthill , in terms of b ?",
    "options": ["b / 2", "b", "3 b / 2", "2 b"],
    "answer": 4
  },
  {
    "text": "a certain number of badges were distributed among a class of students . the student who got 1 / 6 th of the total number of badges actually got 5 times the average number of badges the others got ! how many students were there in the class ?",
    "options": ["30", "26", "11", "31"],
    "answer": 1
  },
  {
    "text": "tough and tricky questions : work / rate problems . a group of 4 junior lawyers require 7 hours to complete a legal research assignment . how many hours would it take a group of 3 legal assistants to complete the same research assignment assuming that a legal assistant works at two - thirds the rate of a junior lawyer ? source : chili hot gmat",
    "options": ["14", "10", "9", "6"],
    "answer": 0
  },
  {
    "text": "the difference of a larger number and a smaller number is 6 . the sum of the larger number and twice the smaller is 15 . what is the larger number ?",
    "options": ["7", "8", "9", "10"],
    "answer": 2
  },
  {
    "text": "the diameters of two spheres are in the ratio 1 : 2 what is the ratio of their surface area ?",
    "options": ["1 : 0", "1 : 4", "1 : 6", "1 : 2"],
    "answer": 1
  },
  {
    "text": "there are 3 prizes to be distributed among 10 students . if no students gets more than one prize , then this can be done in ?",
    "options": ["10", "45", "95", "120"],
    "answer": 3
  },
  {
    "text": "a starts business with rs . 3500 and after 5 months , b joins with a as his partner . after a year , the profit is divided in the ratio 2 : 3 . what is b ' s contribution in the capital ?",
    "options": ["rs . 9228", "rs . 9129", "rs . 9120", "rs . 9000"],
    "answer": 3
  },
  {
    "text": "how many of the positive factors of 24 are not factors of 27",
    "options": ["2", "6", "4", "1"],
    "answer": 1
  },
  {
    "text": "a bag contains 7 green and 8 white balls . if two balls are drawn simultaneously , the probability that both are of the same colour is - .",
    "options": ["7 / 18", "7 / 19", "7 / 11", "7 / 12"],
    "answer": 4
  },
  {
    "text": "a is a working partner and b is a sleeping partner in a business . a puts in 20,000 and b 90,000 . a gets 20 % of the profit for managing the business , and the rest is divided in proportion to their capitals . find the share of b in profit of 11000 .",
    "options": ["3500", "7200", "6800", "4800"],
    "answer": 1
  },
  {
    "text": "a carpenter constructed a rectangular sandbox with a capacity of 10 cubic feet . if the carpenter were to make a similar sandbox twice as long , twice as wide , and twice as high as the first sandbox , what would be the capacity , in cubic feet , of the second sandbox ?",
    "options": ["20", "40", "60", "80"],
    "answer": 3
  },
  {
    "text": "when tossed , a certain coin has equal probability of landing on either side . if the coin is tossed 4 times , what is the probability that it will land twice on heads and twice tails ?",
    "options": ["1 / 8", "1 / 4", "1 / 16", "1 / 32"],
    "answer": 2
  },
  {
    "text": "the circumferences of the fore and hind - wheels of a carriage are 2 2 / 5 and 3 3 / 7 meters respectively . a chalk mark is put on the point of contact of each wheel with the ground at any given moment . how far will the carriage have travelled so that their chalk marks may be again on the ground at the same time ?",
    "options": ["18 metres", "16 metres", "38 metres", "42 metres"],
    "answer": 4
  },
  {
    "text": "if 5 ^ 5 \u00d7 5 ^ x = ( 125 ) ^ 4 , then what is the value of x ?",
    "options": ["2", "3", "5", "6"],
    "answer": 4
  },
  {
    "text": "machine a produces 100 parts thrice as fast as machine b does . machine b produces 100 parts in 30 minutes . if each machine produces parts at a constant rate , how many parts does machine a produce in 6 minutes ?",
    "options": ["20", "80", "40", "60"],
    "answer": 3
  },
  {
    "text": "a train 150 m long passes a km stone in 15 seconds and another train of the same length travelling in opposite direction in 8 seconds . the speed of the second train is",
    "options": ["60 kmph", "66 kmph", "72 kmph", "99 kmph"],
    "answer": 3
  },
  {
    "text": "what is the max number of rectangular boxes , each measuring 5 inches by 2 inches by 7 inches , that can be packed into a rectangular packing box measuring 15 inches by 20 inches by 35 inches , if all boxes are aligned in the same direction ?",
    "options": ["200", "350", "100", "150"],
    "answer": 3
  },
  {
    "text": "at a wedding reception , 125 guests ate chicken and 75 guests ate beef . if exactly 100 guests ate only one of the two types of meat , how many guests ate both types of meat ?",
    "options": ["5", "100", "7", "4"],
    "answer": 4
  },
  {
    "text": "the average temperature for monday , tuesday and wednsday is 36.3 degrees c . the average temperature for tuesday , wednesday and thursday is 36.7 degrees c . if monday \u2019 s temperature recorded as 39 degrees c , find the thursday \u2019 s temperature ?",
    "options": ["60.2 degrees c", "50.2 degrees c", "40.2 degrees c", "70.2 degrees c"],
    "answer": 2
  },
  {
    "text": "a boy goes to his school from his house at a speed of 3 km / hr and returns at a speed of 2 km / hr . if he takes 5 hours in going and coming . the distance between his house and school is :",
    "options": ["4.5 km", "5.5 km", "6 km", "7 km"],
    "answer": 2
  },
  {
    "text": "how many kilograms of sugar costing rs . 9 per kg must be mixed with 27 kg of sugar costing rs . 7 per kg so that there may be a gain of 10 % by selling the mixture at rs . 9.24 per kg ?",
    "options": ["33", "39", "38", "63"],
    "answer": 3
  },
  {
    "text": "the cost of one photocopy is $ 0.02 . however , a 25 % discount is offered on orders of more than 100 photocopies . if saran and david have to make 80 copies each , how much will each of them save if they submit a single order of 160 copies ?",
    "options": ["$ 0.32", "$ 0.40", "$ 0.45", "$ 0.48"],
    "answer": 1
  },
  {
    "text": "a starts business with rs . 3500 and after 5 months , b joins with a as his partner . after a year , the profit is divided in the ratio 2 : 3 . what is b ' s contribution in the capital",
    "options": ["rs 9000", "rs 7000", "rs 5000", "rs 4000"],
    "answer": 0
  },
  {
    "text": "a cistern can be filled by a tap in 5 hours while it can be emptied by another tap in 10 hours . if both the taps are opened simultaneously then after how much time will the cistern get filled ?",
    "options": ["20 hr", "10 hr", "5 hr", "4 hr"],
    "answer": 1
  },
  {
    "text": "the mall charges 50 cents for the first hour of parking and $ 3 for each additional hour until the customer reaches 4 hours , after that the parking fee is $ 1 per hour . if a certain customer parked his in the mall for 7 hours and 30 minutes , how much is he going to pay ?",
    "options": ["$ 11.5 .", "$ 12 .", "$ 13 .", "$ 14.5"],
    "answer": 2
  },
  {
    "text": "the number of students in each section of a school is 24 . after admitting new students , 3 new sections were started . now , the total number of sections is 16 and there are 21 students in each section . the number of new students admitted is :",
    "options": ["12", "42", "24", "28"],
    "answer": 2
  },
  {
    "text": "simplify : 81 x 81 + 68 x 68 - 2 x 81 x 68 .",
    "options": ["169", "159", "189", "179"],
    "answer": 0
  },
  {
    "text": "a parallelogram has a base that is four time the size of it ' s height . the total area of this parallelogram is 2,304 sq ft . what is the height of the parallelogram ?",
    "options": ["19", "23", "24", "16"],
    "answer": 2
  },
  {
    "text": "what is the remainder when the number w = 14 ^ 2 * 15 ^ 8 is divided by 5 ?",
    "options": ["0", "1", "2", "4"],
    "answer": 0
  },
  {
    "text": "the product of two numbers is 2028 and their h . c . f is 13 . the number of such pairs is :",
    "options": ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "text": "if the average marks of 3 batches of 55 , 60 and 45 students respectively is 40 , 62 , 58 , then the average marks of all the students is",
    "options": ["54.48", "53.31", "54.6", "54.58"],
    "answer": 1
  },
  {
    "text": "in an election contested by two parties , party d secured 12 % of the total votes more than party r . if party r got 132000 votes , by how many votes did it lose the election ?",
    "options": ["240000", "300000", "168000", "36000"],
    "answer": 3
  },
  {
    "text": "a multiple choice test consists of 4 questions , and each question has 5 answer choices . in how many e ways can the test be completed if every question is unanswered ?",
    "options": ["24", "120", "625", "720"],
    "answer": 2
  },
  {
    "text": "a and b undertake to do a piece of work for $ 600 . a alone can do it in 6 days while b alone can do it in 8 days . with the help of c , they finish it in 3 days . find the share of a ?",
    "options": ["$ 100", "$ 150", "$ 300", "$ 250"],
    "answer": 2
  },
  {
    "text": "the value of x + x ( xx ) when x = 7",
    "options": ["350", "346", "358", "336"],
    "answer": 0
  },
  {
    "text": "find the area of a rhombus one side of which measures 20 cm and one diagonal is 24 cm ?",
    "options": ["320 cm 2", "280 cm 2", "384 cm 2", "290 cm 2"],
    "answer": 2
  },
  {
    "text": "you need to print a document of the area 216 sq cm . condition is 3 cm margin is to be left at both top & bottom and 2 cm at the sides . what is the optimized size of your paper ?",
    "options": ["60 sq . cm", "70 sq . cm", "95 sq . cm", "80 sq . cm"],
    "answer": 4
  },
  {
    "text": "a number , when 35 is subtracted from it , reduces to its 80 percent . what is 4 - fifth of that number ?",
    "options": ["130", "155", "490", "140"],
    "answer": 3
  },
  {
    "text": "from a pack of 52 cards , two cards are drawn together at random . what is the probability that the one is heart and other two is diamond ?",
    "options": ["238 / 5525", "176 / 5534", "253 / 5523", "234 / 5525"],
    "answer": 3
  },
  {
    "text": "the sector of a circle has radius of 14 cm and its perimeter 50 cm . find its central angel ?",
    "options": ["180 o", "225 o", "270 o", "150 o"],
    "answer": 4
  },
  {
    "text": "a certain list consists of 21 different numbers . if n is in the list and n is 4 times the average ( arithmetic mean ) of the other 20 numbers in the list , then n is what fraction q of the sum of the 21 numbers in the list ?",
    "options": ["1 / 20", "1 / 6", "1 / 5", "4 / 21"],
    "answer": 1
  },
  {
    "text": "the length and breadth of a rectangular courtyard is 75 m and 32 m . find the cost of leveling it at the rate of $ 3 per m 2 . also , find the distance covered by a boy to take 4 rounds of the courtyard .",
    "options": ["3573", "3455", "8600", "7000"],
    "answer": 4
  },
  {
    "text": "a man and a boy complete a work together in 24 days . if for the last 6 days man alone does the work then it is completed in 26 days . how long the boy will take to complete the work alone ?",
    "options": ["72 days", "20 days", "24 days", "36 days"],
    "answer": 0
  },
  {
    "text": "mathew is planning a vacation trip to london next year from today for 5 days , he has calculated he would need about $ 3000 for expenses , including a round - trip plane ticket from l . a to london . he nets around $ 1500 monthly in gross income , after all bills are paid , he is left with about $ 350 each month free for whatever he desires . how much money would mathew need to evenly save from his $ 350 to have $ 3000 in his bank within 12 months ?",
    "options": ["$ 240", "$ 350", "$ 217", "$ 250"],
    "answer": 3
  },
  {
    "text": "3 pounds of 05 grass seed contain 1 percent herbicide . a different type of grass seed , 20 , which contains 20 percent herbicide , will be mixed with 3 pounds of 05 grass seed . how much grass seed of type 20 should be added to the 3 pounds of 05 grass seed so that the mixture contains 15 percent herbicide ?",
    "options": ["3", "3.75", "4.5", "8.4"],
    "answer": 3
  },
  {
    "text": "if f ( f ( n ) ) + f ( n ) = 2 n + 3 and f ( 0 ) = 1 , what is the value of f ( 2012 ) ?",
    "options": ["222", "2787", "2013", "2778"],
    "answer": 2
  },
  {
    "text": "a certain barrel , which is a right circular cylinder , is filled to capacity with 60 gallons of oil . the first barrel is poured into a second barrel , also a right circular cylinder , which is empty . the second barrel is twice as tall as the first barrel and has twice the diameter of the first barrel . if all of the oil in the first barrel is poured into the second barrel , how much empty capacity , in gallons , is left in the second barrel ?",
    "options": ["there is no empty capacity", "100 gallons", "300 gallons", "420 gallons"],
    "answer": 3
  },
  {
    "text": "concentrated apples juice comes inside a cylinder tube with a radius of 2.5 inches and a height of 15 inches . the tubes are packed into wooden boxes , each with dimensions of 11 inches by 10 inches by 31 inches . how many tubes of concentrated apples juice , at the most , can fit into 3 wooden boxes ?",
    "options": ["24 .", "28 .", "36 .", "42 ."],
    "answer": 0
  },
  {
    "text": "if a coin has an equal probability of landing heads up or tails up each time it is flipped , what is the probability that the coin will land heads up exactly twice in 2 consecutive flips ?",
    "options": ["0.125", "0.225", "0.25", "0.5"],
    "answer": 2
  },
  {
    "text": "in a 100 member association consisting of men and women , exactly 10 % of men and exactly 20 % women are homeowners . what is the maximum number of members who are homeowners ?",
    "options": ["29", "27", "25", "23"],
    "answer": 0
  },
  {
    "text": "in the coordinate plane , a circle centered on point ( - 3 , 4 ) passes through point ( 1 , 1 ) . what is the area of the circle ?",
    "options": ["9 \u03c0", "18 \u03c0", "25 \u03c0", "37 \u03c0"],
    "answer": 2
  },
  {
    "text": "1 , 3,5 , 7,9 , . . 50 find term of sequnce",
    "options": ["1230", "1300", "1500", "1679"],
    "answer": 4
  },
  {
    "text": "if the arithmetic mean of seventy 5 numbers is calculated , it is 35 . if each number is increased by 5 , then mean of new number is ?",
    "options": ["87", "40", "37", "28"],
    "answer": 1
  },
  {
    "text": "a , b , k start from the same place and travel in the same direction at speeds of 30 km / hr , 40 km / hr , 60 km / hr respectively . b starts 6 hours after a . if b and k overtake a at the same instant , how many hours after a did k start ?",
    "options": ["3", "4.5", "4", "12"],
    "answer": 3
  },
  {
    "text": "in an exam 80 % of the boys and 40 % of the girls passed . the number of girls who passed is 120 , which is 2 / 3 rd of the number of boys who failed . what is the total number of students who appeared for the exam ?",
    "options": ["1200", "380", "3800", "2180"],
    "answer": 0
  },
  {
    "text": "the marked price of a book is 20 % more than the cost price . after the book is sold , the vendor realizes that he had wrongly raised the cost price by a margin of 25 % . if the marked price of the book is rs . 30 , what is the original cost price of the book ?",
    "options": ["rs . 30", "rs . 25", "rs . 45", "rs . 20"],
    "answer": 3
  },
  {
    "text": "if annual decrease in the population of a town is 5 % and the present number of people is 40000 what will the population be in 2 years ?",
    "options": ["24560", "26450", "36100", "38920"],
    "answer": 2
  },
  {
    "text": "find the missing figures : ? % of 25 = 20125",
    "options": ["4.5", "6.5", "2.5", "7.5"],
    "answer": 4
  },
  {
    "text": "two trains leave the train station at the same time . one train , on the blue line , heads east - while the other , on the red line , heads west . if the train on the blue line averages 40 km / hr and the other train averages 40 km / hr - how long will it take for the trains to be 100 km apart ?",
    "options": ["2 hours", "2.25 hours", "1 hour", "1.25 hours"],
    "answer": 3
  },
  {
    "text": "what is the greatest possible length which can be used to measure exactly the lengths 10 m 50 cm , 14 m 55 cm and 50 cm ?",
    "options": ["20 cm", "24 cm", "30 cm", "10 cm"],
    "answer": 4
  },
  {
    "text": "at scratch and dents rent - a - car , it costs $ 34.95 a day plus $ 0.23 per mile to rent a car . at rent - a - lemon , the charge is $ 25.00 a day plus $ 1.31 per mile . if you need to rent a car for 3 days , how many miles ( to nearest tenth ) must you drive for a car from both agencies to cost the same amount ?",
    "options": ["25.7 miles", "26.2 miles", "27.6 miles", "27.9 miles"],
    "answer": 2
  },
  {
    "text": "average of 15 results is 43 . if the average of first 7 results is 41 and average of last 7 results is 45 then find the eighth result ?",
    "options": ["41", "39", "43", "45"],
    "answer": 2
  },
  {
    "text": "a sprinter starts running on a circular path of radius r metres . her average speed ( in metres / minute ) is \u03c0 r during the first 30 seconds , \u03c0 r / 2 during next one minute , \u03c0 r / 4 during next 2 minutes , \u03c0 r / 8 during next 4 minutes , and so on . what is the ratio of the time taken for the nth round to that for the previous round ?",
    "options": ["4", "8", "16", "32"],
    "answer": 2
  },
  {
    "text": "the weight of a hollow sphere is directly dependent on its surface area . the surface area of a sphere is 4 \u03c0 \u00b7 r ^ 2 , where r is the radius of the sphere . if a hollow sphere of radius 0.15 cm made of a certain metal weighs 8 grams , a hollow sphere of radius 0.3 cm made of the same metal would weigh how many grams t ?",
    "options": ["t = 16", "t = 32", "t = 64", "128"],
    "answer": 1
  },
  {
    "text": "an enterprising businessman earns an income of re 5 on the first day of his business . on every subsequent day , he earns an income which is just thrice of that made on the previous day . on the 10 th day of business , he earns an income of :",
    "options": ["21", "22", "20", "45"],
    "answer": 3
  },
  {
    "text": "two goods train each 500 m long , are running in opposite directions on parallel tracks . their speeds are 45 km / hr and 30 km / hr respectively find the time taken by the slower train to pass the driver of the faster one .",
    "options": ["12 sec", "24 sec", "48 sec", "60 sec"],
    "answer": 2
  },
  {
    "text": "if x / 5 + 9 / x = 14 / 5 , what are the values of 3 x - 7 ?",
    "options": ["8 and 9", "8 and 20", "17 and 21", "12 and 29"],
    "answer": 1
  },
  {
    "text": "a closed cylindrical tank contains 36 pie cubic feet of water and its filled to half its capacity . when the tank is placed upright on its circular base on level ground , the height of water in the tank is 4 feet . when the tank is placed on its side on level ground , what is the height , in feet , of the surface of the water above the ground ?",
    "options": ["0 feet", "1 feet", "2 feet", "3 feet"],
    "answer": 3
  },
  {
    "text": "the ratio of two speeds of two trains is 3 to 4 . if each of the trains slows its speed 5 km / hr , what will be the ratio of these two train speeds ?",
    "options": ["3 / 4", "8 / 9", "18 / 19", "23 / 24"],
    "answer": 4
  },
  {
    "text": "a box contain the number of balls which is as much times greater than 15 as much times lesser than 240 . the no . of ball is ?",
    "options": ["48", "75", "60", "54"],
    "answer": 2
  },
  {
    "text": "5 years ago , the average age of a and b was 15 years . average age of a , b and c today is 20 years . how old will c be after 14 years ?",
    "options": ["30", "34", "40", "50"],
    "answer": 1
  },
  {
    "text": "one fourth of a solution that was 10 % sugar by weight was replaced with by a second solution resulting in a solution that was 16 percent sugar by weight . the second solution was what percent sugar by weight ?",
    "options": ["34 %", "24 %", "22 %", "18 %"],
    "answer": 0
  },
  {
    "text": "from a pack of cards , two cards are drawn one after the other , with replacement . what is the probability that the first card is a black card and the second card is a king or queen ?",
    "options": ["1 / 52", "1 / 13", "1 / 26", "3 / 26"],
    "answer": 1
  },
  {
    "text": "a man whose bowling average is 22.2 , takes 4 wickets for 36 runs and thereby decreases his average by 1.2 . the number of wickets , taken by him before his last match is :",
    "options": ["14", "22", "38", "40"],
    "answer": 3
  },
  {
    "text": "susan drives from city a to city b . after two hours of driving she noticed that she covered 80 km and calculated that , if she continued driving at the same speed , she would end up been 15 minutes late . so she increased her speed by 10 km / hr and she arrived at city b 36 minutes earlier than she planned . find the distance between cities a and b .",
    "options": ["223", "376", "250", "378"],
    "answer": 2
  },
  {
    "text": "what is the product of all the possible values of x if x ^ 2 + 5 x + 6 ?",
    "options": ["12", "18", "15", "6"],
    "answer": 3
  },
  {
    "text": "mr . das decided to walk down the escalator of a mall . he found that if he walks down 26 steps , he requires 30 seconds to reach the bottom . however , if he steps down 34 stair she would only require 18 seconds to get to the bottom . if the time is measured from the moment the top step begins to descend to the time he steps off the last step at the bottom , find out the height of the stair way insteps ?",
    "options": ["5", "6", "7", "8"],
    "answer": 1
  },
  {
    "text": "a man has $ 480 in the denominations of one - dollar , 5 - dollar notes and 10 - dollar . the number of dollars of each denomination is equal . what is the total number of dollar that he has ?",
    "options": ["50", "60", "90", "48"],
    "answer": 2
  },
  {
    "text": "a , b and c can do a work in 7 , 14 and 21 days respectively . they completed the work and got rs . 242 . what is the share of c ?",
    "options": ["33", "44", "55", "77"],
    "answer": 1
  },
  {
    "text": "kavi spends 50 % of his monthly salary on food and saves 80 % of the remaining amount . if his monthly salary is rs . 19000 , how much money does he save every month ?",
    "options": ["rs . 2000", "rs . 600", "rs . 8000", "rs . 3800"],
    "answer": 3
  },
  {
    "text": "a boatman selling a boat along river flow . if he sell boat in steal water at 3 m / sec and flow of river is 2 m / sec . how much time he will take to sell 100 m .",
    "options": ["30", "10", "15", "20"],
    "answer": 3
  },
  {
    "text": "evaluate 35 % of 450 + 45 % of 350",
    "options": ["232", "242", "315", "262"],
    "answer": 2
  },
  {
    "text": "a bullock cart has to cover a distance of 80 km in 10 hrs . if it covers half of the journey in 3 / 5 th time . what should be its speed to cover the remaining distance in the time left .",
    "options": ["10 kmph", "20 kmph", "30 kmph", "40 kmph"],
    "answer": 0
  },
  {
    "text": "a furniture manufacturer has two machines , but only one can be used at a time . machine w is utilized during the first shift and machine b during the second shift , while both work half of the third shift . if machine w can do the job in 12 days working two shifts and machine b can do the job in 15 days working two shifts , how many days will it take to do the job with the current work schedule ?",
    "options": ["14", "13", "11", "9"],
    "answer": 3
  },
  {
    "text": "what will be the remainder when 17 ^ 200 is divided by 18 ?",
    "options": ["3", "8", "5", "1"],
    "answer": 3
  },
  {
    "text": "a is two years older than b who is twice as old as c . if the total ages of a , b and c be 27 . what is the age of b ?",
    "options": ["12 years", "10 years", "8 years", "14 years"],
    "answer": 1
  },
  {
    "text": "s is a positive integer and multiple of 2 ; p = 4 ^ s , what is the remainder when p is divided by 10 ?",
    "options": ["10", "6", "4", "0"],
    "answer": 1
  },
  {
    "text": "there is a lot of speculation that the economy of a country depends on how fast people spend their money in addition to how much they save . auggie was very curious to test this theory . auggie spent all of his money in 5 stores . in each store , he spent rs . 4 more than one - half of what he had when he went in . how many rupees did auggie have when he entered the first store ?",
    "options": ["248", "120", "252", "250"],
    "answer": 0
  },
  {
    "text": "3 people are planning to share equally the cost of a rental car . if one person withdraws from the arrangement and the others share equally the entire cost of the car , then the share of each of the remaining persons increased by :",
    "options": ["1 / 2", "2 / 7", "3 / 2", "4 / 7"],
    "answer": 0
  },
  {
    "text": "the sum of the even numbers between 1 and k is 79 * 80 , where k is an odd number , then k =",
    "options": ["79", "80", "81", "157"],
    "answer": 4
  },
  {
    "text": "ele , the circus elephant , is currently 3 times older than lyn , the circus lion . in 15 years from now , lyn the circus lion will be exactly half as old as ele , the circus elephant . how old is ele today ?",
    "options": ["40", "48", "43", "45"],
    "answer": 3
  },
  {
    "text": "a right circular cone is exactly fitted inside a cube in such away that the edges of the base of the cone are touching the edges of one of the faces of the cube and the vertex is on the opposite face of the cube . if the volume of the cube is 343 cc , what approximately is the volume of the cone ?",
    "options": ["80 cc", "90 cc", "110 cc", "105 cc"],
    "answer": 1
  },
  {
    "text": "the area of a rhombus is equal to the area of a rectangle whose length is 20 cm and the breadth is 10 cm . if one of the diagonals is 32 cm what is the length of other diagonal ?",
    "options": ["10", "12.5", "15", "16"],
    "answer": 1
  },
  {
    "text": "a line has a slope of 3 / 4 and intersects the point w ( - 12 , - 39 ) . at which point does this line intersect the x - axis ?",
    "options": ["( 40,0 )", "( 30,0 )", "( 0,40 )", "( 40,30 )"],
    "answer": 0
  },
  {
    "text": "how long does a truck of 200 m long traveling at 60 kmph takes to cross a bridge of 180 m in length ?",
    "options": ["36.7", "26.8", "22.8", "21.1"],
    "answer": 2
  },
  {
    "text": "difference between the length & breadth of a rectangle is 10 m . if its perimeter is 206 m , then its area is ?",
    "options": ["2400 m ^ 2", "1500 m ^ 2", "2520 m ^ 2", "1200 m ^ 2"],
    "answer": 3
  },
  {
    "text": "1370 , 1320 , x , - 180 , - 6430",
    "options": ["1070", "6530", "6630", "6730"],
    "answer": 0
  },
  {
    "text": "sum of two numbers is 63 . their difference is 1 / 8 of their sum . their l . c . m is",
    "options": ["231", "153", "351", "345"],
    "answer": 2
  },
  {
    "text": "last year the price range ( per kg ) for 100 varieties of apples in wholesale market was $ 100 . if the prices of each of the 100 varieties increased by 10 percent this year over what it was last year , what is the range of the wholesale prices of the 1000 varieties of apples this year ?",
    "options": ["$ 50", "$ 100", "$ 110", "$ 600"],
    "answer": 2
  },
  {
    "text": "the tailor has a 10 meter long piece of fabric for which to sew a ball room dress . she has to cuts this fabric into strips of 200 centimeters each . how long will it take the tailor to complete this tasks if each 200 centimeter took 5 minutes to cut ?",
    "options": ["150", "200", "188", "245"],
    "answer": 3
  },
  {
    "text": "each of 3 investments has a 20 % of becoming worthless within a year of purchase , independently of what happens to the other two investments . if simone invests an equal sum k in each of these 3 investments on january 1 , the approximate chance that by the end of the year , she loses no more than 1 / 3 of her original investment is",
    "options": ["90 %", "80 %", "70 %", "60 %"],
    "answer": 0
  },
  {
    "text": "a bank pays interest to its customers on the last day of the year . the interest paid to a customer is calculated as 10 % of the average monthly balance maintained by the customer . john is a customer at the bank . on the last day , when the interest was accumulated into his account , his bank balance doubled to $ 5080 . what is the average monthly balance maintained by john in his account during the year ?",
    "options": ["2840", "5680", "6840", "25400"],
    "answer": 3
  },
  {
    "text": "a bus 75 m long is running with a speed of 21 km / hr . in what time will it pass a woman who is walking at 3 km / hr in the direction opposite to that in which the bus is going ?",
    "options": ["5.75", "7.62", "11.25", "4.25"],
    "answer": 2
  },
  {
    "text": "what is the largest power of 3 contained in 200 !",
    "options": ["88", "48", "66", "97"],
    "answer": 3
  },
  {
    "text": "on a certain day , orangeade was made by mixing a certain amount of orange juice with an equal amount of water . on the next day , orangeade was made by mixing the same amount of orange juice with thrice the amount of water . on both days , all the orangeade that was made was sold . if the revenue from selling the orangeade was the same for both days and if the orangeade was sold at $ 0.60 per glass on the first day , what was the price per glass on the second day ?",
    "options": ["$ 015", "$ 0.20", "$ 0.30", "$ 0.40"],
    "answer": 2
  },
  {
    "text": "8597 - ? = 7429 - 4358",
    "options": ["3567", "6424", "6835", "5526"],
    "answer": 3
  },
  {
    "text": "pipe a can fill the tank in 30 minutes and pipe b can empty the tank in 90 minutes . how long it will take to fill the tank if both pipes are operating together ?",
    "options": ["30", "35", "40", "45"],
    "answer": 3
  },
  {
    "text": "if 3 girls can do 3 times of a particular work in 3 days , then , 7 girls can do 7 times of that work in",
    "options": ["1 1 / 5 days", "2 days", "2 1 / 5 days", "3 days"],
    "answer": 3
  },
  {
    "text": "arun is travelling on his cycle and has calculated to reach point a at 2 pm if he travels at 10 kmph . he will reach there at 12 noon if he travels at 15 kmph . at what speed must he travel to reach a at 1 pm ?",
    "options": ["8 kmph", "12 kmph", "10 kmph", "14 kmph"],
    "answer": 1
  },
  {
    "text": "find the least number which when divided by 26 , 36 and 46 leaves the remainders 12 , 22 and 32 respectively .",
    "options": ["10570", "10750", "17050", "10075"],
    "answer": 1
  },
  {
    "text": "a 1 k . m . long wire is held by n poles . if one pole is removed , the length of the gap becomes 12 / 3 m . what is the number of poles initially ?",
    "options": ["500", "501", "502", "503"],
    "answer": 1
  },
  {
    "text": "a certain deep blue paint contains 45 percent blue pigment and 55 percent red pigment by weight . a certain green paint contains 35 percent blue pigment and 65 percent yellow pigment . when these paints are mixed to produce a brown paint , the brown paint contains 40 percent blue pigment . if the brown paint weighs 10 grams , then the red pigment contributes how many grams of that weight ?",
    "options": ["1.5", "2.5", "3.5", "2.75"],
    "answer": 3
  },
  {
    "text": "in the new budget the price of wheat rose by 8 % . by how much percent must a person reduce his consumption so that his expenditure on it does not increase ?",
    "options": ["7.5 %", "7.41 %", "10.9 %", "12.6 %"],
    "answer": 1
  },
  {
    "text": "a certain list consists of 21 different numbers . if n is in the list and n is 4 times the average ( arithmetic mean ) of the other 20 numbers in the list , then n is what fraction e of the sum of the 21 numbers in the list ?",
    "options": ["1 / 20", "1 / 6", "1 / 5", "4 / 21"],
    "answer": 1
  },
  {
    "text": "a sum of money is to be distributed among a , b , c , d in the proportion of 5 : 2 : 4 : 3 . if c gets euro 1000 more than d , what is b ' s share ?",
    "options": ["euro 1000", "euro 3000", "euro 5000", "euro 4000"],
    "answer": 4
  },
  {
    "text": "if a and b are positive integers , and a = 20 b - 15 , the greatest common divisor of a and b can not be",
    "options": ["1", "3", "18", "15"],
    "answer": 2
  },
  {
    "text": "a retailer marks her goods in such a way that the profit made by selling 50 articles is equal to the selling price of 20 articles . what is the percentage of profit made by the retailer ?",
    "options": ["66.67 %", "33.33 %", "40 %", "25 %"],
    "answer": 0
  },
  {
    "text": "what is the angle between the minute and the hour hand of the clock which shows 12 : 24 ?",
    "options": ["115", "120", "124", "130"],
    "answer": 4
  },
  {
    "text": "find the value of ( 70 + 28 / 100 ) \u00d7 100",
    "options": ["7028", "4028", "3128", "3256"],
    "answer": 0
  },
  {
    "text": "a train with 120 wagons crosses john who is going in the same direction , in 36 seconds . it travels for half an hour from the time it starts ove ( who is also riding on his horse ) coming from the opposite direction in 24 seconds . in how much time after the train has crossed the mike do the john meets to mike ? rtaking the john ( he is riding on the horse ) before it starts overtaking the mike",
    "options": ["2534", "3545", "3521", "4564"],
    "answer": 4
  },
  {
    "text": "how many internal diagonals does a pentagon ( five sided polygon ) have ?",
    "options": ["5", "8", "9", "10"],
    "answer": 0
  },
  {
    "text": "10 stickers numbered 1 to 10 are placed in a bowl , mixed up thoroughly and then one sticker is drawn randomly . if it is known that the number on the drawn sticker is more than 3 , what is the probability that it is an even number ?",
    "options": ["3 / 7", "4 / 7", "5 / 7", "7 / 11"],
    "answer": 1
  },
  {
    "text": "for a certain exam , a score of 58 was 2 standard deviations below mean and a score of 98 was 3 standard deviations above mean . what was the mean score w for the exam ?",
    "options": ["74", "76", "78", "80"],
    "answer": 0
  },
  {
    "text": "a student travels from his house to school at 10 km / hr and reaches school 1 hour late . the next day he travels 12 km / hr and reaches school 1 hour early . what is the distance between his house and the school ?",
    "options": ["100", "105", "110", "115"],
    "answer": 4
  },
  {
    "text": "in school there are some bicycles and 4 wheeler wagons . one tuesday there are 190 wheels in the campus . how many bicycles are there ?",
    "options": ["35", "36", "37", "38"],
    "answer": 4
  },
  {
    "text": "what is the length of the diagonal of a square whose area is 4 times of another square with diagonal as 5 v 2 cm ?",
    "options": ["20 v 2", "10", "10 v 2", "20"],
    "answer": 2
  },
  {
    "text": "6 ^ 4 \u2212 4 ^ 4 = ?",
    "options": ["20", "52", "104", "520"],
    "answer": 4
  },
  {
    "text": "find the value of ( 950 + 220 / 900 ) \u00d7 900",
    "options": ["854542", "856945", "758965", "855220"],
    "answer": 3
  },
  {
    "text": "a boat running upstream takes 8 hours 48 minutes to cover a certain distance , while it takes 4 hours to cover the same distance running downstream . what is the ratio between the speed of the boat and speed of the water current respectively ?",
    "options": ["8 / 5", "8 / 3", "3 / 5", "5 / 8"],
    "answer": 1
  },
  {
    "text": "mary sold boxes of butter cookies . ann sold 5 times as much as she did . 18 boxes of cookies were sold that day , how many boxes did mary sell ?",
    "options": ["3", "5", "6", "10"],
    "answer": 0
  },
  {
    "text": "there are 76 persons . 54 can read hindu , 43 can read times , 37 can read deccan and 15 can read all . if 24 can read hindu and deccan and 27 can read deccan and times then what is the number of persons who read only times and hindu .",
    "options": ["21", "22", "23", "24"],
    "answer": 1
  },
  {
    "text": "chocolate bars are sold in packages of 4 or 9 only . if mark bought 97 chocolate bars exactly , what could be the number of large packs mark bought ?",
    "options": ["3", "4", "8", "9"],
    "answer": 3
  },
  {
    "text": "10 men can cut 10 trees in 2 hours . if 2 men leave the job , how many trees will be cut in 3 hours ?",
    "options": ["12", "15", "16", "18"],
    "answer": 0
  },
  {
    "text": "a person ' s present age is one - fifth of the age of his mother . after 8 years , he will be one - half of the age of his mother . how old is the mother at present ?",
    "options": ["25", "44", "32", "45"],
    "answer": 4
  },
  {
    "text": "find the product of the place value and face value of 3 in 5769354",
    "options": ["900", "9000", "90", "9"],
    "answer": 0
  },
  {
    "text": "a shopkeeper loses 15 % , if an article is sold for $ 102 . what should be the selling price of the article to gain 20 % ?",
    "options": ["$ 165", "$ 174", "$ 144", "$ 164"],
    "answer": 2
  },
  {
    "text": "a man sells an article at 10 % gain . had be sold at for rs . 60 / - more he could have gained 20 % what is cost price of article",
    "options": ["rs . 500", "rs . 600", "rs . 650", "rs . 760"],
    "answer": 1
  },
  {
    "text": "6 people can do work in 80 days how much people they required to complete the work in 16 days ?",
    "options": ["10", "20", "30", "40"],
    "answer": 2
  },
  {
    "text": "david and lewis leave chennai for tirupati simultaneously at 7 a . m in the morning driving in two cars at speeds of 60 mph and 80 mph respectively . as soon as lewis reaches tirupati he returns back to chennai along the same route and meets david on the way back . if the distance between the two cities is 160 miles , how far from chennai did david and lewis meet ?",
    "options": ["100 mlies", "120 miles", "90 miles", "95 miles"],
    "answer": 1
  },
  {
    "text": "city a to city b , andrew drove for 1 hour at 50 mph and for 3 hours at 60 mph . what was the average speed for the whole trip ?",
    "options": ["56", "57.5", "58.9", "61.4"],
    "answer": 1
  },
  {
    "text": "the cost of producing x tools by a company is given by c ( x ) = 600 x + 5500 ( in $ ) a ) what is the cost of 100 tools ?",
    "options": ["65500 $", "125800 $", "125900 $", "6500 $"],
    "answer": 0
  },
  {
    "text": "in an election between the two candidates , the candidates who gets 60 % of votes polled is winned by 280 votes majority . what is the total number of votes polled ?",
    "options": ["1400", "1600", "1800", "2000"],
    "answer": 0
  },
  {
    "text": "the height of a cylinder is 60 cm and the diameter of its base is 5 cm . the total surface area of the cylinder is",
    "options": ["918.14", "981.41", "982.14", "928.41"],
    "answer": 2
  },
  {
    "text": "what will be the compound interest on rs . 25000 a \u014d er 3 years at the rate of 12 % per annum",
    "options": ["rs 10123.20", "rs 10123.30", "rs 10123.40", "rs 10123.50"],
    "answer": 0
  },
  {
    "text": "a batsman scores 26 runs and increases his average from 14 to 15 . find the runs to be made if he wants top increasing the average to 19 in the same match ?",
    "options": ["12", "18", "25", "74"],
    "answer": 3
  },
  {
    "text": "a total of 520 players participated in a single tennis knock out tournament . what is the total number of matches played in the tournament ? ( knockout means if a player loses , he is out of the tournament ) . no match ends in a tie .",
    "options": ["511", "519", "256", "255"],
    "answer": 1
  },
  {
    "text": "solving a linear equation with several occurrences of the variable , solve for w . simplify answer as much as possible . ( 7 w + 6 ) / 6 + ( 9 w + 8 ) / 2 = 22",
    "options": ["1", "2", "3", "4"],
    "answer": 2
  },
  {
    "text": "the average age of 36 students in a group is 14 years . when teacher ' s age is included to it , the average increases by one . find out the teacher ' s age in years ?",
    "options": ["50", "49", "53", "54"],
    "answer": 4
  },
  {
    "text": "a is 1.5 times as fast as b . a alone can do the work in 20 days . if a and b working together , in how many days will the work be completed ?",
    "options": ["23", "22", "12", "24"],
    "answer": 2
  },
  {
    "text": "if a = 1 , what is the value of \u2013 ( a ^ 2 + a ^ 3 + a ^ 4 + a ^ 5 ) ?",
    "options": ["- 14", "- 4", "0", "4"],
    "answer": 1
  },
  {
    "text": "an astronomer noted that a grouping of red giant stars had an average solar mass of 8 m each , and a grouping of white dwarf stars had an average solar mass of 1.5 m each . if the astronomer calculated the total solar mass of both groupings to be 49 m , what total number of red giant stars and white dwarf stars did the astronomer note ?",
    "options": ["10", "11", "12", "13"],
    "answer": 1
  },
  {
    "text": "village a \u2019 s population is 300 greater than village b ' s population . if village b \u2019 s population were reduced by 600 people , then village a \u2019 s population would be 4 times as large as village b ' s population . what is village b ' s current population ?",
    "options": ["900", "1000", "1100", "1200"],
    "answer": 0
  },
  {
    "text": "6 students wrote science exam . their average marks are 70 . 5 students got 65 , 75 , 55 , 72 and 69 marks respectively . therefore what is the marks of the sixth student ?",
    "options": ["84", "68", "85", "75"],
    "answer": 0
  },
  {
    "text": "the sum of 7 th and 23 rd term of a . p . is equal to the sum of 8 th , 15 th and 13 th term . find the term which is 0",
    "options": ["6", "8", "10", "12"],
    "answer": 0
  },
  {
    "text": "what is the perimeter of a rectangular field whose diagonal is 5 m and length is 4 m ?",
    "options": ["20 m", "15 m", "14 m", "10 m"],
    "answer": 2
  },
  {
    "text": "coconuts were purchased at 150 per 100 and sold at 2 per coconut . if 2000 coconuts were sold , what was the total profit made ?",
    "options": ["500", "1000", "1500", "2000"],
    "answer": 1
  },
  {
    "text": "what is the factorial of 5 ?",
    "options": ["1", "60", "120", "130"],
    "answer": 2
  },
  {
    "text": "when working alone , painter w can paint a room in 2 hours , and working alone , painter x can paint the same room in e hours . when the two painters work together and independently , they can paint the room in 3 / 4 of an hour . what is the value of e ?",
    "options": ["3 / 4", "1 [ 1 / 5 ]", "1 [ 2 / 5 ]", "1 [ 3 / 4 ]"],
    "answer": 1
  },
  {
    "text": "the area of a parallelogram is 72 cm ^ 2 and its altitude is twice the corresponding base . what is the length of the base ?",
    "options": ["1 cm", "3 cm", "6 cm", "4 cm"],
    "answer": 2
  },
  {
    "text": "martin buys a pencil and a notebook for 80 cents . at the same store , gloria buys a notebook and an eraser for $ 1.15 cents , and zachary buys a pencil and an eraser for 75 cents . how many cents would it cost to buy 3 pencils , 3 notebooks , and 3 erasers ? ( assume that there is no volume discount . )",
    "options": ["325", "345", "365", "385"],
    "answer": 4
  },
  {
    "text": "if a fast song has 160 beats per minute , and a slow song has 90 beats per minute , how many minutes total would you play a fast and a slow song to have a stream of music that had a total of 1020 beats ?",
    "options": ["6", "7", "8", "9"],
    "answer": 3
  },
  {
    "text": "during the second quarter of 1984 , a total of 3 , 976000 domestic cars were sold . if this was 32 % greater than the number sold during the first quarter of 1984 , how many were sold during the first quarter ?",
    "options": ["714,240", "2 , 261,760", "2 , 400,000", "3 , 012,121"],
    "answer": 3
  },
  {
    "text": "a man covered a certain distance at some speed . had he moved 3 kmph faster , he would have taken 40 minutes less . if he had moved 2 kmph slower , he would have taken 40 minutes more . the distance ( in km ) is",
    "options": ["27", "87", "40", "18"],
    "answer": 2
  },
  {
    "text": "if the average of w , b , c , 14 and 15 is 12 . what is the average value of w , b , c and 29",
    "options": ["12", "13", "14", "15"],
    "answer": 3
  },
  {
    "text": "list a consists of 12 consecutive integers . if - 4 is the least integer in list a , what is the range of positive integers in list a ?",
    "options": ["5", "6", "7", "11"],
    "answer": 1
  },
  {
    "text": "convert 100 miles into inches ?",
    "options": ["6336000", "6542000", "5462300", "6213000"],
    "answer": 0
  },
  {
    "text": "a room 5 m 44 cm long and 3 m 74 cm broad needs to be paved with square tiles . what will be the least number of square tiles required to cover the floor ?",
    "options": ["176", "124", "224", "186"],
    "answer": 0
  },
  {
    "text": "the least number , which when divided by 12 , 15 , 20 and 54 leaves in each case a remainder of 8 , is :",
    "options": ["504", "536", "544", "548"],
    "answer": 3
  },
  {
    "text": "rhonda picked 2 pen from the table , if there were 7 pens on the table and 5 belongs to jill , what is the probability that the 2 pen she picked does not belong to jill ? .",
    "options": ["5 / 42", "2 / 42", "7 / 42", "2 / 7"],
    "answer": 1
  },
  {
    "text": "a merchant sells an item at a 20 % discount , but still makes a gross profit of 20 percent of the cost . what percent w of the cost would the gross profit on the item have been if it had been sold without the discount ?",
    "options": ["20 %", "40 %", "50 %", "60 %"],
    "answer": 2
  },
  {
    "text": "a number when divided by 4 , gives 40 as quotient and 0 as remainder . what will be the remainder when dividing the same number by 3",
    "options": ["1", "3", "4", "6"],
    "answer": 0
  },
  {
    "text": "the total surface area of a cuboid length 12 m , breadth 10 m and height 8 m .",
    "options": ["576", "566", "596", "556"],
    "answer": 2
  },
  {
    "text": "the radius of a cone is 4 m , height 5 m . find the curved surface area ?",
    "options": ["1", "3", "5", "7"],
    "answer": 2
  },
  {
    "text": "among the two clocks , clock a gains 20 seconds per minute . if clock a and b are set at 2 0 ' clock , when clock a is at 7 : 20 , what does clock b show ?",
    "options": ["5 : 30", "6 : 00", "5 : 45", "6 : 20"],
    "answer": 1
  },
  {
    "text": "source : knewton a cyclist ' s speed varies , depending on the terrain , between 6.0 miles per hour and 14.0 miles per hour , inclusive . what is the maximum distance , in miles , that the cyclist could travel in 5 hours ?",
    "options": ["42", "56", "70", "98"],
    "answer": 2
  },
  {
    "text": "the length of a rectangle is two - seventh of the radius of a circle . the radius of the circle is equal to the side of the square , whose area is 5929 sq . units . what is the area ( in sq . units ) of the rectangle if the rectangle if the breadth is 25 units ?",
    "options": ["660 sq . units", "440 sq . units", "770 sq . units", "550 sq . units"],
    "answer": 3
  },
  {
    "text": "the fuel indicator in a car shows 1 / 5 th of the fuel tank as full . when 22 more liters of fuel are poured in to the tank , the indicator rests at the 3 / 4 of the full mark . find the capacity of the tank .",
    "options": ["25 litres", "35 litres", "30 litres", "40 litres"],
    "answer": 3
  },
  {
    "text": "a rectangle with width 8 and diagonal 30 . find the area ?",
    "options": ["240 square units", "180 square units", "100 square units", "150 square units"],
    "answer": 0
  },
  {
    "text": "simplify : 250 x 250 - 100 x 100",
    "options": ["761200", "761400", "52500", "761500"],
    "answer": 2
  },
  {
    "text": "the length of each side of an equilateral triangle having an area of 4 \u00e2 \u02c6 \u0161 3 cm 2 is ?",
    "options": ["4 / 3 cm", "3 / 4 cm", "3 cm", "4 cm"],
    "answer": 3
  },
  {
    "text": "area of four walls of a room is 99 m 2 . the length and breadth of the room are 7.5 m and 3.5 m respectively . the height of the room is :",
    "options": ["2.5 m", "3.5 m", "1.5 m", "4.5 m"],
    "answer": 3
  },
  {
    "text": "if the mean of numbers 28 , x , 42 , 78 , 82 and 104 is 62 , then what is the mean of 128 , 255 , 511 , 1023 and x ?",
    "options": ["395", "275", "391", "415"],
    "answer": 2
  },
  {
    "text": "usc invited each south carolina high school to send up to 39 students to watch a football game . a section which has 199 seats in each row is reserved for those students . what is the least number of rows needed to guarantee that if 2006 students show up , then all students from the same high school can be seated in the same row ?",
    "options": ["11", "12", "13", "14"],
    "answer": 1
  },
  {
    "text": "a man cycles round the boundary of a rectangular park at the rate of 12 kmph and completes one full round in 8 minutes . if the ratio between the length and breadth of the park be 3 : 2 , then its area is :",
    "options": ["1536 m 2", "15360 m 2", "153600 m 2", "163600 m 2"],
    "answer": 2
  },
  {
    "text": "find the value of ( 875 233 / 899 ) \u00d7 899",
    "options": ["786845", "786857", "786858", "786859"],
    "answer": 2
  },
  {
    "text": "a department of 10 people - 6 men and 4 women - needs to send a team of 5 to a conference . if they want to make sure that there are no more than 3 members of the team from any one gender , how many distinct groups are possible to send ?",
    "options": ["120", "150", "180", "210"],
    "answer": 2
  },
  {
    "text": "forks , spoons , and knives in drawer are in the ratio of 4 : 4 : 3 . if there are 16 forks , the number of knives in the drawer is :",
    "options": ["8", "4", "12", "16"],
    "answer": 2
  },
  {
    "text": "what is the smallest positive integer x such that 450 x is the cube of a positive integer ?",
    "options": ["2", "15", "30", "60"],
    "answer": 2
  },
  {
    "text": "if two dice are thrown together , the probability of getting a doublet on the dice is",
    "options": ["1 / 6", "1 / 5", "1 / 4", "1 / 3"],
    "answer": 0
  },
  {
    "text": "it takes 10 days for digging a trench of 100 m long , 50 m broad and 10 m deep . what length of trench , 25 m broad and 15 m deep can be dug in 30 days ?",
    "options": ["400 m", "200 m", "100 m", "89 m"],
    "answer": 0
  },
  {
    "text": "if the price of a certain computer increased 30 percent from a dollars to 351 dollars , then 2 a =",
    "options": ["540", "570", "619", "649"],
    "answer": 0
  },
  {
    "text": "in a certain large company , the ratio of college graduates with a graduate degree to non - college graduates is 1 : 8 , and ratio of college graduates without a graduate degree to non - college graduates is 2 : 3 . if one picks a random college graduate at this large company , what is the probability w this college graduate has a graduate degree ?",
    "options": ["1 / 11", "1 / 12", "1 / 13", "3 / 19"],
    "answer": 3
  },
  {
    "text": "a bucket full of nuts was discovered by the crow living in the basement . the crow eats a sixth of the total number of nuts in 4 hours . how many hours i total will it take the crow to finish a quarter of the nuts ?",
    "options": ["6", "8", "10", "12"],
    "answer": 0
  },
  {
    "text": "a and b can finish a work together in 12 days , and b and c together in 16 days . if a alone works for 5 days and then b alone continues for 7 days , then remaining work is done by c in 13 days . in how many days can c alone finish the complete work ?",
    "options": ["22 days", "21 days", "25 days", "24 days"],
    "answer": 3
  },
  {
    "text": "the ages of two person , differ by 20 years . if 5 years ag , the elder one be 5 times as old as the younger one their present ages ( in years ) are respectively",
    "options": ["30 , 10", "2010", "3515", "5117"],
    "answer": 0
  },
  {
    "text": "the price of stock increased by 8 % last year and decreased by 6 % this year . what is the net percentage change in the price of the stock ?",
    "options": ["0.2 %", "0.8 %", "1.2 %", "1.52 %"],
    "answer": 3
  },
  {
    "text": "boys and girls in a class are writing letters . there are twice as many girls as boys in the class , and each girl writes 3 more letters than each boy . if boys write 24 of the 90 total letters written by the class , how many letters does each boy write ?",
    "options": ["3", "4", "6", "8"],
    "answer": 3
  },
  {
    "text": "a man walking at the rate of 5 km / hr crosses a bridge in 15 minutes . the length of the bridge ( in meters ) is :",
    "options": ["600", "750", "1000", "1250"],
    "answer": 3
  },
  {
    "text": "23 , 29 , 31 , 37 , 41 , 43 , 47 , 53 , 59 , 61 , ( . . . )",
    "options": ["53", "67", "48", "59"],
    "answer": 1
  },
  {
    "text": "adam borrowed some money at the rate of 6 % p . a . for the first two years , at the rate of 9 % p . a . for the next 3 years , and at the rate of 14 % p . a . for the period beyond 4 years . if he pays a total interest of 11900 at the end of 9 years , how much money did he borrow ?",
    "options": ["10,526", "12,526", "14,000", "16,000"],
    "answer": 1
  },
  {
    "text": "the two trains of lengths 400 m , 600 m respectively , running at same directions . the faster train can cross the slower train in 180 sec , the speed of the slower train is 48 km . then find the speed of the faster train ?",
    "options": ["76 kmph", "68 kmph", "87 kmph", "56 kmph"],
    "answer": 1
  },
  {
    "text": "surface area of two spheres are in the ratio 1 : 4 what is the ratio of their volumes ?",
    "options": ["1 : 9", "1 : 8", "1 : 3", "1 : 4"],
    "answer": 1
  },
  {
    "text": "two unbiased coins are tossed . what is the probability of getting at most one head ?",
    "options": ["2 / 3", "1", "3 / 4", "2"],
    "answer": 2
  },
  {
    "text": "the compound interest on a sum for 2 years is rs . 832 and the simple interest on the same sum for the same period is rs . 800 . the difference between the compound and simple interest for 3 years will be",
    "options": ["rs . 48", "rs . 98.56", "rs . 66.56", "rs . 66.58"],
    "answer": 1
  },
  {
    "text": "if a * b = 2 a - 3 b + ab , then 3 * 5 + 5 * 3 is equal to",
    "options": ["22", "25", "26", "28"],
    "answer": 0
  },
  {
    "text": "if 25 ^ 5 \u00d7 5 ^ ( - 1 ) = ( 125 ) ^ x , then what is the value of x ?",
    "options": ["2", "3", "4", "5"],
    "answer": 1
  },
  {
    "text": "a lady starts from p towards q and realizes that at a point r , if he walks 50 km further he will be at a point s , which is as far away from r as it is from q . what is the distance between p and q if the distance between p and r is half the distance from r to q ? ( assume that p , q , r and s are all on the same straight line )",
    "options": ["150 km", "200 km", "250 km", "125 km"],
    "answer": 0
  },
  {
    "text": "the sum of two numbers is 528 and their h . c . f is 33 . the number of pairs of numbers satisfying the above condition is",
    "options": ["4", "5", "6", "7"],
    "answer": 0
  },
  {
    "text": "consider the sets tn = { n , n + 1 , n + 2 , n + 3 , n + 4 ) , where n = 1 , 2 , 3 , \u2026 , 96 . how many of these sets contain 6 or any integral multiple thereof ( i . e . , any one of the numbers 6 , 12 , 18 , \u2026 ) ?",
    "options": ["80", "81", "82", "83"],
    "answer": 0
  },
  {
    "text": "if a square mirror has a 20 - inch diagonal , what is the approximate perimeter t of the mirror , in inches ?",
    "options": ["40", "60", "80", "100"],
    "answer": 1
  },
  {
    "text": "the ratio of the two natural numbers is 5 : 6 . if a certain number is added to both the numbers , the ratio becomes 7 : 8 . if the larger number exceeds the smaller number by 10 , find the number added ?",
    "options": ["17", "14", "10", "16"],
    "answer": 2
  },
  {
    "text": "if the perimeter of a rectangular house is 1400 m , its length when its breadth is 300 m is ?",
    "options": ["300", "400", "500", "600"],
    "answer": 1
  },
  {
    "text": "last year the range of the annual bonus of the 100 employees at company x was $ 20000 . if the annual bonus of each of the 100 employees this year is 10 percent greater than it was last year , what is the range of the annual bonus of the 100 employees this year ?",
    "options": ["$ 27000", "$ 22000", "$ 33000", "$ 16000"],
    "answer": 1
  },
  {
    "text": "you have to send 3000 grapes 1000 kilometers from grapecity to appleland . your truck can carry 1000 grapes at a time . every time you travel a kilometer towards appleland you must pay a tax of 1 grape but you pay nothing when going in the other direction ( towards grapecity ) . what is highest number of grapes you can get to appleland ?",
    "options": ["833", "765", "665", "679"],
    "answer": 0
  },
  {
    "text": "niall ' s income is 60 % less than rex ' s income , and sam ' s income is 25 % less than niall ' s income . if rex gave 60 % of his income to sam and 40 % of his income to niall , niall ' s new income would be what fraction of sam ' s new income ?",
    "options": ["8 / 9", "11 / 12", "8 / 13", "11 / 13"],
    "answer": 0
  },
  {
    "text": "5 + 5",
    "options": ["9", "12", "20", "10"],
    "answer": 3
  },
  {
    "text": "a certain ball team has an equal number of right - and left - handed players . on a certain day , one - third of the players were absent from practice . of the players at practice that day , one - third were right handed . what is the ratio of the number of right - handed players who were not at practice that day to the number of left handed players who were not at practice ?",
    "options": ["1 / 3", "5 / 1", "5 / 7", "7 / 5"],
    "answer": 1
  },
  {
    "text": "a room is 30 m long and 24 m broad . if the sum of the areas of the floor and the ceiling is equal to the sum of the areas of four walls , the volume of the hall is :",
    "options": ["9.6 m 3", "96 m 3", "960 m 3", "9600 m 3"],
    "answer": 3
  },
  {
    "text": "find the smallest number which should be multiplied with 520 to make it a perfect square",
    "options": ["337", "297", "266", "116"],
    "answer": 4
  },
  {
    "text": "the price of a certain product increased by the same percent from 1960 to 1970 as from 1970 to 1980 . if its price of $ 1.20 in 1970 was 150 percent of its price in 1960 , what was its price in 1980 ?",
    "options": ["$ 1.80", "$ 2.00", "$ 2.40", "$ 2.70"],
    "answer": 0
  },
  {
    "text": "if c and t are positive integers , ct + c + t can not be",
    "options": ["5", "6", "7", "8"],
    "answer": 1
  },
  {
    "text": "what is the least common multiple of 15 , 22 and 24 ?",
    "options": ["60", "120", "240", "1320"],
    "answer": 3
  },
  {
    "text": "a team of 8 persons joins in a shooting competition . the best marksman scored 85 points . if he had scored 92 points , the average score for the team would have been 84 . the number of points , the team scored was :",
    "options": ["665", "376", "998", "1277"],
    "answer": 0
  },
  {
    "text": "a certain fruit stand sold apples for $ 0.70 each and guava for $ 0.50 each . if a customer purchased both apples and bananas from the stand for a total of $ 6.30 , what total number of apples and bananas did the customer purchase ?",
    "options": ["12", "13", "11", "14"],
    "answer": 2
  },
  {
    "text": "4 dice are thrown simultaneously on the board . find the probability which show the same face ?",
    "options": ["2 / 113", "3 / 117", "1 / 216", "3 / 111"],
    "answer": 2
  },
  {
    "text": "tough and tricky questions : word problems . operation # is defined as : a # b = 4 a ^ 2 + 4 b ^ 2 + 8 ab for all non - negative integers . what is the value of ( a + b ) + 8 , when a # b = 100 ?",
    "options": ["5", "8", "10", "13"],
    "answer": 3
  },
  {
    "text": "( 7 + 7 + 7 \u00f7 7 ) / ( 5 + 5 + 5 \u00f7 5 ) = ?",
    "options": ["1", "1 / 5", "15 / 11", "3 / 11"],
    "answer": 2
  },
  {
    "text": "what is the least possible value of x ^ 2 - 15 where x is a positive number .",
    "options": ["- 15", "- 14", "- 13", "- 12"],
    "answer": 1
  },
  {
    "text": "the surface area of a sphere is 4 \u03c0 r 2 , where r is the radius of the sphere . if the area of the base of a hemisphere is 3 , what is the surface area e of that hemisphere ?",
    "options": ["6 / \u03c0", "9 / \u03c0", "6", "9"],
    "answer": 3
  },
  {
    "text": "if n is a positive integer such that n ! / ( n - 2 ) ! = 342 , find n .",
    "options": ["17", "18", "19", "20"],
    "answer": 2
  },
  {
    "text": "a person has 100 $ in 10 $ and 5 $ bill . if the 5 $ bill quantity is twice that of 10 $ bill . what is quantity of 10 $ .",
    "options": ["2", "6", "7", "8"],
    "answer": 4
  },
  {
    "text": "eric throws 2 dice , and his score is the sum of the values shown . sandra throws one dice and her score is the square of the value shown . what is the probabilty that sandras score will be strictly higher than erics score ? ?",
    "options": ["137 / 216", "137 / 218", "137 / 217", "136 / 216"],
    "answer": 0
  },
  {
    "text": "recently , i decided to walk down an escalator of a tube station . i did some quick calculation in my mind . i found that if i walk down 20 ` ` 6 steps , i require thirty seconds to reach the bottom . however , if i am able to step down thirty ` ` 4 stairs , i would only require eighteen seconds to get to the bottom . if the time is measured from the moment the top step begins to descend to the time i step off the last step at the bottom ?",
    "options": ["43", "44", "45", "40"],
    "answer": 4
  },
  {
    "text": "find the volume and surface area of a cuboid 16 m long , 14 m broad and 7 m high .",
    "options": ["878 cm ^ 2", "858 cm ^ 2", "838 cm ^ 2", "868 cm ^ 2"],
    "answer": 3
  },
  {
    "text": "3 - twentieths of the members of a social club are retirees who are also bridge players , 5 - twentieths of the members are retirees , and one - half of the members are bridge players . if 120 of the members are neither retirees nor bridge players , what is the total number of members in the social club ?",
    "options": ["240", "300", "200", "400"],
    "answer": 2
  },
  {
    "text": "there are 13 clubs in a full deck of 52 cards . in a certain game , you pick a card from a standard deck of 52 cards . if the card is a club , you win . if the card is not a club , the person replaces the card to the deck , reshuffles , and draws again . the person keeps repeating that process until he picks a club , and the point is to measure how many draws it took before the person picked a club and , thereby , won . what is the probability that one will pick the first club on the forth draw or later ?",
    "options": ["1 / 2", "3 / 4", "7 / 8", "27 / 32"],
    "answer": 4
  },
  {
    "text": "a certain characteristic in a large population has a distribution that is symmetric about the mean m . if 68 percent of the distribution lies within one standard deviation d of the mean , what percent e of the distribution is less than m + d ?",
    "options": ["16 %", "32 %", "48 %", "84 %"],
    "answer": 3
  },
  {
    "text": "an electric pump can fill a tank in 3 hours . because of a leak in the tank , it took 3 hours 30 min to fill the tank . in what time the leak can drain out all the water of the tank and will make tank empty ?",
    "options": ["10 hours", "13 hours", "17 hours", "21 hours"],
    "answer": 3
  },
  {
    "text": "together , 15 type a machines and 7 type b machines can complete a certain job in 4 hours . together 8 type b machines and 15 type c machines can complete the same job in 11 hours . how many hours e would it take one type a machine , one type b machine , and one type c machine working together to complete the job ( assuming constant rates for each machine ) ?",
    "options": ["22 hours", "30 hours", "44 hours", "60 hours"],
    "answer": 2
  },
  {
    "text": "ramesh has solved 108 questions in an examination . if he got only \u2018 0 \u2019 marks , then how many questions were wrong when one mark is given for each one correct answer and 1 / 3 mark is subtracted on each wrong answer .",
    "options": ["78", "79", "80", "81"],
    "answer": 3
  },
  {
    "text": "what is the measure of the angle x made by the diagonals of the any adjacent sides of a cube .",
    "options": ["30", "45", "60", "75"],
    "answer": 2
  },
  {
    "text": "the simple interest in 14 months on a certain sum at the rate of 6 per cent per annum is 250 more than the interest on the same sum at the rate of 8 per cent in 8 months . how much amount was borrowed ?",
    "options": ["15000", "25000", "7500", "14500"],
    "answer": 0
  },
  {
    "text": "rakesh ' s mathematics test had 75 problems , 10 arithmetic , 30 algebra , 35 geometry problems . although he answered 70 % of arithmetic , 40 % of arithmetic and 60 % of geometry problems correctly , still he got less than 60 % problems right . how many more questions he would have to answer more to get passed ?",
    "options": ["5", "6", "7", "8"],
    "answer": 0
  },
  {
    "text": "one day , connie plays a game with a fair 6 - sided die . connie rolls the die until she rolls a 6 , at which point the game ends . if she rolls a 6 on her first turn , connie wins 6 dollars . for each subsequent turn , connie wins 1 6 of the amount she would have won the previous turn . what is connie ' s expected earnings from the game ?",
    "options": ["32 / 31", "33 / 31", "34 / 31", "36 / 31"],
    "answer": 3
  },
  {
    "text": "a man walking at 3 / 4 th of the speed , reaches his office late by 2 hours . what is the usual time ?",
    "options": ["5 hours", "3 hours", "6 hours", "12 hours"],
    "answer": 2
  },
  {
    "text": "given a + b = 1 , find the value of 2 a + 2 b . two solutions are presented below . only one is correct , even though both yield the correct answer .",
    "options": ["3", "5", "4", "2"],
    "answer": 3
  },
  {
    "text": "in a garden , there are 10 rows and 12 columns of mango trees . the distance between the two trees is 2 metres and a distance of four metre is left from all sides of the boundary of the garden . what is the length of the garden ?",
    "options": ["22", "24", "26", "28"],
    "answer": 4
  },
  {
    "text": "the averge score of a cricketer for 10 matches is 45 runs . if the average for the first 6 matches is 48 . then find the average for the last 4 matches ?",
    "options": ["43.25", "43", "38", "40.5"],
    "answer": 3
  },
  {
    "text": "simplify : 256 x 256 - 144 x 144",
    "options": ["761200", "44800", "761800", "761500"],
    "answer": 1
  },
  {
    "text": "how many bricks , each measuring 25 cm * 11.25 cm * 6 cm , will be needed to build a wall 8 m * 6 m * 22.5 m",
    "options": ["6400", "3777", "2679", "2667"],
    "answer": 0
  },
  {
    "text": "a farm has chickens , cows and sheep . there are 6 times the number of chickens and cows than sheep . if there are more cows than chickens or sheep , and together , cows and chickens have a total of 100 feet and heads , how many sheep live at the farm ?",
    "options": ["5", "8", "10", "4"],
    "answer": 3
  },
  {
    "text": "thirty percent of the members of a swim club have passed the lifesaving test . among the members who have not passed the test , 26 have taken the preparatory course and 65 have not taken the course . how many members are there in the swim club ?",
    "options": ["60", "80", "100", "130"],
    "answer": 3
  },
  {
    "text": "if a population of women in a town is 50 % of men . what is the population of men as a percentage of population of women ?",
    "options": ["100 %", "120 %", "200 %", "150 %"],
    "answer": 2
  },
  {
    "text": "in an examination , the percentage of students qualified to the students appeared from school ' p ' is 70 % . in school ' q ' , the number of students appeared is 30 % more than the students appeared from school ' p ' and the number of students qualified from school ' q ' is 50 % more than the students qualified from school ' p ' . what is the % of students qualified to the number of students appeared from school ' q ' ?",
    "options": ["80.78 %", "80.76 %", "80.72 %", "80.79 %"],
    "answer": 1
  },
  {
    "text": "in a shop , the profit is 320 % of the cost . if the cost increases by 25 % but the selling price remains constant , find out approximately what percentage of the selling price is the profit ?",
    "options": ["180 %", "120 %", "90 %", "80 %"],
    "answer": 4
  },
  {
    "text": "if log 8 x + log 8 1 / 6 = 1 / 3 , then the value of x is :",
    "options": ["12", "16", "18", "24"],
    "answer": 0
  },
  {
    "text": "find the sum of first 20 multiples of 12 .",
    "options": ["2520", "3878", "2778", "27"],
    "answer": 0
  },
  {
    "text": "if a certain coin is flipped , the probability that the coin will land heads is 1 / 2 . if the coin is flipped 5 times , what is the probability that it will land heads up on the first 3 flips and not on the last 2 flips ?",
    "options": ["3 / 5", "1 / 2", "1 / 5", "1 / 8"],
    "answer": 4
  },
  {
    "text": "a piece of work can finish by a certain number of men in 100 days . if however , there were 10 men less , it would take 10 days more for the work to be finished . how many men were there originally ?",
    "options": ["75", "82", "100", "110"],
    "answer": 3
  },
  {
    "text": "a square is drawn inside a right - angled triangle with the two perpendicular sides as 12 cm and 8 cm . what is the side of the largest possible square that can be drawn ?",
    "options": ["4.8 cm", "4.4 cm", "4.9 cm", "5.0 cm"],
    "answer": 0
  },
  {
    "text": "the membership of a committee consists of 3 english teachers , 4 mathematics teachers , and 2 social studies teachers . if 2 committee members are to be selected at random to write the committee \u2019 s report , what is the probability that the two members selected will both be social teachers ?",
    "options": ["2 / 3", "1 / 12", "2 / 9", "1 / 2"],
    "answer": 1
  },
  {
    "text": "by how much is 70 % of 120 greater than 35 % of 200 .",
    "options": ["15", "14", "13", "16"],
    "answer": 1
  },
  {
    "text": "the cyclist going at a constant rate of 18 miles per hour is passed by a motor - cyclist traveling in the same direction along the same path at 48 miles per hour . the motor - cyclist stops to wait for the cyclist 15 minutes after passing cyclist , while the cyclist continues to travel at constant rate , how many minutes must the motor - cyclist wait until the cyclist catches up ?",
    "options": ["25", "30", "35", "40"],
    "answer": 0
  },
  {
    "text": "the squared value of the diagonal of a rectangle is ( 64 + b 2 ) sq cm , where b is less than 8 cm . what is the breadth of that rectangle ?",
    "options": ["6 cm", "10 cm", "8 cm", "data inadequate"],
    "answer": 0
  },
  {
    "text": "in a certain game , a large container is filled with red , yellow , green , and blue beads worth , respectively , 7 , 5 , 3 , and 2 points each . a number of beads are then removed from the container . if the product of the point values of the removed beads is 30 , 870000 , how many red beads were removed ?",
    "options": ["1", "2", "3", "4"],
    "answer": 2
  },
  {
    "text": "# 88 a necklace is made by stringing q no individual beads together in the repeating pattern red bead , green bead , white bead , blue bead , and yellow bead . if the necklace design begins with a red bead and ends with a white bead , then q could equal",
    "options": ["16", "28", "41", "54"],
    "answer": 1
  },
  {
    "text": "you need to pick any number from ' 1 , 3 , 5 , 7 , 9 , 11 , 13 and 15 ' to make below equation true . ( ) + ( ) + ( ) = 30 can you solve it ?",
    "options": ["29", "30", "31", "32"],
    "answer": 1
  },
  {
    "text": "ram and shyam start a two - length swimming race at the same moment but from opposite ends of the pool . they swim in lanes at uniform speeds , but hardy is faster than andy . they 1 st pass at a point 18.5 m from the deep end and having completed one length each 1 is allowed to rest on the edge for exactly 45 sec . after setting off on the return length , the swimmers pass for the 2 nd time just 10.5 m from the shallow end . how long is the pool ?",
    "options": ["65", "60", "55", "50"],
    "answer": 4
  },
  {
    "text": "little john had $ 8.50 . he spent $ 1.25 on sweets and gave to his two friends $ 1.20 and $ 2.20 . how much money was left ?",
    "options": ["$ 5.85", "$ 6.85", "$ 3.85", "$ 2.85"],
    "answer": 2
  },
  {
    "text": "the speed of a bus increases by 2 kmph after every one hour . if the distance travelled in the first one hour was 35 km , what was the total distance travelled in 12 hours ?",
    "options": ["550", "500", "552", "560"],
    "answer": 2
  },
  {
    "text": "it will take 16 days for mary to complete a certain task alone . she worked for 8 days before she was joined by her sister . both of them completed the remaining task in 2 and half days . if her sister had joined her when she started the task , how many days would it have taken ?",
    "options": ["6", "8", "2", "5"],
    "answer": 3
  },
  {
    "text": "shruti purchased several number of 3 articles p , q and r in the proportion 3 : 2 : 3 . if the unit costs of the articles p , q and r are 200 , rs . 90 and rs . 60 respectively , how many articles of q must have been purchased in the total purchases of rs . 4800 ?",
    "options": ["8", "10", "12", "14"],
    "answer": 1
  },
  {
    "text": "the l . c . m of two numbers is 48 . the numbers are in the ratio 2 : 3 . the sum of numbers is ?",
    "options": ["22", "67", "40", "88"],
    "answer": 2
  },
  {
    "text": "a and b together do a work in 20 days . b and c together in 15 days and c and a in 12 days . so a , b and c together finish same work in how many days ?",
    "options": ["12", "15", "8", "10"],
    "answer": 3
  },
  {
    "text": "the average weight of a class of 24 students is 35 kg . if the weight of the teacher be included , the average rises by 400 g . the weight of the teacher is :",
    "options": ["45", "46", "47", "48"],
    "answer": 0
  },
  {
    "text": "a and b are two circles . the radius of a is four times as large as the diameter of b . what is the ratio between the areas of the circles ?",
    "options": ["1 : 8 .", "1 : 2 .", "1 : 24 .", "1 : 64 ."],
    "answer": 3
  },
  {
    "text": "in a garden , there are 12 rows and 14 columns of mango trees . the distance between two trees is 2 metres and a distance of one metre is left from all sides of the boundary of the garden . the length of the garden is",
    "options": ["20 m", "22 m", "24 m", "26 m"],
    "answer": 3
  },
  {
    "text": "a is 30 % more efficient than b . how much time they will working together take to complete a job which a alone could have done in 23 days ?",
    "options": ["25 days", "13 days", "14 days", "20 days"],
    "answer": 1
  },
  {
    "text": "two trains are moving in the same direction at 72 kmph and 36 kmph . the faster train crosses a girl sitting at window seat in the slower train in 32 seconds . find the length of the faster train ?",
    "options": ["170 m", "100 m", "270 m", "320 m"],
    "answer": 3
  },
  {
    "text": "tough and tricky questions : combinations . 8 contestants representing 4 different countries advance to the finals of a fencing championship . assuming all competitors have an equal chance of winning , how many possibilities are there with respect to how a first - place and second - place medal can be awarded ?",
    "options": ["6", "7", "12", "16"],
    "answer": 4
  },
  {
    "text": "a sum of rs . 100 is lent at simple interest of 3 % p . a . for the first month , 9 % p . a . for the second month , 27 % p . a . for the third month and so on . what is the total amount of interest earned at the end of the year approximately",
    "options": ["rs . 797160", "rs . 791160", "rs . 65930", "rs . 66430"],
    "answer": 3
  },
  {
    "text": "suppose you have three identical prisms with congruent equilateral triangles as the end - polygons . suppose you attach them by the rectangular faces so they are perfectly aligned . there will be some large faces created by two or more co - planar faces of the individual prisms : count each such large face as one . given that , how many faces does the resultant solid have ?",
    "options": ["4", "6", "9", "10"],
    "answer": 1
  },
  {
    "text": "the side of a square has the length of 6 . what is the area of the region shaded ?",
    "options": ["48 - 8 \u03c0", "48 - 6 \u03c0", "24 + 6 \u03c0", "16 + 8 \u03c0"],
    "answer": 1
  },
  {
    "text": "monica planned her birthday party . she prepared 5 muffins for each of her guests and kept aside two additional muffins in case someone will want extra . after the party , it turned out that one of the guests did n ' t come but every one of the guests that did come ate 6 muffins and 6 muffins remained . how many guests did monica plan on ?",
    "options": ["2 .", "4 .", "5 .", "6 ."],
    "answer": 0
  },
  {
    "text": "a boy rides his bicycle 10 km at an average speed of 12 km / hr and again travels 12 km at an average speed of 10 km / hr . his average speed for the entire trip is approximately ?",
    "options": ["10.7 km / hr", "10.8 km / hr", "17.8 km / hr", "10.5 km / hr"],
    "answer": 1
  },
  {
    "text": "if 3 ^ x = 2 , then 3 ^ ( 4 x + 3 ) =",
    "options": ["429", "454", "432", "438"],
    "answer": 2
  },
  {
    "text": "a dishonest dealer professes to sell goods at the cost price but uses a false weight and gains 25 % . find his false weight age ?",
    "options": ["338", "278", "800", "269"],
    "answer": 2
  },
  {
    "text": "the length of a train and that of a platform are equal . if with a speed of 90 kmph the train crosses the platform in one minute , then the length of the train in metres is",
    "options": ["500", "600", "750", "900"],
    "answer": 3
  },
  {
    "text": "company a imported 10,500 widgets made of either brass or aluminum . the widgets are painted blue , red or green . if 10 percent of the widgets are made of brass and of those 20 percent are painted red and 40 percent are painted blue how many brass widgets painted green were imported ?",
    "options": ["480", "840", "1050", "420"],
    "answer": 3
  },
  {
    "text": "one side of a rectangular field is 15 m and one of its diagonals is 17 m . find the area of the field .",
    "options": ["120", "147", "251", "451"],
    "answer": 0
  },
  {
    "text": "a certain quantity is measured on two different scales , the t - scale and the s - scale , that are related linearly . measurements on the t - scale of 6 and 24 correspond to measurements on the s - scale of 30 and 60 , respectively . what measurement on the t - scale corresponds to a measurement of 100 on the s - scale ?",
    "options": ["20", "36", "48", "60"],
    "answer": 2
  },
  {
    "text": "the sum of two numbers is 184 . if one - third of the one exceeds one - seventh of the other by 8 , find the smaller number .",
    "options": ["72", "64", "84", "12"],
    "answer": 0
  },
  {
    "text": "when n divided by 3 , the remainder is 2 . when n divided by 4 , the remainder is 1 what is the the remainder when divided by 16",
    "options": ["1", "3", "4", "5"],
    "answer": 0
  },
  {
    "text": "if an object travels at 8 feet per second , how many feet does it travel in forty five minutes ?",
    "options": ["18000", "24000", "21600", "18000"],
    "answer": 2
  },
  {
    "text": "in arun \u2019 s opinion , his weight is greater than 65 kg but less than 72 kg . his brother doest not agree with arun and he thinks that arun \u2019 s weight is greater than 60 kg but less than 70 kg . his mother \u2019 s view is that his weight can not be greater than 68 kg . if all are them are correct in their estimation , what is the average of different probable weights of arun ?",
    "options": ["66 kg", "67 kg", "68 kg", "69 kg"],
    "answer": 1
  },
  {
    "text": "robert left from a pvt company . management hold his salary rs . 15000 / - for one month . earlier robert borrowed rs . 7280 / - from company . but robert forget that . after one month robert asked his salary and accountant gives rs . 18500 / - to him . what is the incentive amount given to robert ?",
    "options": ["9500", "12500", "10780", "10500"],
    "answer": 2
  },
  {
    "text": "ramu rides his bike at an average speed of 45 km / hr and reaches his desitination in 4 hours . somu covers the same distance in 6 hours . if ramu covered his journey at an average speed which was 9 km / hr less and somu covered his journey at an average speed which was 10 km / hr more , then the difference in their times taken to reach the destination would be ( in minutes ) .",
    "options": ["23 minutes", "30 minutes", "43 minutes", "23 minutes"],
    "answer": 1
  },
  {
    "text": "if \u00e2 \u20ac \u0153 * \u00e2 \u20ac \u009d is called \u00e2 \u20ac \u0153 + \u00e2 \u20ac \u009d , \u00e2 \u20ac \u0153 / \u00e2 \u20ac \u009d is called \u00e2 \u20ac \u0153 * \u00e2 \u20ac \u009d , \u00e2 \u20ac \u0153 - \u00e2 \u20ac \u009d is called \u00e2 \u20ac \u0153 / \u00e2 \u20ac \u009d , \u00e2 \u20ac \u0153 + \u00e2 \u20ac \u009d is called \u00e2 \u20ac \u0153 - \u00e2 \u20ac \u009d . 240 * 80 / 60 + 40 / 10 = ?",
    "options": ["- 2305", "- 2407", "2509", "- 2101"],
    "answer": 1
  },
  {
    "text": "in a certain game , each player scores either 2 points or 5 points . if n players score 2 points and m players score 5 points , and the total number of points scored is 50 , what is the least possible positive r difference between n and m ?",
    "options": ["1", "3", "5", "7"],
    "answer": 1
  },
  {
    "text": "if shreehari walks in the speed of 4.5 km / hr from his house , in what time will he reach his school which is 750 m long from his house ?",
    "options": ["5", "30", "10", "12"],
    "answer": 2
  },
  {
    "text": "a library has an average of 510 visitors on sunday and 240 on other days . the average number of visitors per day in a month of 30 days beginning with a sunday is",
    "options": ["250", "276", "280", "285"],
    "answer": 3
  },
  {
    "text": "7 m - 20 = 2 m , then m + 7 is equal to ?",
    "options": ["9", "10", "11", "12"],
    "answer": 2
  },
  {
    "text": "which is greater than 16",
    "options": ["1.6", "66", "6", "- 6"],
    "answer": 1
  },
  {
    "text": "two 100 multiples of 7 are chosen at random , and 300 multiples of 8 are chosen at random . approximately what percentage of the 500 selected numbers are odd ?",
    "options": ["20 %", "25 %", "40 %", "50 %"],
    "answer": 0
  },
  {
    "text": "j is 25 % less than p and 20 % less than t . t is x % less than p . what is the value of x ?",
    "options": ["93.5", "90", "6.75", "6.25"],
    "answer": 3
  },
  {
    "text": "denise is trying to open a safe whose combination she does not know . if the safe has 4000 possible combinations , and she can try 75 different possibilities , what is the probability that she does not pick the one correct combination .",
    "options": ["1", "159 / 160", "157 / 160", "4 3 / 160"],
    "answer": 2
  },
  {
    "text": "what percent is 36 paisa ' s of 12 rupees ?",
    "options": ["2 %", "3 %", "4 %", "5 %"],
    "answer": 1
  },
  {
    "text": "in a market , a dozen eggs cost as much as a pound of rice , and a half - liter of kerosene costs as much as 8 eggs . if the cost of each pound of rice is $ 0.33 , then how many q cents does a liter of kerosene cost ? [ one dollar has 100 cents . ]",
    "options": ["0.33", "0.44", "0.55", "44"],
    "answer": 3
  },
  {
    "text": "two spheres of their radios in the ratio 4 : 3 . find its volumes ratio ?",
    "options": ["64 : 13", "13 : 64", "27 : 64", "64 : 27"],
    "answer": 3
  },
  {
    "text": "bhaman travelled for 15 hours . he covered the first half of the distance at 40 kmph and remaining half of the distance at 10 kmph . find the distance travelled by bhaman ?",
    "options": ["240", "230", "260", "220"],
    "answer": 0
  },
  {
    "text": "three pipes of same capacity can fill a tank in 8 hours . if there are only two pipes of same capacity , the tank can be filled in .",
    "options": ["11 hours", "12 hours", "15 hours", "16 hours"],
    "answer": 1
  },
  {
    "text": "calculate the number of bricks , each measuring 25 cm x 15 cm x 8 cm required to construct a wall of dimensions 10 m x 4 cm x 6 m when 10 % of its volume is occupied by mortar ?",
    "options": ["720", "600", "660", "6000"],
    "answer": 0
  },
  {
    "text": "if the side length of square b is three times that of square a , the area of square b is how many times the area of square a ?",
    "options": ["9", "8", "6", "3"],
    "answer": 0
  },
  {
    "text": "the lcm and hcf of two numbers are 8 and 48 respectively . if one of them is 24 , find the other ?",
    "options": ["12", "14", "15", "16"],
    "answer": 3
  },
  {
    "text": "in a party every person shakes hands with every other person . if there are 105 hands shakes , find the number of person in the party .",
    "options": ["14", "12", "13", "15"],
    "answer": 3
  },
  {
    "text": "a lawn is in the form of a rectangle having its sides in the ratio 2 : 3 . the area of the lawn is ( 1 / 6 ) hectares . find the length and breadth of the lawn .",
    "options": ["50", "30", "20", "40"],
    "answer": 0
  },
  {
    "text": "3 years ago , the average age of a , b and c was 27 years and that of b and c 5 years ago was 20 years . a \u2019 s present age is :",
    "options": ["22", "88", "40", "87"],
    "answer": 2
  },
  {
    "text": "a is thrice as good as workman as b and therefore is able to finish a job in 60 days less than b . working together , they can do it in :",
    "options": ["20 days", "22 1 / 2 days", "24 days", "25 days"],
    "answer": 1
  },
  {
    "text": "what is the difference between the largest number and the least number written with the figures 3 , 4 , 7 , 0 , 3 ?",
    "options": ["70983", "43893", "43983", "43883"],
    "answer": 2
  },
  {
    "text": "the average of 5 consecutive even numbers a , b , c , d and e is 20 . what percent of e is d ?",
    "options": ["90.1", "91.7", "97.1", "101.1"],
    "answer": 1
  },
  {
    "text": "a couple who own an appliance store discover that if they advertise a sales discount of 10 % on every item in the store , at the end of one month the number of total items sold increases 10 % . their gross income from sales for one month decreases by what percent ?",
    "options": ["1 %", "3 %", "5 %", "7 %"],
    "answer": 0
  },
  {
    "text": "on a certain day , orangeade was made by mixing a certain amount of orange juice with an equal amount of water . on the next day , orangeade was made by mixing the same amount of orange juice with twice the amount of water . on both days , all the orangeade that was made was sold . if the revenue from selling the orangeade was the same for both days and if the orangeade was sold at $ 0.60 per glass on the first day , what was the price per f glass on the second day ?",
    "options": ["$ 015", "$ 0.20", "$ 0.30", "$ 0.40"],
    "answer": 3
  },
  {
    "text": "assume all pieces of rope are equal . if 44 pieces of rope measure a feet , how long would b pieces of rope be in inches ?",
    "options": ["44 / ab", "11 / 3 ab", "6 / 11 ab", "ab / 44"],
    "answer": 4
  },
  {
    "text": "18800 / 470 / 20",
    "options": ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "text": "in the seaside summer camp there are 50 children . 90 % of the children are boys and the rest are girls . the camp administrator decided to make the number of girls only 5 % of the total number of children in the camp . how many more boys must she bring to make that happen ?",
    "options": ["50 .", "45 .", "40 .", "30 ."],
    "answer": 0
  },
  {
    "text": "the average price of 3 items of furniture is rs . 15000 . if their prices are in the ratio 2 : 4 : 8 , the price of the cheapest item is ?",
    "options": ["2379", "2889", "5625", "9000"],
    "answer": 2
  },
  {
    "text": "in a group of 15 people , 8 read english , 7 read french while 3 of them read none of these two . how many of them read french and english both ?",
    "options": ["2", "3", "4", "7"],
    "answer": 1
  },
  {
    "text": "miller street begins at baker street and runs directly east for 4.5 kilometers until it ends when it meets turner street . miller street is intersected every 250 meters by a perpendicular street , and each of those streets other than baker street and turner street is given a number beginning at 1 st street ( one block east of baker street ) and continuing consecutively ( 2 nd street , 3 rd street , etc . . . ) until the highest - numbered street one block west of turner street . what is the highest - numbered street that intersects miller street ?",
    "options": ["15 th", "16 th", "17 th", "18 th"],
    "answer": 2
  },
  {
    "text": "the pressure someone experiences as he or she dives deeper and deeper in the ocean increases linearly . on the surface , the pressure is close to 15 pounds per square inch . 33 feet below the surface , the pressure is 30 pounds . if 25000 pounds per sq inch can crush your bones , what depth is extremely dangerous for humans ?",
    "options": ["55522 feet", "45522 feet", "35522 feet", "25522 feet"],
    "answer": 0
  },
  {
    "text": "in a class total 34 students , 16 are have a brother , 15 are have sisters , 9 students do n ' t have either brothers or sisters . find the number of students having both brother and sisters .",
    "options": ["4", "5", "6", "7"],
    "answer": 2
  },
  {
    "text": "two numbers are less than a third number by 40 % and 47 % respectively . how much per cent is the second number less than the first ?",
    "options": ["95 %", "88 %", "85 %", "90 %"],
    "answer": 1
  },
  {
    "text": "shahrukh starts from barabanki to fatehpur , 1 hour after ajay starts . shahrukh meets kajol 1.5 hours after shahrukh starts . if the speed of shahrukh is at least 20 km / h faster than the speed of kajol . what is the minimum speed of shahrukh to overtake ajay , before he meets kajol ?",
    "options": ["32", "21", "27", "none of these"],
    "answer": 3
  },
  {
    "text": "1 \u00f7 [ 1 + 1 \u00f7 { 1 + 1 \u00f7 ( 1 \u00f7 1 ) } ] = ?",
    "options": ["5 / 3", "4 / 3", "2 / 3", "1 / 3"],
    "answer": 2
  },
  {
    "text": "a recipe requires 2 1 / 2 ( mixed number ) cups of flour 2 3 / 4 ( mixed number ) cups of sugar and 1 1 / 3 ( mixed number ) cups of milk to make one cake . victor has 15 cups if flour , 16 cups of sugar and 8 cups of milk . what is the greatest number of cakes bil can make using this recipe ?",
    "options": ["5", "6", "7", "8"],
    "answer": 0
  },
  {
    "text": "a train running at a speed of 60 kmph crosses a pole in 18 seconds . what is the length of the train ?",
    "options": ["120 m", "300 m", "190 m", "150 m"],
    "answer": 1
  },
  {
    "text": "a company conducted a survey about its two brands , a and b . x percent of respondents liked product a , ( x \u2013 20 ) percent liked product b , 23 percent liked both products , and 23 percent liked neither product . what is the minimum number w of people surveyed by the company ?",
    "options": ["46", "80", "90", "100"],
    "answer": 3
  },
  {
    "text": "when a person aged 39 is added to a group of n people , the average age increases by 2 . when a person aged 15 is added instead , the average age decreases by 1 . what is the value of t ?",
    "options": ["7", "8", "9", "10"],
    "answer": 0
  },
  {
    "text": "the average earning of a person for the first 4 days of a week is rs 18 and for the last 4 days is rs 22 . if he earns rs 20 on the fourth day , his average earning for the whole week is ?",
    "options": ["rs 18.95", "rs 16", "rs 20", "rs 25.71"],
    "answer": 2
  },
  {
    "text": "3 different containers contain 50 litres , 100 litres and 150 litres of mixture of milk and water respectively . what is the biggest measure can measure all the different quantities exactly ?",
    "options": ["120 litres", "57 litres", "60 litres", "50 litres"],
    "answer": 3
  },
  {
    "text": "marty ' s pizza shop guarantees that their pizzas all have at least 75 % of the surface area covered with toppings , with a crust of uniform width surrounding them . if you order their best seller \u2013 a circular pizza with a diameter of 16 inches \u2013 what is the maximum width you can expect to see for the crust ?",
    "options": ["0.8 inches", "1.1 inches", "1.6 inches", "2.0 inches"],
    "answer": 1
  },
  {
    "text": "compute all real solutions to 16 x + 4 x + 1 - 96 = 0",
    "options": ["3 / 2", "3 / 3", "2 / 4", "4 / 4"],
    "answer": 0
  },
  {
    "text": "each person in a group of 110 investors has investments in either equities or securities or both . exactly 25 of the investors in equities have investments in securities , and exactly 40 of the investors in securities have investments in equities . how many have investments in equities ?",
    "options": ["65", "80", "120", "180"],
    "answer": 1
  },
  {
    "text": "an angry arjun carried some arrows for fighting with bheeshm . with half the arrows , he cut down the arrows thrown by bheeshm on him and with 6 other arrows he killed the chariot driver of bheeshm . with one arrow each he knocked down respectively the chariot , the flag and the bow of bheeshm . finally , with one more than 4 times the square root of arrows he laid bheeshm unconscious on an arrow bed . find the total number of arrows arjun had .",
    "options": ["90", "100", "110", "120"],
    "answer": 1
  },
  {
    "text": "when tom works alone he chops 3 lb . salad in 2 minutes , and when tammy works alone she chops 2 lb . salad in 3 minutes . they start working together , and after some time finish chopping 65 lb . of salad . of those 80 lb . , the salad quantity chopped by tom is what percent greater than the quantifying chopped by tommy ? .",
    "options": ["44 %", "100 %", "125 %", "225 %"],
    "answer": 2
  },
  {
    "text": "the radius of a circular wheel is 1.75 m , how many revolutions will it make in traveling 1 km ?",
    "options": ["1000", "2788", "2677", "2899"],
    "answer": 0
  },
  {
    "text": "if the radius of a cylinder is doubled and so is the height , what is the new volume of the cylinder divided by the old one ?",
    "options": ["8 .", "2", "6", "4"],
    "answer": 0
  },
  {
    "text": "the average of first six multiples of 3 is",
    "options": ["10.5", "6", "9", "12"],
    "answer": 0
  },
  {
    "text": "the product of two numbers is 192 and the sum of these two numbers is 28 . what is the smaller of these two numbers ?",
    "options": ["10", "12", "14", "15"],
    "answer": 1
  },
  {
    "text": "oil is poured into a tank so that the tank is being filled at the rate of 4 cubic feet per hour . if the empty rectangular tank is 9 feet long , 8 feet wide , and 5 feet deep , approximately how many hours does it take to fill the tank ?",
    "options": ["60", "70", "80", "90"],
    "answer": 3
  },
  {
    "text": "the speed of a boat in still water is 15 km / hr and the rate of the current is 3 km / hr . the distance travelled downstream in 12 minutes is",
    "options": ["1.2 km", "1.8 km", "2.4 km", "3.6 km"],
    "answer": 3
  },
  {
    "text": "a certain animal in the zoo has consumed 39 pounds of food in 6 days . if it continues to eat at the same rate , in how many more days will its total consumption be 117 pounds ?",
    "options": ["8", "7", "12", "9"],
    "answer": 2
  },
  {
    "text": "a set of consecutive positive integers beginning with 1 is written on the blackboard . a student came along and erased one number . the average of the remaining numbers is 35 * 7 / 17 . what was the number erased ?",
    "options": ["7", "8", "6", "5"],
    "answer": 0
  },
  {
    "text": "the lengths of the diagonals of a rhombus are 20 and 48 meters . find the perimeter of the rhombus ?",
    "options": ["150 merters", "125 meters", "96 meters", "104 meters"],
    "answer": 3
  },
  {
    "text": "during the first two weeks of june , the total rainfall in springdale was 40 inches . if the rainfall during the second week was 1.5 times the rainfall during the first week , what was the rainfall in inches during the second week of june ?",
    "options": ["15", "18", "21", "24"],
    "answer": 3
  },
  {
    "text": "two men and 7 children complete a certain piece of work in 4 days while 4 men and 4 children complete the same work in only 3 days . the number of days required by 1 man to complete the work is",
    "options": ["60 days", "15 days", "6 days", "51 days"],
    "answer": 1
  },
  {
    "text": "the total surface area of a solid hemisphere of diameter 14 cm , is :",
    "options": ["462 cm \u00b2", "530 cm \u00b2", "1345 cm \u00b2", "1788 cm \u00b2"],
    "answer": 0
  },
  {
    "text": "15 lts are taken of from a container full of liquid a and replaced with liquid b . again 15 more lts of the mixture is taken and replaced with liquid b . after this process , if the container contains liquid a and b in the ratio 9 : 16 , what is the capacity of the container h ?",
    "options": ["45", "25", "37.5", "36"],
    "answer": 2
  },
  {
    "text": "a dog breeder currently has 9 breeding dogs . 6 of the dogs have exactly 1 littermate , and 3 of the dogs have exactly 2 littermates . if 2 dogs are selected at random , what is the probability e that both selected dogs are not littermates ?",
    "options": ["1 / 6", "2 / 9", "5 / 6", "7 / 9"],
    "answer": 2
  },
  {
    "text": "tanks p and b are each in the shape of a right circular cylinder . the interior of tank p has a height of 10 meters and a circumference of 8 meters , and the interior of tank b has a height of 8 meters and a circumference of 10 meters . the capacity of tank p is what percent of the capacity of tank b ?",
    "options": ["75 %", "80 %", "100 %", "120 %"],
    "answer": 1
  },
  {
    "text": "what quantity of water should be added to reduce 20 liters of 80 % acidic liquid to 20 % acidic liquid ?",
    "options": ["30 liters", "50 liters", "60 liters", "70 liters"],
    "answer": 2
  },
  {
    "text": "mr . shah decided to walk down the escalator of a tube station . he found \u00e2 that if he walks down 26 steps , he requires 30 seconds to reach the bottom . however , if he steps down 34 stairs he would only require 18 seconds to get to the bottom . if the time is measured from the moment the top step begins \u00e2 to descend to the time he steps off the last step at the bottom , find out the height of the stair way in steps ?",
    "options": ["44", "45", "46", "47"],
    "answer": 2
  },
  {
    "text": "what is 15 percent of rs . 34 ?",
    "options": ["rs . 3.40", "rs . 3.75", "rs . 4.50", "rs . 5.10"],
    "answer": 3
  },
  {
    "text": "a reduction of 10 % in the price of tea enables a dealer to purchase 25 kg more tea for rs . 22500 . what is the reduced price per kg of tea ?",
    "options": ["rs . 70", "rs . 80", "rs . 90", "rs . 100"],
    "answer": 2
  },
  {
    "text": "at 12 : 30 , the hour hand and the minute hand of a clock form an angle of",
    "options": ["120 \u00b0", "135 \u00b0", "125 \u00b0", "150 \u00b0"],
    "answer": 4
  },
  {
    "text": "a businessman earns $ 26800 in december , thus decreasing his average annual ( january to december ) earnings by $ 1200 . his average annual earnings would be source : cmat preparation",
    "options": ["$ 29000", "$ 33500", "$ 40000", "$ 41000"],
    "answer": 2
  },
  {
    "text": "a sum of rs . 66000 is divided into 3 parts such that the simple interests accrued on them for 6 , two and 11 years respectively may be equal . find the amount deposited for 11 years .",
    "options": ["6500", "2000", "4500", "3000"],
    "answer": 4
  },
  {
    "text": "in smithtown , the ratio of right - handed people to left - handed people is 3 to 1 and the ratio of men to women is 3 to 2 . if the number of right - handed men is maximized , then what percent z of all the people in smithtown are left - handed women ?",
    "options": ["50 %", "40 %", "25 %", "20 %"],
    "answer": 2
  },
  {
    "text": "the average age of 20 men in the class is 15.6 years . 5 new men join and the new average becomes 14.56 years . what was the average age of 5 new men ?",
    "options": ["15.5", "15.4", "15.25", "10.4"],
    "answer": 3
  },
  {
    "text": "the sum of the squares of three consecutive natural number is 2030 . what is the middle number ?",
    "options": ["25", "26", "27", "28"],
    "answer": 1
  },
  {
    "text": "in what time will two trains cross each other completely , which are running on the same parallel lines in opposite directions , each train running with a speed of 60 kmph being 130 m and 120 m in length respectively ?",
    "options": ["6.9 sec", "7.1 sec", "7.2 sec", "7.4 sec"],
    "answer": 4
  },
  {
    "text": "rob also compared the empire state building and the petronas towers . what is the height difference between the two if the empire state building is 435 m tall and the petronas towers is 458 m tall ?",
    "options": ["9", "17", "23", "45"],
    "answer": 2
  },
  {
    "text": "from a pack of cards , two cards are drawn one after the other , with replacement . what is the probability that the first card is a club and the second card is a red king ?",
    "options": ["1 / 13", "1 / 15", "1 / 26", "1 / 52"],
    "answer": 4
  },
  {
    "text": "a cube is painted red on all faces . it is then cut into 27 equal smaller cubes . how many cubes are painted on only 2 faces ?",
    "options": ["12", "8", "6", "10"],
    "answer": 0
  },
  {
    "text": "the cost price of 20 articles is the same as the selling price of x articles . if the profit is 25 % , find out the value of x",
    "options": ["13", "14", "15", "16"],
    "answer": 3
  },
  {
    "text": "company t produces two kinds of stereos : basic and deluxe . of the stereos produced by company t last month , 2 / 3 were basic and the rest were deluxe . if it takes 7 / 5 as many hours to produce a deluxe stereo as it does to produce a basic stereo , then the number of hours it took to produce the deluxe stereos last month was what fraction of the total number of hours it took to produce all the stereos ?",
    "options": ["5 / 17", "7 / 17", "4 / 17", "3 / 17"],
    "answer": 1
  },
  {
    "text": "calculate the area of a triangle , if the sides of are 52 cm , 48 cm and 20 cm , what is its area ?",
    "options": ["480 cm 2", "580 cm 2", "380 cm 2", "180 cm 2"],
    "answer": 0
  },
  {
    "text": "a truck covers a distance of 550 metres in 1 minute whereas a train covers a distance of 33 kms in 45 minutes . what is the ratio of their speed ?",
    "options": ["3 : 7", "4 : 7", "1 : 4", "3 : 4"],
    "answer": 3
  },
  {
    "text": "a sum of money is distributed among a , b , c , d in the proportion of 6 : 4 : 8 : 5 . if c gets $ 3000 more than d , what is the b ' s share ?",
    "options": ["$ 2000", "$ 6000", "$ 1000", "$ 4000"],
    "answer": 3
  },
  {
    "text": "there are 50 boys in a class . their average weight is 45 kg . when one boy leaves the class , the average reduces by 100 g . find the weight of the boy who left the class .",
    "options": ["40.9 kg", "42.9 kg", "49.9 kg", "39.9 kg"],
    "answer": 2
  },
  {
    "text": "a university cafeteria offers 6 flavors of pizza - pork , gobi - manjurian , pepperoni , chicken , hawaiian and vegetarian . if a customer has an option ( but not the obligation ) to add extra cheese , mushrooms or both to any kind of pizza , how many different pizza varieties are available ?",
    "options": ["4", "8", "12", "36"],
    "answer": 3
  },
  {
    "text": "in a zoo , the ratio of the number of cheetahs to the number 4 then what is the increase in the number of pandas ?",
    "options": ["2", "12", "5", "10"],
    "answer": 1
  },
  {
    "text": "rs . 6490 is divided so that 4 times the first share , six times the 2 nd share and twice the third share amount to the same . what is the value of the first share ?",
    "options": ["s 6490", "s 1880", "s 1660", "s 1550"],
    "answer": 4
  },
  {
    "text": "the average salary per month of 55 employees in a company is rs 8500 . if the managers salary is added , the average salary increases to rs 8800 , what is the salary of the manager ?",
    "options": ["10000", "12000", "23000", "25300"],
    "answer": 3
  },
  {
    "text": "there are 24 students in a seventh grade class . they decided to plant birches and roses at the school ' s backyard . while each girl planted 3 roses , every three boys planted 1 birch . by the end of the day they planted 2424 plants . how many birches were planted ?",
    "options": ["2", "5", "8", "6"],
    "answer": 3
  },
  {
    "text": "in a simultaneous throw of pair of dice . find the probability of getting the total more than 7",
    "options": ["5 / 7", "4 / 7", "5 / 12", "4 / 7"],
    "answer": 2
  },
  {
    "text": "a green grocer received a boxful of tomatoes and on opening the box found that several had gone bad . he then counted them up so that he could make a formal complaint and found that 68 were mouldy , which was 16 per cent of the total contents of the box . how many tomatoes were in the box ?",
    "options": ["336", "425", "275", "235"],
    "answer": 1
  },
  {
    "text": "how many boxes do we need if we have to carry 250 apples into boxes that each hold 25 apples ?",
    "options": ["9", "5", "7", "10"],
    "answer": 3
  },
  {
    "text": "the diameter of a circle is 4 / \u03c0 . find the circumference of the circle .",
    "options": ["8", "4 \u03c0", "4", "6"],
    "answer": 0
  },
  {
    "text": "simplify : 0.3 * 0.3 + 0.3 * 0.3",
    "options": ["0.52", "0.42", "0.18", "0.64"],
    "answer": 2
  },
  {
    "text": "{ - 10 , - 6 , - 5 , - 4 , - 2.5 , - 1 , 0 , 2.5 , 4 , 6 , 7 , 10 } a number is to be selected at random from the set above . what is the probability that the number will be a solution to the equation ( x - 4 ) ( x + 9 ) ( 2 x + 5 ) = 0 ?",
    "options": ["1 / 12", "1 / 6", "1 / 4", "1 / 3"],
    "answer": 0
  },
  {
    "text": "find the value of ( 20 c 18 ) * ( 20 c 20 )",
    "options": ["400", "380", "360", "350"],
    "answer": 1
  },
  {
    "text": "find the ratio of the curved surfaces of two cylinders of same heights if their radii are in the ratio 1 : 2 ?",
    "options": ["1 : 2", "2 : 3", "2 : 9", "2 : 1"],
    "answer": 0
  },
  {
    "text": "4 men and 6 women can complete a work in 8 days , while 3 men and 7 women can complete it in 10 days . in how many days will 10 women complete it ?",
    "options": ["21 days", "40 days", "27 days", "18 days"],
    "answer": 1
  },
  {
    "text": "3 men and 7 women can complete a work in 10 days . but 4 men and 6 women need 8 days to complete the same work . in how many days will 10 women complete the same work ?",
    "options": ["50", "40", "30", "20"],
    "answer": 1
  },
  {
    "text": "what is the characteristic of the logarithm of 0.0000134 ?",
    "options": ["5", "- 5", "6", "- 6"],
    "answer": 1
  },
  {
    "text": "in the game of dubblefud , red chips , blue chips and green chips are each worth 2 , 4 and 5 points respectively . in a certain selection of chips , the product of the point values of the chips is 16000 . if the number of blue chips in this selection doubles the number of green chips , how many red chips are in the selection ?",
    "options": ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "text": "on average , the boys in the class have 20 pencils and the girls have 38 pencils . if the overall class average is 30 pencils , what is the ratio of boys to girls in the class ?",
    "options": ["1 / 2", "2 / 3", "3 / 4", "4 / 5"],
    "answer": 3
  },
  {
    "text": "what is the sum of all the odd numbers between 24 and 50 , inclusive ?",
    "options": ["592", "481", "330", "475"],
    "answer": 1
  },
  {
    "text": "if the average of r , b , c , 14 and 15 is 12 . what is the average value of r , b , c and 29",
    "options": ["12", "13", "14", "15"],
    "answer": 3
  },
  {
    "text": "what is the angle between the 2 hands of the clock at 8 : 24 pm ?",
    "options": ["100 \u00b0", "107 \u00b0", "106 \u00b0", "108 \u00b0"],
    "answer": 3
  },
  {
    "text": "two friends c and d leave point c and point d simultaneously and travel towards point d and point c on the same route at their respective constant speeds . they meet along the route and immediately proceed to their respective destinations in 32 minutes and 50 minutes respectively . how long will d take to cover the entire journey between point d and point c ?",
    "options": ["90", "80", "75", "60"],
    "answer": 0
  },
  {
    "text": "in a class of 50 students , 20 play baseball , 15 play cricket and 11 play football . 7 play both baseball and cricket , 4 play cricket and football and 5 play baseball and football . if 18 students do not play any of these given sports , how many students play exactly two of these sports ?",
    "options": ["10", "46", "67", "68"],
    "answer": 0
  },
  {
    "text": "what will be the area of a semi - circle of 14 metres diameter ?",
    "options": ["154 sq metres", "77 sq metres", "308 sq metres", "22 sq metres"],
    "answer": 1
  },
  {
    "text": "it takes ten minutes to load a certain video on a cellphone , and fifteen seconds to load that same video on a laptop . if the two devices were connected so that they operated in concert at their respective rates , how many seconds would it take them to load the video , rounded to the nearest hundredth ?",
    "options": ["13.42", "13.86", "14.25", "14.63"],
    "answer": 3
  },
  {
    "text": "a certain scholarship committee awarded scholarships in the amounts of $ 1250 , $ 2500 and $ 4000 . the committee awarded twice as many $ 2500 scholarships as $ 4000 and it awarded 3 times as many $ 1250 scholarships as $ 2500 scholarships . if the total of $ 75000 was awarded in $ 1250 scholarships , how many $ 4000 scholarships were awarded ?",
    "options": ["5", "6", "9", "10"],
    "answer": 3
  },
  {
    "text": "1 = 5,2 = 25,3 = 253,4 = 150,5 = 225 then 150 = ?",
    "options": ["1", "255", "4", "445"],
    "answer": 2
  },
  {
    "text": "if pintu is coded as 79523 in a certain code language , how would you code mumbo in the same language ?",
    "options": ["43426", "14236", "13436", "14263"],
    "answer": 0
  },
  {
    "text": "paul ' s income is 40 % less than rex ' s income , quentin ' s income is 20 % less than paul ' s income , and sam ' s income is 40 % less than paul ' s income . if rex gave 60 % of his income to paul and 40 % of his income to quentin , paul ' s new income would be what fraction of quentin ' s new income ?",
    "options": ["11 / 12", "13 / 17", "13 / 19", "15 / 11"],
    "answer": 3
  },
  {
    "text": "if 6 - 12 / x = 7 - 7 / x , then x =",
    "options": ["- 5", "19", "- 7 / 5", "1"],
    "answer": 0
  },
  {
    "text": "| x + 3 | \u2013 | 4 - x | = | 8 + x | how many s solutions will this equation have ?",
    "options": ["0", "1", "2", "3"],
    "answer": 0
  },
  {
    "text": "49 \u00e3 \u2014 49 \u00e3 \u2014 49 = 7 ^ ?",
    "options": ["4", "7", "8", "6"],
    "answer": 3
  },
  {
    "text": "a circle in the coordinate plane passes through points ( - 3 , - 2 ) and ( 1 , - 4 ) . what is the smallest possible area of that circle ?",
    "options": ["13 \u03c0", "26 \u03c0", "262 \u221a \u03c0", "5 \u03c0"],
    "answer": 3
  },
  {
    "text": "the distance between two cities a and b is 330 km . a train starts from a at 8 a . m . and travels towards b at 60 km / hr . another train starts from b at 9 a . m . and travels towards a at 75 km / hr . at what time do they meet ?",
    "options": ["12", "10", "11", "09"],
    "answer": 2
  },
  {
    "text": "there are two numbers . if 10 % of the first number is added to the second number , then the second number increases to its 6 - fifth . what is the ratio of the first number to the second number ?",
    "options": ["3 : 2", "4 : 3", "8 : 7", "5 : 8"],
    "answer": 4
  },
  {
    "text": "what is the average of xx , 2 x 2 x , and 66 ?",
    "options": ["x + 2", "x + 2 x", "x + 2 x + 2", "2 x + 2"],
    "answer": 2
  },
  {
    "text": "10 men can complete a work in 7 days . but 10 women need 14 days to complete the same work . how many days will 5 men and 10 women need to complete the work ?",
    "options": ["5", "6", "7", "8"],
    "answer": 2
  },
  {
    "text": "all numbers from 1 to 200 ( in decimal system ) are written in base 6 and base 7 systems . how many of the numbers will have a non - zero units digit in both base 6 and base 7 notations ?",
    "options": ["143", "200", "157", "122"],
    "answer": 0
  },
  {
    "text": "an urn contains 6 red , 5 blue and 2 green marbles . if 2 marbles are picked at random , what is the probability that both are red ?",
    "options": ["6 / 13", "5 / 26", "6 / 26", "9 / 26"],
    "answer": 1
  },
  {
    "text": "solve below question 2 x + 1 = - 15",
    "options": ["- 8", "- 9", "9", "8"],
    "answer": 0
  },
  {
    "text": "q is as much younger than r as he is older than t . if the sum of the ages of r and t is 50 years , what is definitely the difference between r and q ' s age ?",
    "options": ["23", "28", "25", "19"],
    "answer": 2
  },
  {
    "text": "in objective test a correct ans score 4 marks and on a wrong ans 2 marks are - - - . a student score 480 marks from 150 question . how many ans were correct ?",
    "options": ["120", "130", "110", "150"],
    "answer": 1
  },
  {
    "text": "a , b and c invests rs . 6000 , rs . 5000 and rs . 3000 in a business . after one year c removed his money ; a and b continued the business for two more year . if the net profit after 3 years be rs . 4206 , then c ' s share in the profit is ?",
    "options": ["276", "289", "400", "350.5"],
    "answer": 3
  },
  {
    "text": "the population of a town increased from 50000 to 80000 in a decade . the average percent increase of population per year is :",
    "options": ["4.37 %", "5 %", "6 %", "8.75 %"],
    "answer": 2
  },
  {
    "text": "what is the probability that when a hand o f 6 cards is drawn from a well shuffled deck of 52 cards , it contains 2 queen ?",
    "options": ["1 / 23445", "113 / 22434", "29187 by 1017926", "1017926 / 29187"],
    "answer": 2
  },
  {
    "text": "three cubes of iron whose edges are 6 cm , 8 cm and 10 cm respectively are melted and formed into a single cube . the edge of the new cube formed is",
    "options": ["10 cm", "12 cm", "16 cm", "18 cm"],
    "answer": 1
  },
  {
    "text": "if both 5 ^ 2 and 3 ^ 3 are factors of n x ( 2 ^ 5 ) x ( 6 ) x ( 7 ^ 3 ) , what is the smallest possible positive value of n ?",
    "options": ["75", "125", "145", "175"],
    "answer": 4
  },
  {
    "text": "if p ( a ) = 0.4 , p ( b ) = 0.6 and p ( a \u222a b ) = 0.8 . what is the value of p ( a \u2229 b ' ) = ?",
    "options": ["0.1", "0.2", "0.3", "0.4"],
    "answer": 1
  },
  {
    "text": "evaluate : 980 x 436 + 980 x 764",
    "options": ["1176000", "968000", "978000", "117000"],
    "answer": 0
  },
  {
    "text": "how many terminating zeroes r does 200 ! have ?",
    "options": ["40", "48", "49", "55"],
    "answer": 2
  },
  {
    "text": "a girl walking at the rate of 9 km per hour crosses a square field diagonally in 12 seconds . the area of the field is :",
    "options": ["430 sq . m", "425 sq . m", "450 sq . m", "475 sq . m"],
    "answer": 2
  },
  {
    "text": "the price of an article is cut by 10 % . to restore it to the former value . the new price must be increased by ?",
    "options": ["10 %", "9 1 / 11", "11 1 / 9", "11 %"],
    "answer": 2
  },
  {
    "text": "in a certain group of 10 developers , 4 developers code only in python and the rest program in either ruby on rails or php - but not both . if a developer organization is to choose a 3 - member team , which must have at least 1 developer who codes in python , how many different programming teams can be chosen ?",
    "options": ["100", "40", "66", "80"],
    "answer": 0
  },
  {
    "text": "a number is mistakenly divided by 5 instead of being multiplied by 5 . find the percentage change in the result due t this mistake .",
    "options": ["96 %", "95 %", "2400 %", "200 %"],
    "answer": 0
  },
  {
    "text": "the first , second and third terms of the proportion are 56 , 16 , 49 . find the fourth term .",
    "options": ["10", "14", "40", "50"],
    "answer": 1
  },
  {
    "text": "determine the value of 3 * 27 / 31 + 81 / 93",
    "options": ["0", "156 / 31", "123 / 31", "151 / 31"],
    "answer": 3
  },
  {
    "text": "in goshawk - eurasian nature reserve 30 percent of the birds are hawks , and 40 percent of the non - hawks are paddyfield - warblers . if there are 25 percent as many kingfishers as paddyfield - warblers in the reserve , then what percent of the birds e in the nature reserve are not hawks , paddyfield - warblers , or kingfishers ?",
    "options": ["25 %", "35 %", "45 %", "70 %"],
    "answer": 1
  },
  {
    "text": "what is the smallest integer t greater than 1 that leaves a remainder of 1 when divided by any of the integers 6 , 8 , and 10 ?",
    "options": ["21", "41", "121", "241"],
    "answer": 2
  },
  {
    "text": "in bangalore there is a well known science institute . during a visit i asked two of the men to tell me their ages . one replied , ' one of our ages subtracted from the other ' s equal 30 . ' then the other man spoke . ' our ages multiplied together equal 1624 . ' what were their ages ?",
    "options": ["60 and 23", "66 and 25", "29 and 56", "71 and 43"],
    "answer": 4
  },
  {
    "text": "a soccer store typically sells replica jerseys at a discount of 30 percent to 50 percent off list price . during the annual summer sale , everything in the store is an additional 20 percent off the original list price . if a replica jersey ' s list price is $ 80 , approximately what w percent of the list price is the lowest possible sale price ?",
    "options": ["20", "25", "30", "40"],
    "answer": 3
  },
  {
    "text": "5 years ago , the average age of a , b , c and d was 45 years . with e joining them now , the average of all the 5 is 50 years . the age of e is ?",
    "options": ["50", "47", "48", "49"],
    "answer": 0
  },
  {
    "text": "there are 15 slate rocks , 20 pumice rocks , and 10 granite rocks randomly distributed in a certain field . if 2 rocks are to be chosen at random and without replacement , what is the probability that both rocks will be slate rocks ?",
    "options": ["1 / 3", "7 / 22", "1 / 9", "7 / 66"],
    "answer": 3
  },
  {
    "text": "a cistern can be filled by a tap in 4 hours while it can be emptied by another tap in 9 hours . if both the taps are opened simultaneously then after how much time will the cistern get filled ?",
    "options": ["6 hr", "5.6 hr", "9.5 hr", "7.2 hr"],
    "answer": 3
  },
  {
    "text": "7 carpet - weavers can weave 7 carpets in 7 days . at the same rate , how many carpets would be woven by 14 carpet - weavers in 14 days ?",
    "options": ["14", "28", "21", "35"],
    "answer": 1
  },
  {
    "text": "two assembly line inspectors , lauren and steven , inspect widgets as they come off the assembly line . if lauren inspects every fifth widget , starting with the fifth , and steven inspects every fourth , starting with the fourth , how many of the 98 widgets produced in the first hour of operation are not inspected by either inspector ?",
    "options": ["66", "68", "70", "64"],
    "answer": 3
  },
  {
    "text": "the speed of a car increases by 2 kms after every one hour . if the distance travelled in the first one hour was 35 kms , what was the total distance travelled in 12 hours ?",
    "options": ["456 kms", "482 kms", "552 kms", "556 kms"],
    "answer": 2
  },
  {
    "text": "evaluate : 11110 + 24 * 3 * 10 = ?",
    "options": ["90111", "52631", "11190", "65321"],
    "answer": 2
  },
  {
    "text": "if the sales tax reduced from 3 1 / 2 % to 3 1 / 3 % , then what difference does it make to a person who purchases an article with market price of $ 8400 ?",
    "options": ["14", "24", "34", "12"],
    "answer": 0
  },
  {
    "text": "a boy goes to his school from his house at a speed of 3 km / hr and return at a speed of 2 km / hr . if he takes 5 hours in going and coming , the distance between his house and school is ?",
    "options": ["5 km", "6 km", "10 km", "12 km"],
    "answer": 1
  },
  {
    "text": "cost is expressed by the formula tb ^ 4 . if b is doubled , the new cost q is what percent of the original cost ?",
    "options": ["q = 200", "q = 600", "q = 800", "q = 1600"],
    "answer": 3
  },
  {
    "text": "if the complement of a certain angle is 7 times the measure of that certain angle , then what is the measure of that certain angle ?",
    "options": ["45 \u00b0", "30 \u00b0", "22.5 \u00b0", "18 \u00b0"],
    "answer": 4
  },
  {
    "text": "3251 + 587 + 369 - ? = 3007",
    "options": ["1250", "1300", "1375", "1200"],
    "answer": 3
  },
  {
    "text": "the manufacturer \u2019 s suggested retail price ( msrp ) of a certain item is $ 60 . store a sells the item for 20 percent more than the msrp . the regular price of the item at store b is 30 percent more than the msrp , but the item is currently on sale for 10 percent less than the regular price . if sales tax is 5 percent of the purchase price at both stores , what is the result when the total cost of the item at store b is subtracted from the total cost of the item at store a ?",
    "options": ["$ 0", "$ 0.63", "$ 1.80", "$ 1.89"],
    "answer": 3
  },
  {
    "text": "in certain code ' twice ' is written as ' 34 $ 5 \u03b4 ' and ' wears ' is written as ' 4 \u03b4 29 % ' . how is ' seat ' written in that code ?",
    "options": ["22", "23", "697", "66 p"],
    "answer": 1
  },
  {
    "text": "two pipes a and b can fill a cistern in 10 and 15 minutes respectively . both fill pipes are opened together , but at the end of 3 minutes , \u2018 b \u2019 is turned off . how much time will the cistern take to fill ?",
    "options": ["6 min", "8 min", "10 min", "12 min"],
    "answer": 1
  },
  {
    "text": "if o is the center of the circle in the figure above and the area of the unshaded sector is 5 , what is the area of the shaded region ?",
    "options": ["25 / \u221a \u03c0", "30 / \u221a \u03c0", "20", "25"],
    "answer": 3
  },
  {
    "text": "a rectangular lawn of length 200 m by 120 m has two roads running along its center , one along the length and the other along the width . if the width of the roads is 5 m what is the area w covered by the two roads ?",
    "options": ["400", "1550", "1575", "1600"],
    "answer": 2
  },
  {
    "text": "if a and b together can finish a work in 16 days . a can finish same work alone in 24 days then b alone can finish same work alone in how many days ?",
    "options": ["30 days", "48 days", "40 days", "36 days"],
    "answer": 1
  },
  {
    "text": "if 5 a + 7 b = m , where a and b are positive integers , what is the largest possible value of m for which exactly one pair of integers ( a , b ) makes the equation true ?",
    "options": ["35", "48", "69", "70"],
    "answer": 3
  },
  {
    "text": "a man speaks truth 3 out of 4 times . he throws a die and reports it to be a 6 . what is the probability of it being a 6 ?",
    "options": ["3 / 5", "1 / 2", "3 / 4", "3 / 8"],
    "answer": 3
  },
  {
    "text": "on a sum of money , simple interest for 2 years is rs 660 and compound interest is rs 696.30 , the rate of interest being the same in both cases .",
    "options": ["8 %", "9 %", "10 %", "11 %"],
    "answer": 3
  },
  {
    "text": "the ages of two persons differ by 16 years . if 6 years ago , the elder one be 3 times as old as the younger one , find their present ages .",
    "options": ["10 years and 18 years", "18 years and 26 years", "20 years and 28 years", "14 years and 30 years"],
    "answer": 3
  },
  {
    "text": "an athlete takes 10 seconds to run 100 m . what is his avg . speed in miles per hour ?",
    "options": ["22.37", "26.66", "24.35", "36.0"],
    "answer": 0
  },
  {
    "text": "what is the max number of rectangular boxes , each measuring 4 inches by 6 inches by 10 inches , that can be packed into a rectangular packing box measuring 16 inches by 18 inches by 30 inches , if all boxes are aligned in the same direction ?",
    "options": ["36", "14", "12", "15"],
    "answer": 0
  },
  {
    "text": "how many seconds will a 500 m long train take to cros a man walking with a speed of 3 kmph in the direction of the moving train if the speed of the train is 63 kmph",
    "options": ["25", "30", "40", "45"],
    "answer": 1
  },
  {
    "text": "a batsman had a certain average of runs for 16 innings . in the 17 th innings , he made a score of 87 runs thereby increasing his average by 3 . what is his average after 17 innings ?",
    "options": ["39", "88", "266", "278"],
    "answer": 0
  },
  {
    "text": "if a card is drawn from a well shuffled pack of cards , the probability of drawing a spade or a king is - .",
    "options": ["2 / 10", "4 / 13", "3 / 5", "9 / 7"],
    "answer": 1
  },
  {
    "text": "3 friends james , david and charlie divide $ 1230 amongs them in such a way that if $ 5 , $ 10 and $ 15 are removed from the sums that james , david and charlie received respectively , then the share of the sums that they got will be in the ratio of 9 : 10 : 11 . how much did charlie receive ?",
    "options": ["$ 600", "$ 575", "$ 550", "$ 580"],
    "answer": 4
  },
  {
    "text": "calculate the area of a triangle , if the sides of are 39 cm , 36 cm and 15 cm , what is its area ?",
    "options": ["570 cm 2", "370 cm 2", "170 cm 2", "271 cm 2"],
    "answer": 4
  },
  {
    "text": "one pipe can fill a tank three times as fast as another pipe . if together the two pipes can fill the tank in 36 minutes , then the slower pipe alone will be able to fill the tank in ?",
    "options": ["144 min", "250 min", "196 min", "100 min"],
    "answer": 0
  },
  {
    "text": "the average of 5 consecutive odd numbers a , b , c , d and e is 33 . what percent of a is d ?",
    "options": ["86.8", "88.6", "89.2", "90.1"],
    "answer": 1
  },
  {
    "text": "the volumes of two cubes are in the ratio 27 : 125 , what shall be the ratio of their surface areas ?",
    "options": ["6 : 25", "3 : 5", "9 : 25", "16 : 25"],
    "answer": 2
  },
  {
    "text": "bag contains 7 green and 8 white balls . if two balls are drawn simultaneously , the probability that both are of the same colour is - .",
    "options": ["7 / 15", "2 / 8", "7 / 11", "13 / 5"],
    "answer": 0
  },
  {
    "text": "subtracting 30 from a number , the remainder is one fourth of the number . find the number ?",
    "options": ["29", "88", "40", "28"],
    "answer": 2
  },
  {
    "text": "the sum of four consecutive even integers is 1284 . the greatest of them is :",
    "options": ["324", "342", "364", "382"],
    "answer": 0
  },
  {
    "text": "if a train runs at 40 kmph , it reach its destination late by 11 minutes but if it runs at 50 kmph it is late by 5 minutes only . the correct time for a train to complete its journey is ? let the correct time to complete the journey be x min distance covered in ( x + 11 ) min . at 40 kmph distance covered in ( x + 5 ) min . at 50 kmph ( x + 11 ) / 60 * 40 = ( x + 5 ) / 60 * 50 x = 19 min",
    "options": ["19 min", "19 hrs", "52 min", "126 min"],
    "answer": 0
  },
  {
    "text": "alex and brian start a business with rs . 7000 each , and after 8 months , brian withdraws half of his capital . how should they share the profits at the end of the 18 months ?",
    "options": ["5 : 4", "4 : 3", "18 : 11", "3 : 2"],
    "answer": 4
  },
  {
    "text": "a sum of money is distributed among a , b , c , d in the proportion of 1 : 3 : 4 : 2 . if c gets $ 500 more than d , what is the b ' s share ?",
    "options": ["$ 450", "$ 500", "$ 750", "$ 800"],
    "answer": 2
  },
  {
    "text": "if there are thrice as many women as men in a group and an equal number of men and women do not own cars - a group that is 30 % of the total . what fraction of the total is men who own cars ?",
    "options": ["3 \u2044 20", "11 \u2044 60", "9 \u2044 40", "1 \u2044 10"],
    "answer": 3
  },
  {
    "text": "a man is 24 years older than his son . in three years , his age will be twice the age of his son . the present age of the son is",
    "options": ["14 years", "18 years", "20 years", "21 years"],
    "answer": 3
  },
  {
    "text": "a man covers a certain distance q in a train . if the train moved 4 km / hr faster , it would take 30 min less . if it moved 2 km / hr slower , it would take 20 mins more . find the distance ?",
    "options": ["200 km", "50 km", "20 km", "60 km"],
    "answer": 3
  },
  {
    "text": "if the a radio is sold for rs 490 and sold for rs 465.50 . find loss % .",
    "options": ["4 %", "5 %", "6 %", "3 %"],
    "answer": 1
  },
  {
    "text": "the annual birth and death rate in a country per 1000 are 39.4 and 19.4 respectively . the number of years q in which the population would be doubled assuming there is no emigration or immigration is",
    "options": ["q = 20", "q = 25", "q = 30", "q = 35"],
    "answer": 3
  },
  {
    "text": "a pyramid has a square base of 6 cm , and the four lateral faces are four congruent equilateral triangles . what is the total surface area of the pyramid in square cm ?",
    "options": ["36 + 18 * sqrt ( 3 )", "36 + 36 * sqrt ( 3 )", "72", "72 + 36 * sqrt ( 3 )"],
    "answer": 1
  },
  {
    "text": "find the smallest number in gp whose sum is 38 and product is 1728",
    "options": ["5", "6", "7", "8"],
    "answer": 3
  },
  {
    "text": "in a fuel station the service costs $ 1.50 per car , every liter of fuel costs 0.35 $ . assuming that you own 3 limos and 2 fleet vans and all fuel tanks are empty . how much will it cost to fuel all cars together if a limo tank is 32 liters and an fleet van tank is 75 % bigger ?",
    "options": ["$ 78.80", "$ 79.80", "$ 78.90", "$ 79.90"],
    "answer": 0
  },
  {
    "text": "a , b and c can do a piece of work in 7 days , 14 days and 28 days respectively . how long will they take to finish the work , if all the three work together ?",
    "options": ["4", "9", "2", "11"],
    "answer": 0
  },
  {
    "text": "lamp a flashes every 6 seconds , lamp b flashes every 8 seconds , lamp c flashes every 10 seconds . at a certain instant of time all 3 lamps flash simultaneously . during the period of 6 minutes after that how many times will exactly two lamps flash ? ( please include any flash of exactly two lights which occurs at the 6 minute mark . )",
    "options": ["24", "25", "26", "27"],
    "answer": 3
  },
  {
    "text": "the bus fare for two persons for travelling between agra and aligarh id 4 - thirds the train fare between the same places for one person . the total fare paid by 6 persons travelling by bus and 8 persons travelling by train between the two places is rs . 1512 . find the train fare between the two places for one person ?",
    "options": ["rs . 126", "rs . 132", "rs . 120", "rs . 114"],
    "answer": 0
  },
  {
    "text": "a goods bullet train runs at the speed of 72 km / hr and crosses a 250 m long platform in 26 seconds . what is the length of the goods bullet train ?",
    "options": ["220 m", "250 m", "280 m", "210 m"],
    "answer": 4
  },
  {
    "text": "find the sum 3 / 10 + 5 / 100 + 8 / 1000 in decimal form ?",
    "options": ["0.853", "0.358", "3.58", "8.35"],
    "answer": 1
  },
  {
    "text": "prints a page 40 pg per min . if the printed for 2 hours except 20 min . where there was an paper jam , how many page did it print",
    "options": ["4,000", "12,880", "14,880", "8,880"],
    "answer": 0
  },
  {
    "text": "during a thanksgiving weekend , a car rental company rented 6 - tenths of their vehicles , including two - fifths of the 4 wds that it had . if 40 % of the vehicles are 4 wds , then what percent of the vehicles that were not rented were not 4 wds ?",
    "options": ["20 %", "30 %", "40 %", "50 %"],
    "answer": 2
  },
  {
    "text": "a hollow iron pipe is 21 cm long and its external diameter is 8 cm . if the thickness of the pipe is 1 cm and iron weighs 8 g / cm ^ 3 , then the weight of the pipe is :",
    "options": ["3.6 kg", "3.696 kg", "36 kg", "36.9 kg"],
    "answer": 1
  },
  {
    "text": "mr . jones gave 40 % of the money he had to his wife . he also gave 20 % of the remaining amount to his 3 sons . and half of the amount now left was spent on miscellaneous items and the remaining amount of rs . 12000 was deposited in the bank . how much money did mr . jones have initially ?",
    "options": ["40000", "45000", "50000", "62000"],
    "answer": 2
  },
  {
    "text": "find the compound interest on rs . 10000 at 12 % rate of interest for 1 year , compounded half - yearly",
    "options": ["rs . 1036", "rs . 1236", "rs . 1186", "rs . 1206"],
    "answer": 1
  },
  {
    "text": "3 candidates contested an election and received 1000 , 2000 and 4000 votes respectively . what percentage of the total votes did the winning candidate got ?",
    "options": ["30 %", "50 %", "57 %", "62 %"],
    "answer": 2
  },
  {
    "text": "for a certain exam , a score of 58 was 2 standard deviations below mean and a score of 98 was 3 standard deviations above mean . what was the mean score r for the exam ?",
    "options": ["74", "76", "78", "80"],
    "answer": 0
  },
  {
    "text": "it costs $ 2 for the first 15 minutes to use the bumper cars at a fair ground . after the first 15 minutes it costs $ 6 per hour . if a certain customer uses the bumper cars for 3 hours and 25 minutes , how much will it cost him ?",
    "options": ["$ 22", "$ 3", "$ 15", "$ 21"],
    "answer": 3
  },
  {
    "text": "john and andrew can finish the work 9 days if they work together . they worked together for 6 days and then andrew left . john finished the remaining work in another 6 days . in how many days john alone can finish the work ?",
    "options": ["30 days", "60 days", "18 days", "80 days"],
    "answer": 2
  },
  {
    "text": "if 100 cats kill 100 mice in 100 days , then 4 cats would kill 4 mice in how many days ?",
    "options": ["1 day", "4 days", "40 days", "100 days"],
    "answer": 3
  },
  {
    "text": "of the 55 cars on a car lot , 40 have air - conditioning , 25 have power windows , and 12 have both air - conditioning and power windows . how many of the cars on the lot have neither air - conditioning nor power windows ?",
    "options": ["15", "8", "10", "2"],
    "answer": 3
  },
  {
    "text": "if two - third of a bucket is filled in 6 minute then the time taken to fill the bucket completely will be .",
    "options": ["90 seconds", "70 seconds", "60 seconds", "9 minutes"],
    "answer": 3
  },
  {
    "text": "at a restaurant , glasses are stored in two different - sized boxes . one box contains 12 glasses , and the other contains 16 glasses . if the average number of glasses per box is 15 , and there are 16 more of the larger boxes , what is the total number of glasses w at the restaurant ? ( assume that all boxes are filled to capacity . )",
    "options": ["96", "240", "256", "384"],
    "answer": 4
  },
  {
    "text": "alice and bob drive at constant speeds toward each other on a highway . alice drives at a constant speed of 30 km per hour . at a certain time they pass by each other , and then keep driving away from each other , maintaining their constant speeds . if alice is 100 km away from bob at 7 am , and also 100 km away from bob at 11 am , then how fast is bob driving ( in kilometers per hour ) ?",
    "options": ["20", "24", "28", "32"],
    "answer": 0
  },
  {
    "text": "in what time will a train 100 metres long cross an electic pole , if its speed be 144 km / hr ?",
    "options": ["2.5 sec", "4.25 sec", "5 sec", "12.5 sec"],
    "answer": 0
  },
  {
    "text": "what is the remainder when 50 ! is divided by 16 ^ 8 ? ?",
    "options": ["0", "1", "2", "3"],
    "answer": 0
  },
  {
    "text": "if the cost price of 140 pencils is equal to the selling price of 100 pencils , the gain percent is",
    "options": ["36", "37", "38", "39"],
    "answer": 4
  },
  {
    "text": "a mixture of sand and cement contains , 3 parts of sand and 5 parts of cement . how much of the mixture must be substituted with sand to make the mixture half sand and half cement ?",
    "options": ["1 / 3", "1 / 4", "1 / 5", "1 / 7"],
    "answer": 2
  },
  {
    "text": "a mixture contains milk and water in the ratio 5 : 2 . on adding 10 liters of water , the ratio of milk to water becomes 5 : 3 . the quantity of milk in the original mixture is ?",
    "options": ["30", "40", "50", "60"],
    "answer": 2
  },
  {
    "text": "students of 3 different classes appeared in common examination . pass average of 10 students of first class was 45 % , pass average of 15 students of second class was 60 % and pass average of 25 students of third class was 80 % then what will be the pass average of all students of 3 classes ?",
    "options": ["74 %", "75 %", "67 %", "72 %"],
    "answer": 2
  },
  {
    "text": "34.94 + 240.016 + 23.98 = ?",
    "options": ["298.936", "298.694", "289.496", "289.469"],
    "answer": 0
  },
  {
    "text": "meera purchased two 3 items from a shop . total price for 3 items is rs . 2000 / - she have given rs . 3000 / - what is the balance amount meera got ?",
    "options": ["650", "1000", "1500", "800"],
    "answer": 1
  },
  {
    "text": "what is the smallest integer e greater than 1 that leaves a remainder of 1 when divided by any of the integers 6 , 8 , and 10 ?",
    "options": ["21", "41", "121", "241"],
    "answer": 2
  },
  {
    "text": "in 60 litres mixture milk and water are in the ratio 3 : 1 . after adding how many liters of water its ratio will become 3 : 2",
    "options": ["1", "15", "7", "5"],
    "answer": 1
  },
  {
    "text": "ann and bob drive separately to a meeting . ann ' s average driving speed is greater than bob ' s avergae driving speed by one - third of bob ' s average driving speed , and ann drives twice as many miles as bob . what is the ratio r of the number of hours ann spends driving to the meeting to the number of hours bob spends driving to the meeting ?",
    "options": ["8 : 3", "3 : 2", "4 : 3", "2 : 3"],
    "answer": 1
  },
  {
    "text": "if length of a rectangle is equal to side of a square and breadth of rectangle is half of length . if area of square is 36 sq . m . calculate the area of rectangle ?",
    "options": ["18", "20", "27", "32"],
    "answer": 0
  },
  {
    "text": "in a basketball game , dhoni scored 30 points more than dravid , but only half as many points as shewag . if the 3 players scored a combined total of 150 points , how many points did dhoni score ?",
    "options": ["50", "52", "35", "40"],
    "answer": 4
  },
  {
    "text": "on a partly cloudy day , milton decides to walk back from work . when it is sunny , he walks at a speed of s miles / hr ( s is an integer ) and when it gets cloudy , he increases his speed to ( s + 1 ) miles / hr . if his average speed for the entire distance is 2.8 miles / hr , what fraction of the total distance did he cover while the sun was shining on him ?",
    "options": ["1 / 5", "1 / 6", "1 / 4", "1 / 7"],
    "answer": 3
  },
  {
    "text": "if 35 % of a number is 12 less than 50 % of that number , then the number is ?",
    "options": ["40", "50", "60", "80"],
    "answer": 3
  },
  {
    "text": "the average of 10 consecutive odd numbers is 22 . what is the sum of the first 3 numbers ?",
    "options": ["13", "45", "17", "220"],
    "answer": 1
  },
  {
    "text": "4 out of 8 employees are capable of doing a certain task . sixty percent of the 5 employees , including the 4 who are capable , are assigned to a project involving this task . what percentage of employees assigned to the project are not capable ?",
    "options": ["43.33 %", "33.33 %", "13.33 %", "38.33 %"],
    "answer": 4
  },
  {
    "text": "the parameter of a square is equal to the perimeter of a rectangle of length 16 cm and breadth 14 cm . find the circumference of a semicircle whose diameter is equal to the side of the square . ( round off your answer to two decimal places",
    "options": ["34", "35", "56", "67"],
    "answer": 4
  },
  {
    "text": "a flagstaff 17.5 m high casts a shadow of length 40.25 m . the height of the building , which casts a shadow of length 28.75 m under similar conditions will be :",
    "options": ["10 m", "12.5 m", "17.5 m", "21.25 m"],
    "answer": 1
  },
  {
    "text": "the l . c . m of 22 , 54 , 108 , 135 and 198 is",
    "options": ["5942", "2887", "5940", "2888"],
    "answer": 2
  },
  {
    "text": "a certain list consists of 21 different numbers . if n is in the list and n is 4 times the average ( arithmetic mean ) of the other 20 numbers in the list , then n is what fraction t of the sum of the 21 numbers in the list ?",
    "options": ["1 / 20", "1 / 6", "1 / 5", "4 / 21"],
    "answer": 1
  },
  {
    "text": "if ' a ' completes a piece of work in 3 days , which ' b ' completes it in 5 days and ' c ' takes 10 days to complete the same work . how long will they take to complete the work , if they work together ?",
    "options": ["1.5 days", "4.5 days", "7 days", "9.8 days"],
    "answer": 0
  },
  {
    "text": "if a * b = 2 a - 3 b + ab , then 3 * 5 + 5 * 3 is equal to :",
    "options": ["22", "37", "38", "398"],
    "answer": 0
  },
  {
    "text": "the ratio of the ages of maala and kala is 3 : 5 . the total of their ages is 3.2 decades . the proportion of their ages after 0.8 decades will be [ 1 decade = 10 years ]",
    "options": ["6 : 5", "5 : 7", "4 : 5", "7 : 9"],
    "answer": 1
  },
  {
    "text": "a rectangular box measures internally 1.6 m long , 1 m broad and 60 cm deep . the number of cubical box each of edge 20 cm that can be packed inside the box is :",
    "options": ["30", "60", "90", "120"],
    "answer": 3
  },
  {
    "text": "bucket p has thrice the capacity as bucket q . it takes 60 turns for bucket p to fill the empty drum . how many turns it will take for both the buckets p & q , having each turn together to fill the empty drum ?",
    "options": ["45", "53", "54", "46"],
    "answer": 0
  },
  {
    "text": "find compound interest on rs . 7500 at 4 % per year for 2 years , compounded annually .",
    "options": ["812", "712", "412", "512"],
    "answer": 4
  },
  {
    "text": "6 computers , each working at the same constant rate , together can process a certain amount of data in 9 days . how many additional computers , each working at the same constant rate , will be needed to process the same amount of data in 6 days ?",
    "options": ["3", "5", "6", "9"],
    "answer": 0
  },
  {
    "text": "determine the value of ( 27 / 31 * 31 / 27 ) * 3",
    "options": ["0", "1", "2", "3"],
    "answer": 3
  },
  {
    "text": "a rectangular grassy plot 110 m by 65 cm has a gravel path . 5 cm wide all round it on the inside . find the cost of gravelling the path at 80 paise per sq . mt",
    "options": ["680", "378", "267", "299"],
    "answer": 0
  },
  {
    "text": "in 12 pumps can raise 1218 tons of water in 11 days of 9 hrs each , how many pumps will raise 2030 tons of water in 12 days of 11 hrs each ?",
    "options": ["12", "15", "18", "21"],
    "answer": 1
  },
  {
    "text": "one of the longest sides of the triangle is 20 m , the other side is 10 m . area of the triangle is 80 m ^ 2 . what is the another side of the triangle ?",
    "options": ["2 sqrt ( 61 )", "2 sqrt ( 62 )", "2 sqrt ( 63 )", "2 sqrt ( 64 )"],
    "answer": 4
  },
  {
    "text": "anne earned $ 3 an hour baby - sitting , and $ 4 an hour working in the garden . last week she did baby - sitting for 5 hours and garden work for 3 hours . how much more money does she need to buy a game that costs $ 35 ?",
    "options": ["$ 8", "$ 12", "$ 6", "$ 21"],
    "answer": 0
  },
  {
    "text": "if a coin is flipped , the probability that the coin will land heads is 1 / 2 . if the coin is flipped 5 times , what is the probability that it will land tails up on the first 4 flips and not on the last flip ?",
    "options": ["1 / 8", "1 / 32", "1 / 4", "1 / 2"],
    "answer": 1
  },
  {
    "text": "two brothers take the same route to school on their bicycles , one gets to school in 25 minutes and the second one gets to school in 36 minutes . the ratio of their speeds is",
    "options": ["4 : 5", "1 : 2", "6 : 7", "5 : 6"],
    "answer": 3
  },
  {
    "text": "the ratio of the cost price and the selling price is 4 : 5 . the profit percent is ?",
    "options": ["17", "56", "25", "28"],
    "answer": 2
  },
  {
    "text": "what is the value of ( 44444445 * 88888885 * 44444442 + 44444438 ) / 44444444 ^ 2",
    "options": ["88888883", "88888827", "16992677", "88888237"],
    "answer": 0
  },
  {
    "text": "4 shepherds were watching over the flocks and they were commenting on how many sheep they each had . if ram had 3 more sheep than he would have one less than rahul . wheras akar has the same number as the other 3 shepherds put togeher . if john had 3 less sheep he would have exactly trile the number of ram . if they were evenly distributed if they would each have 11 seep how many sheep did ram have ?",
    "options": ["2", "3", "4", "5"],
    "answer": 1
  }
];
