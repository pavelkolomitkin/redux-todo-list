const categories = [
    {
        id: 1,
        title: 'Home'
    },
    {
        id: 2,
        title: 'Work'
    },
    {
        id: 3,
        title: 'Other'
    }
];

const taskStatuses = [
    {
        id: 'normal',
        title: 'Normal'
    },
    {
        id: 'low',
        title: 'Low'
    },
    {
        id: 'high',
        title: 'High'
    }
];

const tasks = [
    {
        id: 1,
        status: taskStatuses[0],
        category: categories[1],
        title: 'Play playstation',
        items: [
            {
                id: 1,
                title: 'Play Mortal Combat',
                isComplete: false
            },
            {
                id: 2,
                title: 'Play GTA',
                isComplete: true
            },
            {
                id: 3,
                title: 'Play soccer',
                isComplete: false
            }
        ]
    },
    {
        id: 2,
        status: taskStatuses[2],
        category: categories[1],
        title: 'Programming',
        items: [
            {
                id: 4,
                title: 'Fix bus #23423',
                isComplete: true
            },
            {
                id: 5,
                title: 'Meeting',
                isComplete: false
            },
            {
                id: 6,
                title: 'Make estimation',
                isComplete: true
            }
        ]
    },
    {
        id: 3,
        status: taskStatuses[0],
        category: categories[2],
        title: 'Buy',
        items: [
            {
                id: 7,
                title: 'Milk',
                isComplete: false
            },
            {
                id: 8,
                title: 'Vegetables',
                isComplete: true
            },
            {
                id: 9,
                title: 'Juice',
                isComplete: true
            }
        ]
    }
];



export default {
    categories: categories,
    tasks: tasks,
    taskStatuses: taskStatuses
};
