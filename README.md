# Hangman

Hangman is a word guessing game built using React + TypeScript + Vite.  

It's a concept of either guess the word or hang. 

I got an Idea of making this game from a [youtube tutorial](https://www.youtube.com/watch?v=-ONUyenGnWw&ab_channel=WebDevSimplified), but instead of copy pasting code from there, I tried to implement it on my own. Although I took some help from tutorial in implementing some functionalities but it's not completely same.  

The steps and process I followed to build this game project is also different from which is shown in tutorial. This can be verified from [commit history](https://github.com/muhafiz5814/hangman/commits/master/) of this project.

## Game overview

- Once a player lands on the page, a random word of length between 4 to 8 will be selected.
- At first word will not be visible to the player but length of the word will be known to the player with the help of blank spaces available for each letter of the word.
- Player will have to guess the word in limited guesses.

## Rules for Hangman

- At first, player will only be shown blank spaces equal to the length of the word which is to be guessed.
- To guess a letter, player can either select a key from on-screen keybaord or press a key on physical keyboard of their system.
- If the player has guessed a letter which is present in the word, it's appearence(s) in the word will be visible to the player above respective blank space(s).
- If the player tries to select the same correct letter again, it will have no effect.
- If the player has guessed a letter which is **not** present in the word, respective key of the letter on keyboard will be disabled and player will not be able to select that letter again.
- Player can make maximum `5` incorrect guesses before winning or losing the game as `6th` incorrect guess will be the last and game will be over.
- With every incorrect guess, 1 body part of the hanging man will be visible on the screen.
- After `6` incorrect guesses, all body parts of the hanging man will be visible, it means player has not guessed the word and lost the game.
- If a player is able to guess all the letters of the word before a full hanging man is visible on screen, player has won the game.
- To try again with new random word, player can `press Enter` or `Refresh` the page. (Remember, once a new word has been loaded, pressing Enter will **not** have any effect and it will not reset the game to a new word untill the game reaches to a result, either win or lose. Refreshing the page will still reset the game and will reload a new word at any stage of the game)