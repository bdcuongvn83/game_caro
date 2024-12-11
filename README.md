# game_caro


https://github.com/user-attachments/assets/0f5fdbc7-9865-4e76-8a8e-eec005d4b010
# structure source code:
## Layout game : render 3x3 squares, each square has event and contain value according matrix 3x3
![image](https://github.com/user-attachments/assets/32f8b70e-918c-4ace-842e-a86090e3da6d)
## When click on squares, 
### update value to selected square "X", "O", 
### render layout
### calculate winner, update status player winner

![image](https://github.com/user-attachments/assets/de24c78b-67be-42a7-9e98-08ee5297fe5b)
![image](https://github.com/user-attachments/assets/1dd505d5-4f81-43a2-8978-c94dac3e40cb)

### Algorithm for determining the winner:
Since this is a basic scenario, consider the matrix:
- Horizontal row: [0, 1, 2] or [3, 4, 5] or [6, 7, 8] — if the values are the same, the player wins.
- Vertical column: [0, 3, 6] or [1, 4, 7] or [2, 5, 8] — if the values are the same, the player wins.
- Diagonal row: [0, 4, 8] or [2, 4, 6] — if the values are the same, the player wins.

![image](https://github.com/user-attachments/assets/86312854-098e-4c15-9a6f-a4470249dd42)



# Result
# Initial game
![image](https://github.com/user-attachments/assets/4ce55a15-4a8c-48f1-a3dd-85986be5a6a3)

# case1 Player X wins with a horizontal row.
![image](https://github.com/user-attachments/assets/bc5a9737-84cc-4f1f-9563-3c3ada2d57cd)

# Case2: Player O wins with a diagonal line.
![image](https://github.com/user-attachments/assets/a659a25c-e58a-4e4c-bcb7-de9ede17f922)

# Case3: Player O wins with a vertical column.

![image](https://github.com/user-attachments/assets/8287a2da-b638-48c5-8f3d-f8ec7387c7d4)


