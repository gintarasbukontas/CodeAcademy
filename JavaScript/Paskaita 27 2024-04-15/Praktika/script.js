const firstUpperCase = /\b[A-Z][a-z]*\b/;
// Randa visus zodzius su pirma didziaja raide

const allUpperCase = /\b[A-Z]+\b/;
// Randa visus zodzius kuriu raides didziosios ir neturi skaiciu ar kitu zenklu

const allUpperCaseCanEndInNumbers = /\b[A-Z]+\d*\b/;
// Randa visus zodzius kuriu raides didziosios ir gali baigtis skaiciais

const shortNumbers = /\b\d{4}\b/;
// Randa visus elementus kurie susideda is 4 skaiciu

const longPhoneNumbers = /\+\d{3}\s\d\s\d{3}\s\d{4}/;
// Randa visus elementus atitinkancius ilgaji telefono numerio formata pvz.: +370 5 268 4444

const faxNumber = /\(\d{1,2}\s\d{1,2}\)\s\d{3}\s\d{4}/;
// Randa fakso numerius, kuriu formatas pvz.: (8 5) 258 2700

const longPhoneNumbersAndFax =
  /(?:\+\d{3}\s\d\s\d{3}\s\d{4}|\(\d{1,2}\s\d{1,2}\)\s\d{3}\s\d{4})/;
// Randa visus ilgo formato telefono numerius ir faksus

const bankAccount = /\bLT\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\b/;
// Randa visas banko saskaitas prasidedancias LT

const PVM = /\bLT\d{9}\b/;
// Randa visus PVM moketojo kodus prasidedancius LT

const endsInColon = /[^:\s]+(?=:)/;
// Randa visus zodzius kurie yra pries simboli : pvz.: "adresas:"

const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
// Randa visus emailus
