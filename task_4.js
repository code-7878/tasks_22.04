
// Описание:
// Нужно заменить в тексте все цифры на знаки восклицания.

// Ввод:
// Текст с числами.

// Вывод:
// Текст со знаками "!".

// Пример:
// Текст с числами 2 и 3 до 5. => Текст с числами ! и ! до !.

// Тесты:
// getResult('Текст с числами 2 и 3 до 5.') == Текст с числами ! и ! до !.


function aboba(str) {
    const a = /\d/g;
    return( str.replace(a, '!'));
    
}

console.log(aboba('a2a2'))
