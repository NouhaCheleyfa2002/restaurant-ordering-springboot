package com.nouha.service;


import com.nouha.model.Category;
import com.nouha.model.Food;
import com.nouha.model.Restaurant;
import com.nouha.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId)throws Exception;

    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian, boolean isNonVeg, boolean isSeasonal, String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId)throws Exception;

    public Food updateAvailabilityStatus(Long foodId)throws Exception;
}
