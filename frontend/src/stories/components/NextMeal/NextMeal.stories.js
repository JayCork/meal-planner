import { NextMeal } from './NextMeal';

export default {
  title: 'Meals/NextMeal',
  component: NextMeal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Meal = {
  args: {
    name: "Tandori Chicken",
    totalCookingTime: 80,
    targetedServingTime: "19:00",
    imgUrl: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
    calories: 215,
    activeCookingTime: 10,
    preperationTime: 20,
    
  },
};

export const HasPreparationTime = {
  args: {
    name: "Carbonara",
    totalCookingTime: 80,
    targetedServingTime: "19:00",
    imgUrl: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
    calories: 215,
    activeCookingTime: 10,
    preRequisiteTime: 10,
    
  },
};

