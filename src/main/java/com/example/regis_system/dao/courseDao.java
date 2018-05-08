package com.example.regis_system.Dao;

import com.example.regis_system.entity.Course;

import java.util.List;

public interface CourseDao {
    List<Course> getCourses();
    List<Course> getCoursesSearch(String searchText);
    Course findById(long id);
    Course addCourse(Course course);
    Course findByName(String searchName);
    Course updateCourse(Course course);
}
