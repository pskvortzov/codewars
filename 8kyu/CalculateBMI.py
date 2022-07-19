def bmi(weight, height):
    bmi = weight / height ** 2
    return ("Underweight", "Normal", "Overweight", "Obese")[(bmi > 18.5) + (bmi > 25) + (bmi > 30)