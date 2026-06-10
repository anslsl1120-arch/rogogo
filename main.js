document.getElementById('dark-mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('dark-mode-btn');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ 라이트 모드';
    } else {
        btn.textContent = '🌙 다크 모드';
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);

    const container = document.getElementById('lotto-numbers');
    container.innerHTML = '';

    numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        
        if (num <= 10) ball.classList.add('ball-10');
        else if (num <= 20) ball.classList.add('ball-20');
        else if (num <= 30) ball.classList.add('ball-30');
        else if (num <= 40) ball.classList.add('ball-40');
        else ball.classList.add('ball-45');

        ball.textContent = num;
        container.appendChild(ball);
    });
});
