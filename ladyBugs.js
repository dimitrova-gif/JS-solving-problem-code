function ladybugSimulation(input) {
    const fieldSize = Number(input[0]);
    const field = new Array(fieldSize).fill(0);

    
    const initialIndexes = input[1].split(' ').map(Number);
    for (const index of initialIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

   
    for (let i = 2; i < input.length; i++) {
        const [startStr, direction, flyLengthStr] = input[i].split(' ');
        const startIndex = Number(startStr);
        let flyLength = Number(flyLengthStr);

        if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
            continue; 
        }

       
        field[startIndex] = 0;

        if (flyLength < 0) {
            
            flyLength = Math.abs(flyLength);
            direction === 'right' ? direction = 'left' : direction = 'right';
        }

        let nextIndex = direction === 'right' ? startIndex + flyLength : startIndex - flyLength;

        
        while (nextIndex >= 0 && nextIndex < fieldSize) {
            if (field[nextIndex] === 0) {
                field[nextIndex] = 1;
                break;
            }
            nextIndex = direction === 'right' ? nextIndex + flyLength : nextIndex - flyLength;
        }
    }

    console.log(field.join(' '));
}


ladybugSimulation([ 3, '0 1',

'0 right 1',

'2 right 1' ])