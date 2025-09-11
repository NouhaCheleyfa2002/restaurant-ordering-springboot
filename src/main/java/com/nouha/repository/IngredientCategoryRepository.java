package com.nouha.repository;

import com.nouha.model.Category;
import com.nouha.model.IngredientsCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientCategoryRepository extends JpaRepository<IngredientsCategory, Long> {

    List<IngredientsCategory> findByRestaurantId(Long restaurantId);
}
