# Поиск строки в матрице
## Задача
Реализуйте функцию `findWord(text, data)`, которая отвечает есть ли в матрице букв `data` слово `text`. Слово может читаться в любых направлениях (вверх, вниз, влево, вправо), но не может изгибаться в процессе чтения.

# Пример вызова
```
findWord(
    "мал",
    [
        "альфа",
        "гамма",
        "омега"
    ]
));
```
Результат `true` 

## Как сдавать задачу.
Разместите ваше решение в файле `solution.js` репозитория. Вам **запрещено** изменять любые файлы, кроме этого файла. Выполните `commit` и `push` вашего изменения в ветку `master` репозитория `http://tasks.javascript.ninja/simple-matrix-search`. Если Вы успешно решили задачу, то в ответе сервера о результатах `push` будет ссылка для регистрации на курс.

Тест запускается в **специально ограниченной среде**. Убедитесь, что вы не вызываете внутри вашей функции `findWord` даже `console.log` иначе получите ошибку выполнения.

## Ограничения на входные данные
* `matrix` - массив строк. Всего `M` строк, каждая длиной `N`. `M` и `N` строго больше 0 и строго меньше 100
* Строки состоят только из букв русского алфавита в нижнем регистре
* `text` - строка для поиска длиной строго больше 0 и строго меньше 100

