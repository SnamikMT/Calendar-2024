const colors = ['#86A3C1', '#AEE4BA', '#AFCCD2', '#B0BFE8', '#CDE1EC'];
let colorIndex = 0;

function interpolateColor(color1, color2, factor) {
    const hex = function(x) {
        x = x.toString(16);
        return (x.length === 1) ? '0' + x : x;
    };

    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    const r = Math.ceil(r1 * (1 - factor) + r2 * factor);
    const g = Math.ceil(g1 * (1 - factor) + g2 * factor);
    const b = Math.ceil(b1 * (1 - factor) + b2 * factor);

    return `#${hex(r)}${hex(g)}${hex(b)}`;
}

function changeBackgroundColor() {
    const color1 = colors[colorIndex];
    const color2 = colors[(colorIndex + 1) % colors.length];

    const factor = Math.random(); // или любое другое значение, если вы хотите фиксированный переход

    const newColor = interpolateColor(color1, color2, factor);

    document.body.style.transition = 'background-color 1s linear';
    document.body.style.backgroundColor = newColor;

    colorIndex = (colorIndex + 1) % colors.length; // переход к следующему цвету
}

setInterval(changeBackgroundColor, 2000);
