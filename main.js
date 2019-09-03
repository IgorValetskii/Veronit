function square (a,b,c) {
    let d = b*b - 4*a*c;
    if(a == 0) {
        if (b != 0) {
            let x = -c / b;
            console.log(`
        коэффициенты : a = ${a}, b = ${b}, c = ${c}
        уравнение становится линейным
        x =${x}`)

        } else if (c == 0) {
            console.log('x = любое число')
        }
        else {
            console.log('Нет решений')
        }
    }
    else {

        if (d > 0) {
            let x1 = (-b + Math.sqrt(d)) / (2 * a);
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            console.log(`
        коэффициенты : a = ${a}, b = ${b}, c = ${c}
        дискриминант D = ${d}
        2 корня:
        x1 = ${x1}
        x2 =${x2}`);
        }

        if (d == 0) {
            let x = -b / 2 * a;
            console.log(`
        коэффициенты : a = ${a}, b = ${b}, c = ${c}
        дискриминант D = ${d}
        1 корень:
        x =${x}`)
        }

        if (d < 0) {
            d = -d;
            let x1 = `(-${b} + ${Math.sqrt(d)}i) / ${(2 *a)}`;
            let x2 = `(-${b} - ${Math.sqrt(d)}i) / ${(2 *a)}`;
            console.log(`
        коэффициенты : a = ${a}, b = ${b}, c = ${c}
        дискриминант D = -${d} 
        т.к. дискриминант меньше 0, существуют 2 сопряженных комплексных корня:
        
        x1 = ${x1}
        x2 =${x2}`);
        }
    }
}

square(3,5,3);