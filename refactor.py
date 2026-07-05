import re

with open('app.js', 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    l = line
    # state declaration
    if "N: 16," in l and i < 150:
        l = l.replace("N: 16,", "N: 16,\n    cols: 16,\n    rows: 16,")
    
    if "state.grid = new Int8Array(state.N * state.N);" in l:
        l = l.replace("state.N * state.N", "state.cols * state.rows")
    if "return row * state.N + col;" in l:
        l = l.replace("state.N", "state.cols")
    if "if (row < 0 || row >= state.N || col < 0 || col >= state.N)" in l:
        l = l.replace("row >= state.N", "row >= state.rows").replace("col >= state.N", "col >= state.cols")

    if "const cell = size / state.N;" in l:
        l = l.replace("size / state.N", "stageRect.cell")
    if "for (let row = 0; row < state.N; row += 1)" in l:
        l = l.replace("state.N", "state.rows")
    if "for (let col = 0; col < state.N; col += 1)" in l:
        l = l.replace("state.N", "state.cols")
        
    if "for (let i = 1; i < state.N; i += 1)" in l:
        # Drawing grid lines
        pass # Will handle manually if needed, or leave it. Actually need to draw rows and cols separately.

    if "nextCol < 0 || nextCol >= state.N || nextRow < 0 || nextRow >= state.N" in l:
        l = l.replace("nextCol >= state.N", "nextCol >= state.cols").replace("nextRow >= state.N", "nextRow >= state.rows")

    if "ball.x + ball.radius > state.N" in l:
        l = l.replace("state.N", "state.cols")
    if "ball.x = state.N - ball.radius;" in l:
        l = l.replace("state.N", "state.cols")
    if "ball.y + ball.radius > state.N" in l:
        l = l.replace("state.N", "state.rows")
    if "ball.y = state.N - ball.radius;" in l:
        l = l.replace("state.N", "state.rows")
    
    if "clampInt(Math.floor(ball.x - ball.radius), 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.cols - 1")
    if "clampInt(Math.floor(ball.x + ball.radius), 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.cols - 1")
    if "clampInt(Math.floor(ball.y - ball.radius), 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.rows - 1")
    if "clampInt(Math.floor(ball.y + ball.radius), 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.rows - 1")

    if "x = ((event.clientX - rect.left) / rect.width) * state.N" in l:
        l = l.replace("state.N", "state.cols")
    if "y = ((event.clientY - rect.top) / rect.height) * state.N" in l:
        l = l.replace("state.N", "state.rows")
    if "inside: x >= 0 && x < state.N && y >= 0 && y < state.N" in l:
        l = l.replace("x < state.N", "x < state.cols").replace("y < state.N", "y < state.rows")
        
    if "clamp(point.x, state.radius, state.N - state.radius)" in l:
        l = l.replace("state.N", "state.cols")
    if "clamp(point.y, state.radius, state.N - state.radius)" in l:
        l = l.replace("state.N", "state.rows")
        
    if "clamp(point.x, 0, state.N)" in l:
        l = l.replace("state.N", "state.cols")
    if "clamp(point.y, 0, state.N)" in l:
        l = l.replace("state.N", "state.rows")
        
    if "clampInt(point.col, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.cols - 1")
    if "clampInt(point.row, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.rows - 1")

    if "r < state.N - 1" in l:
        l = l.replace("state.N", "state.rows")
    if "c < state.N - 1" in l:
        l = l.replace("state.N", "state.cols")

    if "col >= 0 && col < state.N && row >= 0 && row < state.N" in l:
        l = l.replace("col < state.N", "col < state.cols").replace("row < state.N", "row < state.rows")

    if "clamp(Number(x), state.radius, state.N - state.radius)" in l:
        l = l.replace("state.N", "state.cols")
    if "clamp(Number(y), state.radius, state.N - state.radius)" in l:
        l = l.replace("state.N", "state.rows")

    if "magnitude = state.N * 0.18" in l:
        l = l.replace("state.N", "state.rows") # Base scale is rows
    if "bx = state.N * 0.5" in l:
        l = l.replace("state.N", "state.cols")
    if "by = state.N * 0.42" in l:
        l = l.replace("state.N", "state.rows")
        
    if "for (let r = 0; r < state.N; r++)" in l:
        l = l.replace("state.N", "state.rows")
    if "for (let c = 0; c < state.N; c++)" in l:
        l = l.replace("state.N", "state.cols")

    if "col = clampInt(col, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.cols - 1")
    if "row = clampInt(row, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.rows - 1")

    if "nextX >= 0 && nextX < state.N && nextY >= 0 && nextY < state.N" in l:
        l = l.replace("nextX < state.N", "nextX < state.cols").replace("nextY < state.N", "nextY < state.rows")

    if "clampInt(bug.col, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.cols - 1")
    if "clampInt(bug.row, 0, state.N - 1)" in l:
        l = l.replace("state.N - 1", "state.rows - 1")
    
    if "const N = state.N;" in l:
        # In generator logic
        pass

    if "clamp(col / Math.max(1, state.N - 1), 0, 1)" in l:
        l = l.replace("state.N", "state.cols")
    if "clamp(row / Math.max(1, state.N), 0, 1)" in l:
        l = l.replace("state.N", "state.rows")

    new_lines.append(l)

with open('app.js', 'w') as f:
    f.writelines(new_lines)
