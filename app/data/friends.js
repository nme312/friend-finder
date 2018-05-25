//friends data

var friends = [
    {
        "name": "John Doe",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            4,
            3,
            2,
            1,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Jane Doe",
        "photo": "naaah",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Jimmy Doe",
        "photo": "naaah",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }
]

module.exports = friends;

var potentialMatches = [            // existing possible matches for user
    {
        name: "joe",
        answers: [1, 3, 2, 4, 1]
    },
    {
        name: "rick",
        answers: [4, 1, 4, 2, 3]
    },
    {
        name: "lou",
        answers: [1, 1, 4, 5, 2]
    }
]