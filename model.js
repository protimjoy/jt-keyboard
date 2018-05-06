function getDistanceMatrix(keyboard_type)
{
    if (keyboard_type == 'normal_left') 
        return normal_left_distance_matrix();
    else if (keyboard_type == 'normal_right')
        return normal_right_distance_matrix();
    else if(keyboard_type == 'advance_left')
        return advance_left_distance_matrix();
    else if(keyboard_type == 'advance_right')
        return advance_right_distance_matrix();
}

function normal_left_distance_matrix()
{
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 21.27, 22.68, 23.07, 21.66, 23.07, 28.36, 29.77, 31.18, 30.29, 28.88, 30.29, 12.86, 7.05],
        [0, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 21.27, 22.68, 23.07, 21.66, 23.07, 28.36, 29.77, 31.18, 30.29, 28.88, 11.45, 5.64],
        [0, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 14.44, 8.63, 14.18, 14.31, 14.44, 21.53, 21.4, 21.27, 21.4, 21.53, 28.62, 28.49, 28.36, 28.49, 28.62, 28.75, 10.04, 4.23],
        [0, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 21.66, 21.53, 21.4, 21.27, 21.4, 28.75, 28.62, 28.49, 28.36, 28.49, 28.62, 8.63, 2.82],
        [0, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 23.07, 21.66, 21.53, 21.4, 21.27, 28.88, 28.75, 28.62, 28.49, 28.36, 29.77, 7.22, 1.41],
        [0, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 21.27, 21.66, 21.53, 21.66, 23.07, 24.48, 7.05, 12.86],
        [0, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 14.31, 14.18, 14.31, 14.44, 15.85, 21.4, 21.27, 21.4, 21.53, 21.66, 23.07, 5.64, 11.45],
        [0, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 10.04, 7.22, 7.09, 7.22, 8.63, 14.44, 14.31, 14.18, 14.31, 14.44, 21.53, 21.4, 21.27, 21.4, 21.53, 22.94, 4.23, 10.04],
        [0, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 21.66, 21.53, 21.4, 21.27, 21.4, 22.81, 2.82, 8.63],
        [0, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 23.07, 21.66, 21.53, 21.4, 21.27, 22.68, 1.41, 7.22],
        [0, 14.18, 11.45, 14.44, 15.85, 17.26, 7.09, 7.22, 10.04, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 18.67, 7.05, 18.67],
        [0, 14.31, 14.18, 8.63, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 14.31, 14.18, 14.31, 14.44, 15.85, 17.26, 5.64, 17.26],
        [0, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 14.44, 14.31, 14.18, 14.31, 14.44, 15.85, 4.23, 15.85],
        [0, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 15.72, 2.82, 14.44],
        [0, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 15.59, 1.41, 14.31],
        [0, 21.27, 17.26, 21.53, 21.66, 23.07, 14.18, 14.31, 14.44, 15.85, 17.26, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 12.86, 7.05, 24.48],
        [0, 22.68, 21.27, 21.4, 21.53, 21.66, 14.31, 14.18, 14.31, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 11.45, 5.64, 23.07],
        [0, 23.07, 22.68, 21.27, 21.4, 21.53, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 10.04, 4.23, 21.66],
        [0, 21.66, 23.07, 21.4, 21.27, 21.4, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 21.53],
        [0, 23.07, 21.66, 21.53, 21.4, 21.27, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 7.22, 1.41, 21.4],
        [0, 28.36, 23.07, 28.62, 28.75, 28.88, 21.27, 21.4, 21.53, 21.66, 23.07, 14.18, 14.31, 14.44, 15.85, 17.26, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.05, 12.86, 30.29],
        [0, 29.77, 28.36, 28.49, 28.62, 28.75, 21.66, 21.27, 21.4, 21.53, 21.66, 14.31, 14.18, 14.31, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 5.64, 11.45, 28.88],
        [0, 31.18, 29.77, 28.36, 28.49, 28.62, 21.53, 21.4, 21.27, 21.4, 21.53, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 4.23, 10.04, 28.75],
        [0, 30.29, 31.18, 28.49, 28.36, 28.49, 21.66, 21.53, 21.4, 21.27, 21.4, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 28.62],
        [0, 28.88, 30.29, 28.62, 28.49, 28.36, 23.07, 21.66, 21.53, 21.4, 21.27, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 1.41, 7.22, 28.49],
        [0, 30.29, 28.88, 28.75, 28.62, 29.77, 24.48, 23.07, 22.94, 22.81, 22.68, 18.67, 17.26, 15.85, 15.72, 15.59, 12.86, 11.45, 10.04, 8.63, 7.22, 7.05, 5.64, 4.23, 2.82, 1.41, 0, 7.09, 28.36],
        [0, 12.86, 11.45, 10.04, 8.63, 7.22, 7.05, 5.64, 4.23, 2.82, 1.41, 7.05, 5.64, 4.23, 2.82, 1.41, 7.05, 5.64, 4.23, 2.82, 1.41, 12.86, 11.45, 10.04, 8.63, 7.22, 7.09, 0, 7.09],
        [0, 7.05, 5.64, 4.23, 2.82, 1.41, 12.86, 11.45, 10.04, 8.63, 7.22, 18.67, 17.26, 15.85, 14.44, 14.31, 24.48, 23.07, 21.66, 21.53, 21.4, 30.29, 28.88, 28.75, 28.62, 28.49, 28.36, 7.09, 0]
    ];
}

function normal_right_distance_matrix()
{
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 21.27, 21.4, 21.53, 21.66, 23.07, 28.36, 28.49, 28.62, 28.75, 28.88, 30.29, 12.86, 7.05],
        [0, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 14.31, 14.18, 14.31, 14.44, 15.85, 21.4, 21.27, 21.4, 21.27, 21.66, 28.49, 28.36, 28.49, 28.62, 28.75, 28.88, 11.45, 5.64],
        [0, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 14.44, 14.31, 14.18, 14.31, 14.44, 14.31, 21.4, 21.27, 21.4, 21.53, 28.62, 28.49, 28.36, 28.49, 28.62, 28.75, 10.04, 4.23],
        [0, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 21.66, 21.53, 21.4, 21.27, 21.4, 28.75, 28.62, 28.49, 28.36, 28.49, 28.62, 8.63, 2.82],
        [0, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 23.07, 21.66, 21.53, 21.4, 21.27, 28.88, 28.75, 28.62, 28.49, 28.36, 28.49, 7.22, 1.41],
        [0, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 21.27, 21.4, 21.53, 21.66, 23.07, 24.48, 7.05, 12.86],
        [0, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 14.31, 14.18, 14.31, 14.44, 15.85, 21.4, 21.27, 21.4, 21.53, 21.66, 23.07, 5.64, 11.45],
        [0, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 14.44, 14.31, 14.18, 14.31, 14.44, 21.53, 21.4, 21.27, 21.4, 21.53, 21.66, 4.23, 10.04],
        [0, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 21.66, 21.53, 21.4, 21.27, 21.4, 21.53, 2.82, 8.63],
        [0, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 23.07, 21.66, 21.53, 21.4, 21.27, 21.4, 1.41, 7.22],
        [0, 14.18, 14.31, 14.44, 15.85, 17.26, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 14.18, 14.31, 14.44, 15.85, 17.26, 18.67, 7.05, 18.67],
        [0, 14.31, 14.18, 14.31, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 14.31, 14.18, 14.31, 14.44, 15.85, 17.26, 5.64, 17.26],
        [0, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 14.44, 14.31, 14.18, 14.31, 14.44, 15.85, 4.23, 15.85],
        [0, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 15.85, 14.44, 14.31, 14.18, 14.31, 14.44, 2.82, 14.44],
        [0, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 17.26, 15.85, 14.44, 14.31, 14.18, 14.31, 1.41, 14.31],
        [0, 21.27, 21.4, 14.31, 21.66, 23.07, 14.18, 14.31, 14.44, 15.85, 17.26, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.09, 7.22, 8.63, 10.04, 11.45, 12.86, 7.05, 24.48],
        [0, 21.4, 21.27, 21.4, 21.53, 21.66, 14.31, 14.18, 14.31, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 7.22, 7.09, 7.22, 8.63, 10.04, 11.45, 5.64, 23.07],
        [0, 21.53, 21.4, 21.27, 21.4, 21.53, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 7.22, 7.09, 7.22, 8.63, 10.04, 4.23, 21.66],
        [0, 21.66, 21.53, 21.4, 21.27, 21.4, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 10.04, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 21.53],
        [0, 23.07, 21.66, 21.53, 21.4, 21.27, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 11.45, 10.04, 8.63, 7.22, 7.09, 7.22, 1.41, 21.4],
        [0, 28.36, 28.49, 28.62, 28.75, 28.88, 21.27, 21.4, 21.53, 21.66, 23.07, 14.18, 14.31, 14.44, 15.85, 17.26, 7.09, 7.22, 8.63, 10.04, 11.45, 0, 1.41, 2.82, 4.23, 5.64, 7.05, 12.86, 30.29],
        [0, 28.49, 28.36, 28.49, 28.62, 28.75, 21.4, 21.27, 21.4, 21.53, 21.66, 14.31, 14.18, 14.31, 14.44, 15.85, 7.22, 7.09, 7.22, 8.63, 10.04, 1.41, 0, 1.41, 2.82, 4.23, 5.64, 11.45, 28.88],
        [0, 28.62, 28.49, 28.36, 28.49, 28.62, 21.53, 21.4, 21.27, 21.4, 21.53, 14.44, 14.31, 14.18, 14.31, 14.44, 8.63, 7.22, 7.09, 7.22, 8.63, 2.82, 1.41, 0, 1.41, 2.82, 4.23, 10.04, 28.75],
        [0, 28.75, 28.62, 28.49, 28.36, 28.49, 21.66, 21.53, 21.4, 21.27, 21.4, 15.85, 14.44, 14.31, 14.18, 14.31, 10.04, 8.63, 7.22, 7.09, 7.22, 4.23, 2.82, 1.41, 0, 1.41, 2.82, 8.63, 28.62],
        [0, 28.88, 28.75, 28.62, 28.49, 28.36, 23.07, 21.66, 21.53, 21.4, 21.27, 17.26, 15.85, 14.44, 14.31, 14.18, 11.45, 10.04, 8.63, 7.22, 7.09, 5.64, 4.23, 2.82, 1.41, 0, 1.41, 7.22, 28.49],
        [0, 30.29, 28.88, 28.75, 28.62, 28.49, 24.48, 23.07, 21.66, 21.53, 21.4, 18.67, 17.26, 15.85, 14.44, 14.31, 12.86, 11.45, 10.04, 8.63, 7.22, 7.05, 5.64, 4.23, 2.82, 1.41, 0, 7.09, 28.36],
        [0, 12.86, 11.45, 10.04, 8.63, 7.22, 7.05, 5.64, 4.23, 2.82, 1.41, 7.05, 5.64, 4.23, 2.82, 1.41, 7.05, 5.64, 4.23, 2.82, 1.41, 12.86, 11.45, 10.04, 8.63, 7.22, 7.09, 0, 7.09],
        [0, 7.05, 5.64, 4.23, 2.82, 1.41, 12.86, 11.45, 10.04, 8.63, 7.22, 18.67, 17.26, 15.85, 14.44, 14.31, 24.48, 23.07, 21.66, 21.53, 21.4, 30.29, 28.88, 28.75, 28.62, 28.49, 28.36, 7.09, 0]
    ];
}

function advance_left_distance_matrix()
{
    return  [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 14.31, 10.04, 7.22, 2.82, 7.09, 18.41, 7.22, 5.64, 15.59, 17.26, 10.04, 11.45, 8.63, 4.23, 14.44, 14.18, 8.63, 7.09, 1.41, 11.45, 14.18, 17, 19.82, 15.85, 15.59, 1.41, 14.31],
        [0, 14.31, 0, 21.53, 21.27, 14.31, 21.4, 28.62, 7.09, 15.85, 28.36, 4.23, 8.63, 21.66, 21.4, 21.4, 1.41, 28.49, 7.22, 7.22, 14.18, 10.04, 1.41, 28.49, 28.75, 2.82, 28.62, 8.63, 2.82],
        [0, 10.04, 21.53, 0, 2.82, 7.22, 4.23, 7.09, 14.44, 7.22, 8.63, 21.4, 7.09, 1.41, 1.41, 7.09, 21.4, 10.04, 14.31, 15.85, 8.63, 14.31, 21.66, 7.22, 7.22, 21.27, 11.45, 5.64, 23.07],
        [0, 7.22, 21.27, 2.82, 0, 7.22, 1.41, 8.63, 7.22, 10.04, 7.09, 21.66, 14.44, 4.23, 1.41, 8.63, 21.4, 7.22, 14.31, 14.31, 7.09, 15.85, 21.4, 7.22, 10.04, 21.53, 8.63, 2.82, 21.53],
        [0, 2.82, 14.31, 7.22, 7.22, 0, 8.63, 14.31, 7.22, 2.82, 14.31, 14.44, 7.22, 8.63, 7.09, 1.41, 14.18, 14.44, 7.09, 8.63, 1.41, 8.63, 14.44, 14.18, 14.44, 14.31, 15.85, 4.23, 15.85],
        [0, 7.09, 21.4, 4.23, 1.41, 8.63, 0, 10.04, 14.31, 11.45, 7.22, 23.07, 15.85, 5.64, 2.82, 10.04, 21.53, 7.09, 14.44, 14.18, 7.22, 17.26, 21.27, 8.63, 11.45, 21.66, 7.22, 1.41, 21.4],
        [0, 18.41, 28.62, 7.09, 8.63, 14.31, 10.04, 0, 21.53, 14.31, 2.82, 28.49, 21.27, 7.22, 7.22, 14.18, 28.49, 4.23, 21.4, 21.66, 14.44, 21.4, 28.75, 1.41, 1.41, 28.36, 5.64, 11.45, 36.1],
        [0, 7.22, 7.09, 14.44, 7.22, 7.22, 14.31, 21.53, 0, 10.04, 21.27, 10.04, 2.82, 15.85, 14.31, 8.63, 7.22, 21.4, 1.41, 1.41, 7.09, 4.23, 7.22, 21.27, 21.66, 8.63, 9.91, 2.82, 8.63],
        [0, 5.64, 15.85, 7.22, 10.04, 2.82, 11.45, 14.31, 10.04, 0, 15.85, 14.18, 7.22, 7.09, 8.63, 1.41, 14.44, 17.26, 8.63, 11.45, 4.23, 7.09, 17.26, 14.44, 14.18, 14.31, 18.67, 7.05, 18.67],
        [0, 15.59, 28.36, 8.63, 7.09, 14.31, 7.22, 2.82, 21.27, 15.85, 0, 28.75, 21.53, 10.04, 7.22, 14.44, 28.49, 1.41, 21.4, 21.4, 14.18, 21.66, 28.49, 1.41, 4.23, 28.62, 2.82, 8.63, 28.62],
        [0, 17.26, 4.23, 21.4, 21.66, 14.44, 23.07, 28.49, 10.04, 14.18, 28.75, 0, 7.22, 21.27, 21.53, 14.31, 2.82, 28.88, 8.63, 11.45, 15.85, 7.09, 5.64, 28.62, 28.36, 1.41, 30.29, 12.86, 7.05],
        [0, 10.04, 8.63, 7.09, 14.44, 7.22, 15.85, 21.27, 2.82, 7.22, 21.53, 7.22, 0, 14.31, 14.31, 7.09, 7.22, 21.66, 1.41, 4.23, 8.63, 1.41, 10.04, 21.4, 21.4, 7.09, 23.07, 5.64, 11.45],
        [0, 11.45, 21.66, 1.41, 4.23, 8.63, 5.64, 7.22, 15.85, 7.09, 10.04, 21.27, 14.31, 0, 2.82, 7.22, 21.53, 11.45, 14.44, 17.26, 10.04, 14.18, 23.07, 8.63, 7.09, 21.4, 12.86, 7.05, 24.48],
        [0, 8.63, 21.4, 1.41, 1.41, 7.09, 2.82, 7.22, 14.31, 8.63, 7.22, 21.53, 14.31, 2.82, 0, 7.22, 21.27, 8.63, 14.18, 2.82, 7.22, 14.44, 21.53, 7.09, 8.63, 21.4, 10.04, 4.23, 21.66],
        [0, 4.23, 21.4, 7.09, 8.63, 1.41, 10.04, 14.18, 8.63, 1.41, 14.44, 21.53, 7.09, 7.22, 7.22, 0, 14.31, 15.85, 7.22, 10.04, 2.82, 7.22, 15.85, 14.31, 14.31, 14.18, 17.26, 5.64, 17.26],
        [0, 14.44, 1.41, 21.4, 21.4, 14.18, 21.53, 28.49, 7.22, 14.44, 28.49, 2.82, 7.22, 21.53, 21.27, 14.31, 0, 28.62, 7.09, 8.63, 14.31, 8.63, 2.82, 28.36, 28.62, 1.41, 28.75, 10.04, 4.23],
        [0, 14.18, 28.49, 10.04, 7.22, 14.44, 7.09, 4.23, 21.4, 17.26, 1.41, 28.88, 21.66, 11.45, 8.63, 15.85, 28.62, 0, 21.53, 21.27, 14.31, 23.07, 28.36, 2.82, 5.64, 28.75, 1.41, 7.22, 28.49],
        [0, 8.63, 7.22, 14.31, 14.31, 7.09, 14.44, 21.4, 1.41, 8.63, 21.4, 8.63, 1.41, 14.44, 14.18, 7.22, 7.09, 21.53, 0, 2.82, 7.22, 2.82, 8.63, 21.27, 21.53, 7.22, 21.66, 4.23, 10.04],
        [0, 7.09, 7.22, 15.85, 14.31, 8.63, 14.18, 21.66, 1.41, 11.45, 21.4, 11.45, 4.23, 17.26, 14.44, 10.04, 8.63, 21.27, 2.82, 0, 7.22, 5.64, 7.09, 21.53, 23.07, 10.04, 14.31, 1.41, 7.22],
        [0, 1.41, 14.18, 8.63, 7.09, 1.41, 7.22, 14.44, 7.09, 4.23, 14.18, 15.85, 8.63, 10.04, 7.22, 2.82, 14.31, 14.31, 7.22, 7.22, 0, 10.04, 14.31, 14.31, 15.85, 14.44, 14.44, 2.82, 14.44],
        [0, 11.45, 10.04, 14.31, 15.85, 8.63, 17.26, 21.4, 4.23, 7.09, 21.66, 7.09, 1.41, 14.18, 2.82, 7.22, 8.63, 23.07, 2.82, 5.64, 10.04, 0, 11.45, 21.53, 21.27, 7.22, 24.48, 7.05, 12.86],
        [0, 14.18, 1.41, 21.66, 21.4, 14.44, 21.27, 28.75, 7.22, 17.26, 28.49, 5.64, 10.04, 23.07, 21.53, 15.85, 2.82, 28.36, 8.63, 7.09, 14.31, 11.45, 0, 28.62, 28.88, 4.23, 28.49, 7.22, 1.41],
        [0, 17, 28.49, 7.22, 7.22, 14.18, 8.63, 1.41, 21.27, 14.44, 1.41, 28.62, 21.4, 8.63, 7.09, 14.31, 28.36, 2.82, 21.27, 21.53, 14.31, 21.53, 28.62, 0, 21.53, 28.49, 4.23, 10.04, 28.75],
        [0, 19.82, 28.75, 7.22, 10.04, 14.44, 11.45, 1.41, 21.66, 14.18, 4.23, 28.36, 21.4, 7.09, 8.63, 14.31, 28.62, 5.64, 21.53, 23.07, 15.85, 21.27, 28.88, 2.82, 0, 28.49, 7.05, 12.86, 30.29],
        [0, 15.85, 2.82, 21.27, 21.53, 14.31, 21.66, 28.36, 8.63, 14.31, 28.62, 1.41, 7.09, 21.4, 21.4, 14.18, 1.41, 28.75, 7.22, 10.04, 14.44, 7.22, 4.23, 28.49, 28.49, 0, 28.88, 11.45, 5.64],
        [0, 15.59, 28.62, 11.45, 8.63, 15.85, 7.22, 5.64, 9.91, 18.67, 2.82, 30.29, 23.07, 12.86, 10.04, 17.26, 28.75, 1.41, 21.66, 14.31, 14.44, 24.48, 28.49, 4.23, 7.05, 28.88, 0, 7.09, 28.36],
        [0, 1.41, 8.63, 5.64, 2.82, 4.23, 1.41, 11.45, 2.82, 7.05, 8.63, 12.86, 5.64, 7.05, 4.23, 5.64, 10.04, 7.22, 4.23, 1.41, 2.82, 7.05, 7.22, 10.04, 12.86, 11.45, 7.09, 0, 7.09],
        [0, 14.31, 2.82, 23.07, 21.53, 15.85, 21.4, 36.1, 8.63, 18.67, 28.62, 7.05, 11.45, 24.48, 21.66, 17.26, 4.23, 28.49, 10.04, 7.22, 14.44, 12.86, 1.41, 28.75, 30.29, 5.64, 28.36, 7.09, 0]
    ];
}

function advance_right_distance_matrix()
{
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 14.31, 10.04, 7.22, 2.82, 7.09, 15.85, 7.22, 5.64, 14.31, 17.26, 10.04, 11.45, 8.63, 4.23, 21.66, 14.18, 8.63, 7.09, 1.41, 11.45, 14.18, 14.44, 17.26, 23.07, 14.31, 1.41, 8.5],
        [0, 14.31, 0, 21.53, 21.27, 14.31, 21.4, 28.62, 7.09, 15.85, 28.36, 4.23, 8.63, 21.66, 21.4, 14.44, 1.41, 28.49, 7.22, 7.22, 14.18, 10.04, 1.41, 28.49, 28.75, 2.82, 21.53, 8.63, 8.63],
        [0, 10.04, 21.53, 0, 2.82, 7.22, 4.23, 7.09, 14.44, 7.22, 8.63, 21.4, 14.18, 1.41, 1.41, 7.09, 21.4, 10.04, 14.31, 15.85, 8.63, 14.31, 21.66, 7.22, 7.22, 21.27, 11.45, 5.64, 24.48],
        [0, 7.22, 21.27, 2.82, 0, 7.22, 1.41, 8.63, 14.18, 10.04, 7.09, 21.66, 14.44, 4.23, 1.41, 8.63, 21.4, 7.22, 14.31, 14.31, 7.09, 15.85, 21.4, 7.22, 10.04, 21.53, 8.63, 2.82, 21.53],
        [0, 2.82, 14.31, 7.22, 7.22, 0, 8.63, 14.31, 7.22, 2.82, 14.31, 14.44, 7.22, 8.63, 7.09, 1.41, 14.18, 14.44, 7.09, 8.63, 1.41, 8.63, 14.44, 14.18, 14.44, 14.31, 15.85, 4.23, 9.91],
        [0, 7.09, 21.4, 4.23, 1.41, 8.63, 0, 10.04, 14.31, 11.45, 7.22, 23.07, 15.85, 5.64, 2.82, 10.04, 21.53, 7.09, 14.44, 14.18, 7.22, 17.26, 21.27, 8.63, 11.45, 21.66, 7.22, 1.41, 8.5],
        [0, 15.85, 28.62, 7.09, 8.63, 14.31, 10.04, 0, 21.53, 14.31, 2.82, 28.49, 21.27, 7.22, 7.22, 14.18, 28.49, 4.23, 21.4, 21.66, 14.44, 21.4, 28.75, 1.41, 1.41, 28.36, 5.64, 11.45, 28.88],
        [0, 7.22, 7.09, 14.44, 14.18, 7.22, 14.31, 21.53, 0, 10.04, 21.27, 10.04, 2.82, 15.85, 14.31, 8.63, 7.22, 21.4, 1.41, 1.41, 7.09, 4.23, 7.22, 21.4, 21.66, 8.63, 21.53, 2.82, 8.63],
        [0, 5.64, 15.85, 7.22, 10.04, 2.82, 11.45, 14.31, 10.04, 0, 15.85, 14.18, 7.22, 7.09, 8.63, 1.41, 14.44, 17.26, 8.63, 11.45, 4.23, 7.09, 17.26, 14.44, 14.18, 14.31, 18.67, 7.05, 18.67],
        [0, 14.31, 28.36, 8.63, 7.09, 14.31, 7.22, 2.82, 21.27, 15.85, 0, 28.75, 21.53, 10.04, 7.22, 14.44, 28.49, 1.41, 21.4, 21.4, 14.18, 21.66, 28.49, 1.41, 4.23, 28.62, 2.82, 8.63, 28.62],
        [0, 17.26, 4.23, 21.4, 21.66, 14.44, 23.07, 28.49, 10.04, 14.18, 28.75, 0, 7.22, 21.27, 21.53, 14.31, 2.82, 28.88, 8.63, 11.45, 15.85, 7.09, 5.64, 28.62, 28.36, 1.41, 30.29, 10.04, 5.64],
        [0, 10.04, 8.63, 14.18, 14.44, 7.22, 15.85, 21.27, 2.82, 7.22, 21.53, 7.22, 0, 14.31, 14.31, 7.09, 7.22, 21.66, 1.41, 4.23, 8.63, 1.41, 10.04, 21.4, 21.4, 7.09, 23.07, 4.23, 11.45],
        [0, 11.45, 21.66, 1.41, 4.23, 8.63, 5.64, 7.22, 15.85, 7.09, 10.04, 21.27, 14.31, 0, 2.82, 7.22, 21.53, 11.45, 14.44, 17.26, 10.04, 14.18, 23.07, 8.63, 7.09, 21.4, 12.86, 7.05, 24.48],
        [0, 8.63, 21.4, 1.41, 1.41, 7.09, 2.82, 7.22, 14.31, 8.63, 7.22, 21.53, 14.31, 2.82, 0, 7.22, 21.27, 8.63, 14.18, 14.44, 7.22, 14.44, 21.53, 7.09, 8.63, 28.49, 10.04, 4.23, 21.66],
        [0, 4.23, 14.44, 7.09, 8.63, 1.41, 10.04, 14.18, 8.63, 1.41, 14.44, 14.31, 7.09, 7.22, 7.22, 0, 14.31, 15.85, 7.22, 10.04, 1.41, 7.22, 15.85, 14.31, 14.31, 14.18, 17.26, 5.64, 17.26],
        [0, 21.66, 1.41, 21.4, 21.4, 14.18, 21.53, 28.49, 7.22, 14.44, 28.49, 2.82, 7.22, 21.53, 21.27, 14.31, 0, 28.62, 7.09, 8.63, 14.31, 8.63, 2.82, 28.36, 28.62, 1.41, 28.75, 10.04, 4.23],
        [0, 14.18, 28.49, 10.04, 7.22, 14.44, 7.09, 4.23, 21.4, 17.26, 1.41, 28.88, 21.66, 11.45, 8.63, 15.85, 28.62, 0, 21.53, 21.27, 14.31, 23.07, 28.36, 2.82, 5.64, 28.75, 1.41, 7.22, 28.49],
        [0, 8.63, 7.22, 14.31, 14.31, 7.09, 14.44, 21.4, 1.41, 8.63, 21.4, 8.63, 1.41, 14.44, 14.18, 7.22, 7.09, 21.53, 0, 2.82, 7.22, 2.82, 8.63, 21.27, 21.53, 7.22, 21.66, 4.23, 10.04],
        [0, 7.09, 7.22, 15.85, 14.31, 8.63, 14.18, 21.66, 1.41, 11.45, 21.4, 11.45, 4.23, 17.26, 14.44, 10.04, 8.63, 21.27, 2.82, 0, 7.22, 5.64, 7.09, 21.53, 23.07, 10.04, 14.31, 1.41, 7.22],
        [0, 1.41, 14.18, 8.63, 7.09, 1.41, 7.22, 14.44, 7.09, 4.23, 14.18, 15.85, 8.63, 10.04, 7.22, 1.41, 14.31, 14.31, 7.22, 7.22, 0, 10.04, 14.31, 14.31, 15.85, 14.44, 14.44, 2.82, 14.44],
        [0, 11.45, 10.04, 14.31, 15.85, 8.63, 17.26, 21.4, 4.23, 7.09, 21.66, 7.09, 1.41, 14.18, 14.44, 7.22, 8.63, 23.07, 2.82, 5.64, 10.04, 0, 11.45, 21.53, 21.27, 7.22, 17.26, 7.05, 12.86],
        [0, 14.18, 1.41, 21.66, 21.4, 14.44, 21.27, 28.75, 7.22, 17.26, 28.49, 5.64, 10.04, 23.07, 21.53, 15.85, 2.82, 28.36, 8.63, 7.09, 14.31, 11.45, 0, 28.62, 28.88, 4.23, 14.31, 7.22, 1.41],
        [0, 14.44, 28.49, 7.22, 7.22, 14.18, 8.63, 1.41, 21.4, 14.44, 1.41, 28.62, 21.4, 8.63, 7.09, 14.31, 28.36, 2.82, 21.27, 21.53, 14.31, 21.53, 28.62, 0, 2.82, 28.49, 4.23, 10.04, 28.75],
        [0, 17.26, 28.75, 7.22, 10.04, 14.44, 11.45, 1.41, 21.66, 14.18, 4.23, 28.36, 21.4, 7.09, 8.63, 14.31, 28.62, 5.64, 21.53, 23.07, 15.85, 21.27, 28.88, 2.82, 0, 28.49, 7.05, 12.86, 30.29],
        [0, 23.07, 2.82, 21.27, 21.53, 14.31, 21.66, 28.36, 8.63, 14.31, 28.62, 1.41, 7.09, 21.4, 28.49, 14.18, 1.41, 28.75, 7.22, 10.04, 14.44, 7.22, 4.23, 28.49, 28.49, 0, 28.88, 11.45, 5.64],
        [0, 14.31, 21.53, 11.45, 8.63, 15.85, 7.22, 5.64, 21.53, 18.67, 2.82, 30.29, 23.07, 12.86, 10.04, 17.26, 28.75, 1.41, 21.66, 21.4, 14.44, 24.48, 28.49, 4.23, 7.05, 28.88, 0, 7.09, 28.36],
        [0, 1.41, 8.63, 5.64, 2.82, 4.23, 1.41, 11.45, 2.82, 7.05, 8.63, 10.04, 4.23, 7.05, 4.23, 5.64, 10.04, 7.22, 4.23, 1.41, 2.82, 7.05, 14.31, 10.04, 12.86, 11.45, 7.09, 0, 7.09],
        [0, 8.5, 8.63, 24.48, 21.53, 9.91, 8.5, 28.88, 8.63, 18.67, 28.62, 5.64, 11.45, 24.48, 21.66, 17.26, 4.23, 28.49, 10.04, 7.22, 14.44, 12.86, 1.41, 28.75, 30.29, 5.64, 28.36, 7.09, 0]
    ];
}