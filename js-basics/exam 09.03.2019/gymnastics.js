function solve(input){
    let [country, device] = input;
    let table = {
        'Russia': {
            'ribbon': {
                'difficulty': 9.100,
                'performance': 9.400
            },
            'hoop': {
                'difficulty': 9.300,
                'performance': 9.800
            },
            'rope': {
                'difficulty': 9.600,
                'performance': 9.000
            }
        },
        'Bulgaria': {
            'ribbon': {
                'difficulty': 9.600,
                'performance': 9.400
            },
            'hoop': {
                'difficulty': 9.550,
                'performance': 9.750
            },
            'rope': {
                'difficulty': 9.500,
                'performance': 9.400
            }
        },
        'Italy': {
            'ribbon': {
                'difficulty': 9.200,
                'performance': 9.500
            },
            'hoop': {
                'difficulty': 9.450,
                'performance': 9.350
            },
            'rope': {
                'difficulty': 9.700,
                'performance': 9.150
            }
        }
    }

    let difficultyPoints = table[country][device]['difficulty'];
    let performancePoints = table[country][device]['performance'];
    let fullPoints = difficultyPoints + performancePoints;
    let procent = (1 - (fullPoints / 20)) * 100;
    console.log(`The team of ${country} get ${fullPoints.toFixed(3)} on ${device}.`);
    console.log(`${procent.toFixed(2)}%`)
}

solve(['Bulgaria', 'ribbon']);