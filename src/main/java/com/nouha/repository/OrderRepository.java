package com.nouha.repository;

import com.nouha.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.awt.print.Pageable;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    public List<Order> findByCustomerId(long userId);

    public List<Order> findByRestaurantId(long restaurantId);
}
