package com.example.regis_system.service;

import com.example.regis_system.entity.Course;

import java.util.List;

public interface courseService {
    List<Course> getCourses();
    Course findById(long id);
    Course addCourse(Course course);
    List<Course> queryCourse(String query);
    Course updateCourse(Course course);
}
