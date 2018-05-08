package com.example.regis_system.dao;

import com.example.regis_system.entity.Course;

import java.util.List;

public interface courseDao {
    List<Course> getCourses();
    List<Course> getCoursesSearch(String searchText);
    Course findById(long id);
    Course addProduct(Course course);
    Course findByName(String searchName);
    Course updateProduct(Course course);
}
