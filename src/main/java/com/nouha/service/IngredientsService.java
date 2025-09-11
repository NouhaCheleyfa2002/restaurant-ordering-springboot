package com.nouha.service;

import com.nouha.model.IngredientsCategory;
import com.nouha.model.IngredientsItem;

import java.util.List;

public interface IngredientsService {

    public IngredientsCategory createIngredientCategory(String name, Long restaurantId)throws Exception;

    public IngredientsCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientsCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception;

    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;

    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) throws Exception;

    public IngredientsItem updateStock(Long id) throws Exception;

}
