
export function getExercises() {
    return exercises;
}
export function getBodyGroups() {
    return [
        {id: 1, title: 'Push-muscles', subTitle: 'Chest, shoulders, and triceps'},
        {id: 2, title: 'Pull-muscles', subTitle: 'Back, biceps, and grip'},
        {id: 3, title: 'Core', subTitle: 'Abdominals and lower back'},
        {id: 4, title: 'Front of Legs', subTitle: 'Quads'},
        {id: 5, title: 'Back of Legs', subTitle: 'Butt and hamstrings'}
    ];
}
export function getMuscleGroups() {
    return [
        {id: 1, title: 'Quads'},
        {id: 2, title: 'Hamstrings'},
        {id: 3, title: 'Glutes'},
        {id: 4, title: 'Chest'},
        {id: 5, title: 'Shoulders'},
        {id: 6, title: 'Triceps'},
        {id: 7, title: 'Back'},
        {id: 8, title: 'Biceps'},
        {id: 9, title: 'Abs'},
        {id: 10, title: 'Lower back'}
    ];
}
export function getDifficultyLevels() {
    return [
        {id: 1, title: 'Beginner'},
        {id: 2, title: 'Intermediate'},
        {id: 3, title: 'Advanced'},
    ];
}
export function getEquipments() {
    return [
        {id: 1, title: 'Body weight'},
        {id: 2, title: 'Dumbbell'},
        {id: 3, title: 'Skipping rope'}
    ];
}
export function getExerciseTypes() {
    return [
        {id: 1, title: 'Strength'},
        {id: 2, title: 'Cardio'},
        {id: 3, title: 'Stretching'}
    ];
}

const exercises = [
    {
        stringId: 'bodyweight-lunge',
        component: 'BodyweightLunge',
        title: 'Bodyweight Lunge',
        link: 'https://www.bodybuilding.com/exercises/bodyweight-lunge',
        difficulty: 1,
        bodyGroup: 4,
        mainMuscleGroup: 1,
        equipment: 1,
        exerciseType: 1
    },
    {
        stringId: 'bdumbbell-squat',
        component: 'DumbbellSquat',
        title: 'Dumbbell Squat',
        link: 'https://www.bodybuilding.com/exercises/dumbbell-squat',
        difficulty: 1,
        bodyGroup: 4,
        mainMuscleGroup: 1,
        equipment: 2,
        exerciseType: 1
    },
    {
        stringId: 'burpee',
        component: 'Burpee',
        title: 'Burpee',
        link: 'https://www.bodybuilding.com/exercises/burpee',
        difficulty: 1,
        bodyGroup: 4,
        mainMuscleGroup: 1,
        equipment: 2,
        exerciseType: 1
    },
    {
        stringId: 'romanian-deadlift-with-dumbbells',
        component: 'RomanianDeadliftWithDumbbells',
        title: 'Romanian Deadlift With Dumbbells',
        link: 'https://www.bodybuilding.com/exercises/romanian-deadlift-with-dumbbells',
        difficulty: 2,
        bodyGroup: 5,
        mainMuscleGroup: 2,
        equipment: 2,
        exerciseType: 1
    },
];